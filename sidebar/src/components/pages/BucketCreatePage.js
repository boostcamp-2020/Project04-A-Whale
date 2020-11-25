import React, { useState } from 'react';
import BucketCreateTemplate from '../templates/BucketCreateTemplate';

const BucketCreatePage = () => {
  const [details, setDetails] = useState(['detail1', 'detail2']);

  const detailAddHandler = (v) => setDetails(details.concat(v));
  const detailRemoveHandler = (v) => {
    const idx = details.indexOf(v);
    setDetails(details.filter((_, i) => i !== idx));
  };
  return (
    <BucketCreateTemplate
      details={details}
      AddHandler={detailAddHandler}
      RemoveHandler={detailRemoveHandler}
    />
  );
};

export default BucketCreatePage;
