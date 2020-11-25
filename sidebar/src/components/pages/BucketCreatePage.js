import React, { useState } from 'react';
import BucketCreateTemplate from '../templates/BucketCreateTemplate';

const BucketCreatePage = () => {
  const [title, setTitle] = useState('1');
  const [description, setDescription] = useState('2');

  const onReset = () => {
    setTitle('');
    setDescription('');
  };

  return <BucketCreateTemplate title={title} description={description} onReset={onReset} />;
};

export default BucketCreatePage;
