const { OK } = require('../../config/statusCode').statusCode;
const bucketServices = require('../../services/bucket');
const detailServices = require('../../services/detail');

/*
    GET /api/bucket/presets
    * 버킷 프리셋 검색 기능 API
*/
exports.presets = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    const presets = await bucketServices.getPresets(keyword);

    res.status(OK).json({
      message: '버킷 프리셋 불러오기 성공',
      data: presets,
    });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, description, details, ref } = req.body;
    const newBucket = await bucketServices
      .create(title, description, 1)
      .then((data) => JSON.parse(JSON.stringify(data)));
    const bucketNo = newBucket.no;
    const newDetails = await detailServices
      .bulkCreate(
        details.map((detail) => {
          return { detail, bucketNo };
        })
      )
      .then((data) => JSON.parse(JSON.stringify(data)));

    console.log(newDetails);

    res.status(OK).json({ newDetails });
  } catch (error) {
    next(error);
  }
};
