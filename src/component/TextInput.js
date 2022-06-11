import { Fragment, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@mui/material/TextField';
import classes from './TextInput.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PostData from '../api/postData';
import EditData from '../api/editData';

const TextInput = (props) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    props.textFieldTitle !== ''
      ? props.setTextFieldTitle(props.textFieldTitle)
      : props.setTextFieldTitle('');
    props.textFieldContent !== ''
      ? props.setTextFieldContent(props.textFieldContent)
      : props.setTextFieldContent('');
    props.textFieldTags !== ''
      ? props.setTextFieldTags(props.textFieldTags)
      : props.setTextFieldTags('');
    props.textFieldWriter !== ''
      ? props.setTextFieldWriter(props.textFieldWriter)
      : props.setTextFieldWriter('');
  }, []);

  const onClickHandler = (event) => {
    setIsClicked(true);
    if (
      props.textFieldTags === '' ||
      props.textFieldTitle === '' ||
      props.textFieldContent === '' ||
      props.textFieldWriter === ''
    ) {
      return;
    }
    setIsFilled(true);
    const data = {
      title: props.textFieldTitle,
      content: props.textFieldContent,
      tags: props.textFieldTags,
      writer: props.textFieldWriter,
      date: getDate(),
    };
    props.isEdited
      ? EditData(data, props.id)
      : PostData(data, props.contentLength);

    props.onBackHandler();
    event.preventDefault();
  };

  const getDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
  };
  return (
    <Fragment>
      <TextField
        required
        id='outlined-required'
        label='Title'
        className={classes.title}
        onChange={(title) => {
          props.setTextFieldTitle(title.target.value);
        }}
        defaultValue={props.textFieldTitle}
      />
      <Editor
        value={props.textFieldContent}
        onInit={(_evt, editor) => {
          props.setTextFieldContent(editor.getContent());
        }}
        onEditorChange={(newValue, _) => {
          props.setTextFieldContent(newValue);
        }}
      />
      <TextField
        required
        id='outlined-required'
        label='Tags'
        className={classes.tags}
        onChange={(tags) => {
          props.setTextFieldTags(tags.target.value);
        }}
        defaultValue={props.textFieldTags}
      />
      <TextField
        required
        id='outlined-required'
        label='Writer'
        className={classes.writer}
        onChange={(writer) => {
          props.setTextFieldWriter(writer.target.value);
        }}
        defaultValue={props.textFieldWriter}
      />
      <Stack spacing={2} direction='row'>
        <Button variant='contained' size='small' onClick={onClickHandler}>
          Submit
        </Button>
        <Button variant='outlined' size='small' onClick={props.onBackHandler}>
          Cancel
        </Button>
      </Stack>
      {!isFilled && isClicked && <p>Harap isi judul, isi, tags dan penulis</p>}
    </Fragment>
  );
};

export default TextInput;
