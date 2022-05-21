const EditData = async (data, id) => {
  await fetch(
    `https://mlog-3a8ea-default-rtdb.asia-southeast1.firebasedatabase.app/blog/${id}.json`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export default EditData;
