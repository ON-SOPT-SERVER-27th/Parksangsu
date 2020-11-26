const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const jwt = require('../modules/jwt');
const userService = require('../service/userService');
const { User } = require('../models');

module.exports = {
    signup : async (req, res) => {
        const { email, password, userName } = req.body;
            if(!email || !password || !userName){
                console.log('데이터가 없습니다.');
                res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
            }    
            try {
                const alreadyEmail = await userService.emailCheck(email);
                if(alreadyEmail){
                    console.log('이미 존재하는 이메일입니다.');
                    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ID));
                }
                
                const user = await userService.signup(email, password, userName);
            
                return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS, {
                    id: user.id, 
                    email: user.email, 
                    userName: user.userName
                }))
        
            } catch(error) {
                console.log(error);
                res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_UP_FAIL));
            }
    },
    signin : async (req, res) => {
        const { email, password } = req.body;
        
        if(!email || !password ){
            console.log('존재하는 아이디가 아닙니다.');
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));        
        }    
    
        try{
            const alreadyEmail = await userService.emailCheck(email);
            if(!alreadyEmail){
                console.log('DB에 존재하는 아이디가 아닙니다.');
                res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
            }
            const { salt, password: hashedPassword } = alreadyEmail;            
            const user = await userService.signin(email, password, salt);
            
            if(user.password !== hashedPassword){
                console.log('비밀번호가 일치하지 않습니다.');
                res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
            }
            
            const { accessToken, refreshToken } = await jwt.sign(user);
            
            res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS, {
                accessToken,
                refreshToken
            }));  
        
        } catch(error){
            console.log(error);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.BAD_REQUEST, responseMessage.INTERNAL_SERVER_ERROR));
        }   
        
    },
    getUser : async (req, res) => {
        try{
            const findAllUser = await userService.userFindAll(); 
            res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_USER_SUCCESS, findAllUser));
        } catch (error) {
            console.log(error);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
    },
    getId : async (req, res) => {
        const { id } = req.params;
    
        try{
        const findByIdUser = await userService.userIdCheck(id);

        if(!findByIdUser){
            console.log('존재하지 않는 아이디입니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
        }
            res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_USER_SUCCESS, findByIdUser));
        } catch(error){
            console.log(error);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.READ_USER_FAIL));
        }
    },
    deleteId : async (req, res) => {
        const { id } = req.params;
    
        try {
            const findByIdUser = await userService.userIdCheck(id);
    
            if(!findByIdUser){
                console.log('존재하지 않는 아이디입니다.');
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
            }
    
            const deleteByIdUser = await userService.userIdDelete(id);
    
            res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.DELETE_USER_SUCCESS, deleteByIdUser));
        } catch(error){
            console.log(error);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }    
    },
    putId : async (req, res) => {
        const { id } = req.params;
        const { email, userName, password } = req.body;
    
        if(!email || !userName || !password){
            console.log('데이터가 없습니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }

        try {
            const findByIdUser = await userService.userIdCheck(id);
            if(!findByIdUser){
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
            }
            const putUser = await userService.userUpdate(id, email, password, userName);

            res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.UPDATE_USER_SUCCESS, putUser));
        } catch(error) {
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
    }
}




