const DeleteData = async (id) => {
  await fetch(
    `https://mlog-3a8ea-default-rtdb.asia-southeast1.firebasedatabase.app/blog/${id}.json`,
    {
      method: 'DELETE',
    }
  );
};

export default DeleteData;
