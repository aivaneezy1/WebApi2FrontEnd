const getProduct = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log("id", id);

  try {
  } catch (err) {
    console.log(err);
  }
};

$(function () {
  getProduct();
});
