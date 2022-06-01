import { Fragment, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@mui/material/TextField';
import classes from './TextInput.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PostData from '../api/postData';
import EditData from '../api/editData';

const TextInput = (props) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState();

  const onClickHandler = (event) => {
    setIsClicked(true);
    if (
      (tags === '' || title === '' || text === '') &&
      props.textFieldTitle === ''
    ) {
      return;
    }
    setIsFilled(true);
    const data = {
      title: props.textFieldTitle !== '' ? props.textFieldTitle : title,
      content: props.textFieldContent !== '' ? props.textFieldContent : text,
      tags: props.textFieldTags !== '' ? props.textFieldTags : tags,
      writer: 'Farras Timorremboko',
      date: getDate(),
    };
    props.isEdited
      ? EditData(data, props.id)
      : PostData(data, props.contentLength);

    props.onBackHandler();
    props.setIsEdited(false);
    props.setTextFieldTags('');
    props.setTextFieldTitle('');
    props.setTextFieldContent('');
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
          setTitle(title.target.value);
        }}
        defaultValue={props.textFieldTitle}
      />
      <Editor
        value={props.textFieldContent !== '' ? props.textFieldContent : ''}
        onInit={(_evt, editor) => {
          setText(editor.getContent());
        }}
        onEditorChange={(newValue, editor) => {
          props.setTextFieldContent(newValue);
          setText(editor.getContent());
        }}
      />
      <TextField
        required
        id='outlined-required'
        label='Tags'
        className={classes.tags}
        onChange={(tags) => {
          setTags(tags.target.value);
        }}
        defaultValue={props.textFieldTags}
      />
      <Stack spacing={2} direction='row'>
        <Button variant='contained' size='small' onClick={onClickHandler}>
          Submit
        </Button>
        <Button variant='outlined' size='small' onClick={props.onBackHandler}>
          Cancel
        </Button>
      </Stack>
      {!isFilled && isClicked && <p>Harap isi judul, isi dan tags</p>}
    </Fragment>
  );
};

export default TextInput;
