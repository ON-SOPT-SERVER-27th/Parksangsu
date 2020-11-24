const { User, Post } = require('../models');

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
    }
}


