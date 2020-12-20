import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import SearchGuide from '../../UI/molecules/search_guide';
import BucketSearchModal from '../../UI/molecules/bucket_search_modal';
import BucketContents from '../../UI/organisms/bucket_contents';
import CreateDetailList from '../../UI/organisms/create_detail_list';
import Buttons from '../../UI/organisms/buttons';
import useStyles, { BucketCreateTemplateWrapper, SearchButtonWrapper } from './style';

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
