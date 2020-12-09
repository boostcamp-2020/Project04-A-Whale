import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import BucketContents from '../../UI/organisms/bucket_contents';
import CreateDetailList from '../../UI/organisms/create_detail_list';
import Buttons from '../../UI/organisms/buttons';

const BucketCreateTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

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
