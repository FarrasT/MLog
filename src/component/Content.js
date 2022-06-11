import Card from './Card';
import classes from './Content.module.css';
import TextInput from './TextInput';
import { useState } from 'react';

const Content = (props) => {
  const [id, setId] = useState('');
  return (
    <div className={classes.container}>
      {props.newArticle ? (
        <TextInput
          onBackHandler={props.onBackHandler}
          allData={props.allData}
          textFieldTags={props.textFieldTags}
          textFieldTitle={props.textFieldTitle}
          textFieldContent={props.textFieldContent}
          textFieldWriter={props.textFieldWriter}
          id={id}
          contentLength={props.contentLength}
          isEdited={props.isEdited}
          setIsEdited={props.setIsEdited}
          setTextFieldContent={props.setTextFieldContent}
          setTextFieldTitle={props.setTextFieldTitle}
          setTextFieldTags={props.setTextFieldTags}
          setTextFieldWriter={props.setTextFieldWriter}
        />
      ) : (
        props.content.map((content, index) => (
          <Card
            key={index}
            content={content}
            setNewArticle={props.setNewArticle}
            setTextFieldTags={props.setTextFieldTags}
            setTextFieldTitle={props.setTextFieldTitle}
            setTextFieldContent={props.setTextFieldContent}
            setTextFieldWriter={props.setTextFieldWriter}
            setId={setId}
            setIsEdited={props.setIsEdited}
            onRefreshHandler={props.onRefreshHandler}
          />
        ))
      )}
    </div>
  );
};

export default Content;
