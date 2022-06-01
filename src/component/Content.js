import Card from './Card';
import classes from './Content.module.css';
import TextInput from './TextInput';
import { useState } from 'react';

const Content = (props) => {
  const [textFieldContent, setTextFieldContent] = useState('');
  const [textFieldTitle, setTextFieldTitle] = useState('');
  const [textFieldTags, setTextFieldTags] = useState('');
  const [id, setId] = useState('');
  return (
    <div className={classes.container}>
      {props.newArticle ? (
        <TextInput
          onBackHandler={props.onBackHandler}
          allData={props.allData}
          textFieldTags={textFieldTags}
          textFieldTitle={textFieldTitle}
          textFieldContent={textFieldContent}
          id={id}
          contentLength={props.contentLength}
          isEdited={props.isEdited}
          setIsEdited={props.setIsEdited}
          setTextFieldContent={setTextFieldContent}
          setTextFieldTitle={setTextFieldTitle}
          setTextFieldTags={setTextFieldTags}
        />
      ) : (
        props.content.map((content, index) => (
          <Card
            key={index}
            content={content}
            setNewArticle={props.setNewArticle}
            setTextFieldTags={setTextFieldTags}
            setTextFieldTitle={setTextFieldTitle}
            setTextFieldContent={setTextFieldContent}
            setId={setId}
            setIsEdited={props.setIsEdited}
          />
        ))
      )}
    </div>
  );
};

export default Content;
