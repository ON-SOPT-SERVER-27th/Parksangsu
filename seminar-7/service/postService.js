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
    }
}

