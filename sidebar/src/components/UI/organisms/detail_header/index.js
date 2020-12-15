import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelSaveButton from '../../molecules/cancle_save_button';
import { updateBucketInfo } from '../../../../modules/buckets';
import ConfirmDialog from '../../molecules/confirm_dialog';
import { useStyles, TitleWrapper } from './style';
import ModifyButton from '../../atoms/modify_button';

const DetailHeader = ({ bucket, achieveDisable, isAchieve }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(bucket.title);
  const [description, setDescription] = useState(bucket.description);
  const [prevTitle, setPrevTitle] = useState('');
  const [prevDescription, setPrevDescription] = useState('');

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleDescChange = ({ target }) => setDescription(target.value);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setPrevTitle(title);
    setPrevDescription(description);
    setEdit(true);
  };
  const handleCancel = () => {
    setTitle(prevTitle);
    setDescription(prevDescription);
    setEdit(false);
  };

  const handleSave = () => {
    dispatch(updateBucketInfo({ no: bucket.no, title, description }));
    setEdit(false);
  };

  const handleAchieve = () => {
    history.push({ pathname: `/achieves/${bucket.no}/create`, state: { bucket } });
  };

  return (
    <>
      {edit ? (
        <>
          <TextField
            value={title}
            label="Title"
            variant="outlined"
            placeholder="Title"
            fullWidth
            InputProps={{
              classes: {
                input: classes.titleResize,
              },
            }}
            onChange={handleTitleChange}
          />
          <TextField
            className={classes.textField}
            value={description}
            label="Description"
            variant="outlined"
            placeholder="Description"
            fullWidth
            multiline
            InputProps={{
              classes: {
                input: classes.descResize,
              },
            }}
            onChange={handleDescChange}
          />
          <CancelSaveButton handleCancel={handleCancel} handleSave={handleSave} />
        </>
      ) : (
        <>
          <TitleWrapper>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            {isAchieve ? null : (
              <>
                <ModifyButton onClick={handleClick} />
                <Button
                  className={classes.achieveButton}
                  variant="outlined"
                  disabled={achieveDisable}
                  onClick={handleOpen}
                >
                  달성 완료🎉
                </Button>
              </>
            )}
          </TitleWrapper>
          <Typography className={classes.description} variant="h5">
            ＃ {description}
          </Typography>
        </>
      )}
      <ConfirmDialog
        open={open}
        handleClose={handleClose}
        handleClick={handleAchieve}
        text="소감작성 페이지로 이동하시겠습니까?"
      />
    </>
  );
};

export default DetailHeader;
