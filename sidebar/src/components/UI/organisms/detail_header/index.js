import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BlockIcon from '@material-ui/icons/Block';
import CreateIcon from '@material-ui/icons/Create';
import { useStyles, TitleWrapper, ButtonWrapper } from './style';

const DetailHeader = ({ bucket }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(bucket.title);
  const [desc, setDesc] = useState(bucket.description);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleClick = () => {
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <>
          <TextField
            className={classes.textField}
            value={title}
            placeholder="title"
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
            value={desc}
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
              color="secondary"
              startIcon={<BlockIcon />}
            >
              취소
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
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
            {desc}
          </Typography>
        </>
      )}
    </>
  );
};

export default DetailHeader;
