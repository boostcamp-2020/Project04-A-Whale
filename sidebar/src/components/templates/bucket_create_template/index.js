import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import SearchGuide from '../../UI/molecules/search_guide';
import BucketSearchModal from '../../UI/molecules/bucket_search_modal';
import BucketContents from '../../UI/organisms/bucket_contents';
import CreateDetailList from '../../UI/organisms/create_detail_list';
import Buttons from '../../UI/organisms/buttons';

const BucketCreateTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#555555',
  },
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
  const [isHover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <SearchButtonWrapper>
        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          다른 사용자의 목표 검색 🔍
        </Button>
        <SearchGuide isHover={isHover} />
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <BucketSearchModal modalClose={() => setOpen(false)} />
        </Modal>
      </SearchButtonWrapper>
      <BucketCreateTemplateWrapper>
        <BucketContents />
        <CreateDetailList />
        <Buttons />
      </BucketCreateTemplateWrapper>
    </main>
  );
};

export default BucketCreateTemplate;
