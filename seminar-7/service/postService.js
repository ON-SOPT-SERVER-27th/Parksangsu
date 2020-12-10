const { Post, PostDetail, PostDetailSelect, Hashtag, Facilities, PostDetailImage } = require('../models');

module.exports = {
    // Post Service
    createPost: async (title, address, price, image, category) => {
        try {
            const createPost = await Post.create({
                title,
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
                },
                include: [{
                    model: PostDetail,
                    as: 'hashed',
                    attributes: { exclude : ['contents', 'introducedPlace', 'openingHours', 'closedDays', 'notice', 'PostId']}
                }]
            })
            return findAllPost
        } catch (err) {
            throw err;
        }
    },

    // PostDetail Service

    // POST PostDetail 
    createPostDetail: async (contents, introducedPlace, openingHours, closedDays, notice, postId) => {
        try {
            const createPostDetail = await PostDetail.create({
                contents,
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

    // POST PostDetailImage  
    createPostDetailImage: async (findPostDetailId, imageUrls) => {
        try {
            const createPostDetailImage = await PostDetailImage.create({
                postImageUrl: imageUrls,
                PostDetailId: findPostDetailId
            })
            return createPostDetailImage;
        } catch (err) {
            throw err;
        }
    },
    findPostDetailId: async (postId) => {
        try {
            const findPostDetailId = await PostDetail.findOne({
                where: {
                    PostId: postId
                }
            })
            return findPostDetailId
        } catch (err) {
            throw err;
        }
    },
    
    // GET PostDetail
    findPostDetailIdOne: async (postId) => {
        try {
            const findPostDetailId = await PostDetail.findOne({
                where: {
                    PostId: postId
                },
                include: [{
                    model: PostDetailImage,
                    attributes: ['postImageUrl']
                }, {
                    model: Facilities,
                    attributes: ['iconImageUrl', 'contents'] 
                }, {
                    model: Post,
                    as: 'hasher',
                    attributes: { exclude : ['id', 'contents', 'address', 'price', 'postImageUrl', 'category' ]}
                }]
            })
            return findPostDetailId;
        } catch (err) {
            throw err;
        }
    },

    // POST PostDetailSelect
    createPostDetailSelect: async (title, contents, reservationTime, capacity, postId) => {
        try {
            const createPostDetailSelect = await PostDetailSelect.create({
                title,
                contents,
                reservationTime,
                capacity,
                PostId: postId
            })
            return createPostDetailSelect;
        } catch (err) {
            throw err;
        }
    },
    findPostDetailSelectId: async (postId) => {
        try {
            const findPostDetailId = await PostDetailSelect.findOne({
                where: {
                    PostId: postId
                },
                attributes: ['id']
            })
            return findPostDetailId
        } catch (err) {
            throw err;
        }
    },
    findPostDetailSelectIdOne: async (postId) => {
        try {
            const findPostDetailSelectId = await PostDetailSelect.findOne({
                where: {
                    PostId: postId
                }
            })
            return findPostDetailSelectId;
        } catch (err) {
            throw err;
        }
    },

    // POST Facilities
    createFacilities: async (image, contents, postId) => {
        try {
            const createFacilities = await Facilities.create({
                iconImageUrl: image,
                contents,
                PostDetailId: postId
            })
            return createFacilities;
        } catch (err) {
            throw err;
        }
    },
    findFacilitiesId: async (postId) => {
        try {
            const findFacilitiesId = await PostDetail.findOne({
                where: {
                    id: postId
                },
                attributes: ['id']
            })
            return findFacilitiesId
        } catch (err) {
            throw err;
        }
    },

    // POST Hashtag
    createHashtag: async (postId, postDetailId, tag) => {
        try {
            const createHashtag = await Hashtag.create({
                PostId: postId,
                PostDetailId: postDetailId,
                tag
            })
            return createHashtag;
        } catch (err) {
            throw err;
        }
    }

}
