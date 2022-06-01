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

  const setNewArticleHandle = () => {
    setNewArticle(true);
  };

  const onBackHandler = () => {
    setNewArticle(false);
  };

  useEffect(() => {
    GetDataApi(setContent, setActiveContent);
  }, [newArticle, isEdited]);

  useEffect(() => {
    GetHashtags(setHashtags, content);
  }, [content]);

  useEffect(() => {
    ShowActiveHashtags(setActiveContent, activeHashtags, content);
  }, [activeHashtags, content]);

  return (
    <Fragment>
      <Header setNewArticle={setNewArticleHandle} />
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
        />
      )}
    </Fragment>
  );
};

export default Layout;
