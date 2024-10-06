const deleteData = (url, id) => {
  console.log(url);

  fetch(url + "/" + id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((v) => {
      alert("Deleted Data :" + v);
      getData(url, displayData);
    });
};
