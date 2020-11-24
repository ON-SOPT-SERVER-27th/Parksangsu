const { User, Post, Like } = require('../models');

module.exports = {
    postCreate: async (userId, title, contents) => {
        try{
            const createPost = await Post.create({
                UserId: userId,
                title,
                contents
            })
            return createPost;
        } catch (err) {
            throw err;
        }
    },
    uploadImage: async (title, contents, image) => {
        try {
            const uploadImage = await Post.create({
                postImageUrl: image,
                title,
                contents
            })
            return uploadImage;
        } catch (err) {
            throw err;
        }
    },
    postReadAll: async () => {
        try {
            const readAllPost = await Post.findAll({
                attributes: ['title', 'contents'],
                include: [{
                    model: User,
                    attributes: ['id', 'userName', 'email']
                }, {
                    model: User,
                    as: 'Liker',
                    attributes: { exclude : ['password', 'salt', 'id', 'email' ]}
                }]
            })
            return readAllPost;
        } catch (err) {
            throw err;
        }
    },
    likeFindById: async (PostId, UserId) => {
        try{
            const findByIdLike = await Like.findOne({
                where: {
                    PostId,
                    UserId
                }
            })
            return findByIdLike;
        } catch (err) {
            throw err;
        }
    },
    likeCreate: async (PostId, UserId) => {
        try {
            const createLike = await Like.create({
                PostId,
                UserId
            })
            return createLike;
        } catch (err) {
            throw err;
        }
    },
    likeDelete: async (PostId, UserId) => {
        try {
            const deleteLike = await Like.destroy({
                where: {
                    PostId,
                    UserId
                }
            })
            return deleteLike;
        } catch (err) {
            throw err;
        }
    }
}

