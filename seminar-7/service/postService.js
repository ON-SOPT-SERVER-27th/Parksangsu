const { Post, PostDetail, PostDetailSelect, Hashtag, Facilities, PostDetailImage } = require('../models');

module.exports = {
    // Post Service
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

    // PostDetail Service

    // Post PostDetail 
    createPostDetail: async (introducedPlace, openingHours, closedDays, notice, postId) => {
        try {
            const createPostDetail = await PostDetail.create({
                introducedPlace,
                openingHours,
                closedDays,
                notice,
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

    // Post PostDetailImage  
    createPostDetailImage: async (postId, imageUrls) => {
        try {
            const createPostDetailImage = await PostDetailImage.create({
                postImageUrl: imageUrls,
                PostDetailId: postId
            })
            return createPostDetailImage;
        } catch (err) {
            throw err;
        }
    },

    

    // GET PostDetail
    findPostDetailId: async (postId) => {
        try {
            const findPostDetailId = await PostDetail.findOne({
                where: {
                    PostId: postId
                }
            })
            return findPostDetailId;
        } catch (err) {
            throw err;
        }
    }
}

