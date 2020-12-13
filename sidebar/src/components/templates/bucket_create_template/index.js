import React from 'react';
import BucketContents from '../../UI/organisms/bucket_contents';
import CreateDetailList from '../../UI/organisms/create_detail_list';
import Buttons from '../../UI/organisms/buttons';
import useStyles, { BucketCreateTemplateWrapper } from './style';

const BucketCreateTemplate = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header} />
      <BucketCreateTemplateWrapper>
        <BucketContents />
        <CreateDetailList />
        <Buttons />
      </BucketCreateTemplateWrapper>
    </>
  );
};

export default BucketCreateTemplate;
