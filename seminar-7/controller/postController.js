const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const postService = require('../service/postService');

module.exports = {
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
    }
}