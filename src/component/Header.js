import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h1>Mlog.</h1>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      ></link>
      <div className={classes.new}>
        <button onClick={props.setNewArticle}>New Article</button>
      </div>
    </div>
  );
};

export default Header;
