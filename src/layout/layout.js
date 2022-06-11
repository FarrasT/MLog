import { Fragment, useEffect, useState } from 'react';
import Content from '../component/Content';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import GetDataApi from '../api/getData';
import GetHashtags from '../component/GetHashtags';
import ShowActiveHashtags from '../component/SetActiveHashtag';

const Layout = () => {
  const [newArticle, setNewArticle] = useState(false);
  const [content, setContent] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [activeHashtags, setActiveHashtags] = useState();
  const [activeContent, setActiveContent] = useState();
  const [isEdited, setIsEdited] = useState(false);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [text, setText] = useState('');
  const [writer, setWriter] = useState('');

  const setNewArticleHandle = () => {
    setNewArticle(true);
  };

  const onBackHandler = () => {
    setNewArticle(false);
    setIsEdited(false);
    setText('');
    setTitle('');
    setTags('');
    setWriter('');
  };

  const onRefreshHandler = () => {
    setActiveHashtags('');
    GetDataApi(setContent, setActiveContent);
  };

  useEffect(() => {
    GetDataApi(setContent, setActiveContent);
    onRefreshHandler();
  }, [newArticle, isEdited, title, text, tags, writer]);

  useEffect(() => {
    GetHashtags(setHashtags, content);
  }, [content]);

  useEffect(() => {
    ShowActiveHashtags(setActiveContent, activeHashtags, content);
  }, [activeHashtags, content]);

  return (
    <Fragment>
      <Header
        setNewArticle={setNewArticleHandle}
        isEdited={isEdited}
        onRefreshHandler={onRefreshHandler}
      />
      {hashtags && (
        <Navbar hashtags={hashtags} setHashtags={setActiveHashtags} />
      )}
      {activeContent && (
        <Content
          content={activeContent}
          newArticle={newArticle}
          onBackHandler={onBackHandler}
          allData={content}
          setNewArticle={setNewArticleHandle}
          contentLength={content.length}
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          setTextFieldContent={setText}
          setTextFieldTitle={setTitle}
          setTextFieldTags={setTags}
          setTextFieldWriter={setWriter}
          textFieldTags={tags}
          textFieldTitle={title}
          textFieldContent={text}
          textFieldWriter={writer}
          onRefreshHandler={onRefreshHandler}
        />
      )}
    </Fragment>
  );
};

export default Layout;
