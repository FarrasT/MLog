import { Fragment, useEffect, useState } from 'react';
import Content from './Content';
import Header from './Header';
import Navbar from './Navbar';

const Layout = () => {
  const [newArticle, setNewArticle] = useState(false);
  const [content, setContent] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [activeHashtags, setActiveHashtags] = useState();
  const [activeContent, setActiveContent] = useState();

  const setNewArticleHandle = () => {
    setNewArticle(true);
  };

  const onBackHandler = () => {
    setNewArticle(false);
  };

  useEffect(() => {
    async function GetDataApi() {
      const response = await fetch(
        'https://mlog-3a8ea-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json'
      );
      const data = await response.json();
      const transformedBlogData = [];

      for (const key in data) {
        transformedBlogData.push({
          id: key,
          title: data[key].title,
          content: data[key].content,
          tags: data[key].tags,
          writer: data[key].writer,
          date: data[key].date,
        });
      }
      setContent(transformedBlogData);
      setActiveContent(transformedBlogData);
    }

    GetDataApi();
  }, [newArticle]);

  useEffect(() => {
    function GetHashtags() {
      const hashtagsData = [];
      for (const key in content) {
        let isSkip = false;
        for (const hashKey in hashtagsData) {
          if (content[key].tags === hashtagsData[hashKey].name) {
            isSkip = true;
          }
        }
        if (!isSkip) {
          hashtagsData.push({
            name: content[key].tags,
          });
        }
      }
      setHashtags(hashtagsData);
    }
    GetHashtags();
  }, [content]);

  useEffect(() => {
    const activeContent = [];
    if (!activeHashtags) {
      return;
    }
    for (const key in content) {
      if (content[key].tags === activeHashtags) {
        activeContent.push({
          title: content[key].title,
          content: content[key].content,
          tags: content[key].tags,
          writer: content[key].writer,
          date: content[key].date,
        });
      }
    }
    setActiveContent(activeContent);
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
        />
      )}
    </Fragment>
  );
};

export default Layout;
