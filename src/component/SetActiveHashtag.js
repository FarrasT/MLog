const ShowActiveHashtags = (setActiveContent, activeHashtags, content) => {
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
};
export default ShowActiveHashtags;
