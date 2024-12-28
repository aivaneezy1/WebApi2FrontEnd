const createProduct = async () => {
  const Product = $("#Product").val();
  const Price = parseInt($("#Price").val(), 10);
  const Rating = parseFloat($("#Rating").val());
  const Company = $("#Company").val();
  const Feature = $("#Feature").is(":checked");

  try {
    const res = await axios.post("http://localhost:5110/api/product", {
      name: Product,
      price: Price,
      featured: Feature,
      rating: Rating,
      company: Company,
    });
    console.log("status", res.status);
    if (res.status == 200) {
      window.location.href = "/";
    }
    console.log("res", res);
  } catch (err) {
    console.log(err);
  }
};
$("#createProduct").on("click", createProduct);
