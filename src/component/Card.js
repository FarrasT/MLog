import classes from './Card.module.css';
import parse from 'html-react-parser';
import DeleteData from '../api/deleteData';

const Card = (props) => {
  const onEditHandle = () => {
    props.setNewArticle();
    props.setTextFieldTags(props.content.tags);
    props.setTextFieldTitle(props.content.title);
    props.setTextFieldContent(props.content.content);
    props.setTextFieldWriter(props.content.writer);
    props.setId(props.content.id);
    props.setIsEdited(true);
  };
  const onDeleteHandle = () => {
    DeleteData(props.content.id);
    props.onRefreshHandler();
    props.onRefreshHandler();
  };

  return (
    <div className={classes.card}>
      <h1>{props.content.title}</h1>
      <div className={classes.writer}>
        Ditulis oleh {props.content.writer} pada tanggal {props.content.date}
      </div>
      <hr />
      <div>{parse(props.content.content)}</div>
      <hr />
      <div className={classes.tags}>{props.content.tags}</div>
      <button onClick={onEditHandle}>Edit</button>
      <button onClick={onDeleteHandle}>Delete</button>
    </div>
  );
};

export default Card;
