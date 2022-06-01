import classes from './navbar.module.css';

const Button = (props) => {
  const onClickHandler = () => {
    props.onSetHashtags(props.hashtags.name);
  };
  return <div onClick={onClickHandler}>{props.hashtags.name}</div>;
};

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <h1>Hashtags</h1>
      <div>
        {props.hashtags.map((hashtags, index) => (
          <Button
            key={index}
            hashtags={hashtags}
            onSetHashtags={props.setHashtags}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
