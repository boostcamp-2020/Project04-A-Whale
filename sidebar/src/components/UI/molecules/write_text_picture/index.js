import React, { useState, useRef, useCallback } from 'react';
import { WriteText, TextArea, UploadPicture } from './style';
import { setObjectStorage } from '../../../../lib/api';

const WriteTextPicture = ({ placeholder, text, onTextChange, addText }) => {
  const [dragging, setDragging] = useState(false);
  const textarea = useRef();

  const dragInHandler = useCallback(() => {
    setDragging(true);
  }, []);

  const dragOutHandler = useCallback(() => {
    setDragging(false);
  }, []);

  const uploadImage = useCallback(async (file) => {
    const fileType = file.type.split('/');
    if (fileType[0] !== 'image') return alert('이미지 파일이 아닙니다.');
    const result = await setObjectStorage(file);
    addText(`\n![${file.name}](${result.data.url})`);
    return null;
  }, []);

  const dropImageHandler = useCallback(async (e) => {
    e.stopPropagation();
    e.preventDefault();
    await uploadImage(e.dataTransfer.files[0]);
    setDragging(false);
  }, []);

  const uploadImageHandler = useCallback(async (e) => {
    console.log(e.target.files[0]);
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
      <TextArea placeholder={placeholder} value={text} ref={textarea} onChange={onTextChange} />
      <UploadPicture type="file" onChange={uploadImageHandler} />
    </WriteText>
  );
};

export default WriteTextPicture;
