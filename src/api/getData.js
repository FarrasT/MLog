const GetDataApi = async (setContent, setActiveContent) => {
  const response = await fetch(
    'https://mlog-3a8ea-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json'
  );
  const data = await response.json();
  const transformedBlogData = [];

  for (const key in data) {
    if (key === 0) {
      continue;
    }
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
};
export default GetDataApi;
