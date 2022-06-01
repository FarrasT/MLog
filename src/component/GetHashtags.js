const GetHashtags = (setHashtags, content) => {
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
};
export default GetHashtags;
