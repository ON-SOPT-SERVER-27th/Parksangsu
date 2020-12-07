const { Post, PostDetail, PostDetailSelect, Hashtag, Facilities } = require('../models');

module.exports = {
    createPost: async (title, contents, address, price, image, category) => {
        try {
            const createPost = await Post.create({
                title,
                contents,
                address,
                price,
                postImageUrl: image,
                category
            })
            return createPost;
        } catch (err) {
            throw err;
        }
    },
    readAllPost: async () => {
        try {
            const readAllPost = await Post.findAll({});
            return readAllPost;
        } catch (err) {
            throw err;
        }
    },
    findAllPost: async (category) => {
        try {
            const findAllPost = await Post.findAll({
                where: {
                    category
                }
            })
            return findAllPost
        } catch (err) {
            throw err;
        }
    },
    createPostDetail: async (introducedPlace, openingHours, closedDays, notice, postId, imageUrls) => {
        try {
            const createPostDetail = await PostDetail.create({
                introducedPlace,
                openingHours,
                closedDays,
                notice,
                postImageUrl: imageUrls,
                PostId: postId
            })
            return createPostDetail;
        } catch (err) {
            throw err;
        }
    },
    findPostId: async (postId) => {
        try {
            const findPostId = await Post.findOne({
                where: {
                    id: postId
                }
            })
            return findPostId
        } catch (err) {
            throw err;
        }
    },
    findPostDetailId: async (id) => {
        try {
            const findPostDetailId = await PostDetail.findOne({
                where: {
                    PostId: id
                }
            })
            return findPostDetailId;
        } catch (err) {
            throw err;
        }
    }
}

