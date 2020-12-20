import React, { useState, useRef, useCallback } from 'react';
import { WriteText, TextArea, UploadPicture, useStyles, UploadPictureLabel } from './style';
import { uploadObjectStorage } from '../../../../lib/api';

const WriteTextPicture = ({ placeholder, text, changeText }) => {
  const classes = useStyles();
  const [dragging, setDragging] = useState(false);
  const textarea = useRef();

  const changeTextHandler = useCallback((e) => {
    changeText(e.target.value);
  }, []);

  const dragInHandler = useCallback(() => {
    setDragging(true);
  }, []);

  const dragOutHandler = useCallback(() => {
    setDragging(false);
  }, []);

  const uploadImage = useCallback(
    async (file) => {
      const fileType = file.type.split('/');
      if (fileType[0] !== 'image') return alert('이미지 파일이 아닙니다.');
      const result = await uploadObjectStorage(file);
      if (result) {
        changeText(`${text ? `\n${text}` : ''}![${file.name}](${result.data.url})\n`);
      }
      return null;
    },
    [text]
  );

  const dropImageHandler = useCallback(async (e) => {
    e.stopPropagation();
    e.preventDefault();
    await uploadImage(e.dataTransfer.files[0]);
    setDragging(false);
  }, []);

  const uploadImageHandler = useCallback(async (e) => {
    await uploadImage(e.target.files[0]);
    e.target.value = null;
  }, []);

  return (
    <WriteText
      onDragEnter={dragInHandler}
      onDragLeave={dragOutHandler}
      onDrop={dropImageHandler}
      style={dragging ? { boxShadow: '0 0 3px 3px #ddddff' } : {}}
    >
      <TextArea
        className={classes.textInput}
        placeholder={placeholder}
        value={text}
        ref={textarea}
        onChange={changeTextHandler}
      />
      <UploadPictureLabel htmlFor="ex_file">이미지 파일 선택</UploadPictureLabel>
      <UploadPicture type="file" onChange={uploadImageHandler} id="ex_file" />
    </WriteText>
  );
};

export default WriteTextPicture;
