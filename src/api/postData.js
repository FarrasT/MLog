const PostData = async (data) => {
  await fetch(
    'https://mlog-3a8ea-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export default PostData;
