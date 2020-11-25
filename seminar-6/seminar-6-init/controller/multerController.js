const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const postService = require('../service/postService');

module.exports = {
    uploadImage: async (req, res) => {
        const { title, contents } = req.body;
        const { location: image } = req.file;

        if (!title || !contents) {
            console.log('제목, 내용 또는 이미지가 없습니다.');
            return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.CREATE_POST_FAIL));
        }
        
        try {
            const upload = await postService.uploadImage(title, contents, image);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_IMAGE_UPLOAD_SUCCESS, upload));
        } catch(error) {
            console.log(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_IMAGE_UPLOAD_FAIL));
        }
    },
    uploadImages: async (req, res) => {
        try {
            const imageUrls = req.files.map(file => file.location);
            console.log(req.files);
            console.log(req.body);
            res.send({
                imageUrls: imageUrls,
                file: req.files,
                body: req.body
            });
        } catch (error) {
            console.log(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_IMAGE_UPLOAD_FAIL));
        }
    }
}