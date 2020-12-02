const uuidv4 = require('uuid').v4;
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;

const endpoint = 'https://kr.object.ncloudstorage.com';
const region = 'kr-standard';
const accessKeyId = process.env.API_ACCESS_KEY;
const secretAccessKey = process.env.API_SECRET_KEY;
const bucketName = process.env.API_BUCKET_NAME;
const fileKey = `${uuidv4()}`;

const S3 = new AWS.S3({
  endpoint,
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

exports.upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, fileKey);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
});

/*
    POST /api/objects
    * 이미지 파일 업로드 API
*/
exports.setObject = (req, res, next) => {
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
