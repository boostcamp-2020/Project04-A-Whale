import React, { useState, useRef, useCallback } from 'react';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { WriteText, TextArea, UploadPicture } from './style';

const endpoint = 'https://kr.object.ncloudstorage.com';
const region = 'kr-standard';
const accessKeyId = process.env.REACT_APP_API_ACCESS_KEY;
const secretAccessKey = process.env.REACT_APP_API_SECRET_KEY;

const S3 = new AWS.S3({
  endpoint,
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const bucketName = process.env.REACT_APP_BUCKET_NAME;

const WriteTextPicture = ({ placeholder, text, onTextChange, addText }) => {
  const [dragging, setDragging] = useState(false);
  const textarea = useRef();

  const dragInHandler = useCallback(() => {
    setDragging(true);
  }, []);

  const dragOutHandler = useCallback(() => {
    setDragging(false);
  }, []);

  const uploadImage = useCallback(async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    const fileType = file.type.split('/');
    if (fileType[0] !== 'image') return alert('이미지 파일이 아닙니다.');
    const fileKey = `${uuidv4()}.${fileType[1]}`;
    await S3.putObject({
      Bucket: bucketName,
      Key: fileKey,
      ACL: 'public-read',
      Body: file,
    })
      .promise()
      .then((data) => {
        if (data.$response.httpResponse.statusCode === 200) {
          addText(`![](${[endpoint, bucketName, fileKey].join('/')})\n`);
          return null;
        }
        return alert(`응답 코드: ${data.$response.httpResponse.statusCode}`);
      })
      .catch((err) => {
        console.log(err);
      });
    return null;
  }, []);

  const dropImageHandler = useCallback(async (e) => {
    await uploadImage(e);
    setDragging(false);
  }, []);

  const uploadImageHandler = useCallback(async (e) => {
    await uploadImage(e);
    e.target.value = null;
  }, []);

  return (
    <WriteText
      onDragEnter={dragInHandler}
      onDragLeave={dragOutHandler}
      onDrop={dropImageHandler}
      style={dragging ? { boxShadow: '0 0 3px 3px #ddddff' } : {}}
    >
      <TextArea placeholder={placeholder} value={text} ref={textarea} onChange={onTextChange} />
      <UploadPicture type="file" onChange={uploadImageHandler} />
    </WriteText>
  );
};

export default WriteTextPicture;
