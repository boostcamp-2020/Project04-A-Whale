import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import CancelSaveButton from '../../molecules/cancle_save_button';
import { updateBucketInfo } from '../../../../modules/buckets';
import { useStyles, TitleWrapper } from './style';

const DetailHeader = ({ bucket, achieveDisable }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(bucket.title);
  const [description, setDescription] = useState(bucket.description);
  const [prevTitle, setPrevTitle] = useState('');
  const [prevDescription, setPrevDescription] = useState('');

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleDescChange = ({ target }) => setDescription(target.value);

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
            <CreateIcon onClick={handleClick} />
            <Button className={classes.achieveButton} variant="outlined" disabled={achieveDisable}>
              달성 완료🎉
            </Button>
          </TitleWrapper>
          <Typography className={classes.description} variant="h5">
            {description}
          </Typography>
        </>
      )}
    </>
  );
};

export default DetailHeader;
