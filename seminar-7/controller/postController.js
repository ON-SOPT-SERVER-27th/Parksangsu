const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const postService = require('../service/postService');

module.exports = {

    // Post API
    createPost: async (req, res) => {
        const { location: image } = req.file;
        const { title, contents, address, price, category } = req.body;
        if(!title || !contents || !address || !price || !category || !image) {
            console.log('필요한 값을 넣지 않았습니다.');
            return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.NULL_VALUE));
        }
        try {
            const postCreate = await postService.createPost(title, contents, address, price, image, category);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, postCreate));
        } catch (err) {
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    readAllPost: async (req, res) => {
        try {
            const getReadAllPost = await postService.readAllPost();
            return res.status(sc.OK).send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, getReadAllPost));
        } catch (err) {
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
        }
    },
    findAllPost: async (req, res) => {
        const { category } = req.body;
        try {
            const findAllPost = await postService.findAllPost(category);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.FIND_POST_SUCCESS, findAllPost));
        } catch (err) {
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.FIND_POST_FAIL));
        }
    },

    // PostDetail API -> postDetailImage join해서 데이터 가져오기 -> 그 전에, array 데이터는 따로 넣는걸로. 대신 id값은 가져오고. 
    createPostDetail: async (req, res, next) => {
        // const imageUrls = req.files.map(file => file.location);
        // console.log(imageUrls);
        const { introducedPlace, openingHours, closedDays, notice } = req.body;
        const { postId } = req.params;
            
        if(!introducedPlace || !openingHours || !closedDays || !notice || !postId) {
                console.log('필요한 값을 넣지 않았습니다.');
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.NULL_VALUE)); 
            }
        try {
            const findPostId = await postService.findPostId(postId);
            if(!findPostId) {
                console.log('원하는 post id값이 없습니다.')
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.FIND_POST_ID_FAIL));
            }
            const findPostDetailId = await postService.findPostDetailId(postId);
            if(!findPostDetailId) {
                const postDetailCreate = await postService.createPostDetail(introducedPlace, openingHours, closedDays, notice, postId);
                res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, postDetailCreate));
            } else {
                res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.DUPLICATE_VALUES));
            }            
        } catch (err) {
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_DETAIL_FAIL));
        }
        next();
    },
    findPostDetail: async (req, res) => {
        const { postId } = req.params;
        try {
            const findPostDetail = await postService.findPostDetailIdOne(postId);
            if (!findPostDetail) {
                console.log('존재하지 않는 아이디입니다.');
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.NULL_VALUE));
            }
            return res.status(sc.OK).send(ut.success(sc.OK, rm.FIND_POST_DETAIL_SUCCESS, findPostDetail));
        } catch (err) {
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.FIND_POST_DETAIL_FAIL));
        }
    }
}