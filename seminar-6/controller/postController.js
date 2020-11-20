const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const { User, Post, Like } = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const { title, contents, userId } = req.body;
        
        if(!title || !contents || !userId){
            console.log('원하는 값을 넣어주세요.');
            return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.NULL_VALUE));
        }

        try {
            const user = await User.findOne({
                where: {
                    id: userId
                }
            })

            if(!user) {
                console.log('유저 id가 없습니다');
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.NULL_VALUE));
            }
            
            const post = await Post.create({
                UserId: userId,
                title,
                contents
            })
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch(error) {
            console.log(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    readAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                attributes: ['title', 'contents'],
                include: [{
                    model: User,
                    attributes: ['id', 'userName', 'email']
                }, {
                    model: User,
                    as: 'Liker',
                    attributes: { exclude : ['password', 'salt', 'id', 'email' ]}
                }]
            });
            console.log(JSON.stringify(posts, null, 2));
            return res.status(sc.OK).send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, posts));
        } catch (err) {
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
        }
    },
    createLike: async (req, res) => {
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try {
            const like = await Like.create({ PostId, UserId });
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_LIKE_SUCCESS, like));
        } catch (err) {
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.success(sc.INTERNAL_SERVER_ERROR, rm.CREATE_LIKE_FAIL));
        }
    },
    deleteLike: async (req, res) => {
        const PostId = req.params.postId;
        const UserId = req.body.userId;

        try {
            const like = await Like.findOne({
                where: {
                    PostId,
                    UserId
                }
            })
            
            if(!like) {
                console.log('존재하지 않는 id입니다.');
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.DELETE_LIKE_FAIL));
            }

            const likeDelete = await Like.destroy({
                where: {
                    PostId,
                    UserId
                }
            })
            res.status(sc.OK).send(ut.success(sc.OK, rm.DELETE_USER_SUCCESS, likeDelete));
        } catch (err) {
            console.log(err);
            res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.DELETE_USER_FAIL));
        }
    }
}