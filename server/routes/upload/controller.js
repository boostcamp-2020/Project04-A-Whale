const { CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;

/*
    POST /api/upload
    * 이미지 파일 업로드 API
*/
exports.uploadFile = (req, res, next) => {
  try {
    res.status(CREATED).json({
      message: '이미지 파일 업로드 성공',
      url: req.file.location,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: '이미지 파일 업로드 실패',
    });
  }
};
