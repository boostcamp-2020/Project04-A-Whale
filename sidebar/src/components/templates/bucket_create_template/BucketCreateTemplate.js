import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import BucketSearchBar from '../../UI/molecules/bucket_search_bar/BucketSearchBar';
import BucketContents from '../../UI/organisms/bucket_contents/BucketContents';
import DetailList from '../../UI/organisms/detail_list/DetailList';
import Buttons from '../../UI/organisms/buttons/Buttons';

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
        <BucketSearchBar />
        <BucketContents />
        <DetailList />
        <Buttons />
      </BucketCreateTemplateWrapper>
    </>
  );
};

export default BucketCreateTemplate;
