import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BlockIcon from '@material-ui/icons/Block';
import CreateIcon from '@material-ui/icons/Create';
import { updateBucketInfo } from '../../../../modules/buckets';
import { useStyles, TitleWrapper, ButtonWrapper } from './style';

const DetailHeader = ({ bucket }) => {
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
            className={classes.textField}
            value={title}
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
          <ButtonWrapper>
            <Button
              style={{ marginRight: '10px' }}
              variant="contained"
              color="default"
              startIcon={<BlockIcon />}
              onClick={handleCancel}
            >
              취소
            </Button>
            <Button
              variant="contained"
              color="default"
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              저장
            </Button>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <TitleWrapper>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            <CreateIcon onClick={handleClick} />
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
