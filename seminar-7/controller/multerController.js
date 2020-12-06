const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const bannerService = require('../service/bannerService');

module.exports = {
    uploadImage: async (req, res) => {
        const { location: image } = req.file;
        try {
            const upload = await bannerService.uploadBannerImage(image);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_IMAGE_UPLOAD_SUCCESS, upload));
        } catch(error) {
            console.log(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_IMAGE_UPLOAD_FAIL));
        }
    }
}