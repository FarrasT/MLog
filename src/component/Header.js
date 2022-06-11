import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.header}>
      <button className={classes.button} onClick={props.onRefreshHandler}>
        <h1>Mlog.</h1>
      </button>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      ></link>
      {!props.isEdited && (
        <div className={classes.new}>
          <button onClick={props.setNewArticle}>New Article</button>
        </div>
      )}
    </div>
  );
};

export default Header;
