const getAllProduct = async () => {
  try {
    const res = await axios.get("http://localhost:5110/api/product");
    const product = res.data;
    const productList = $("#products");

    console.log("res", res.data);

    product.forEach((p) => {
      const productCol = $("<div>").addClass("col-md-4 mb-4 mt-5");
      const productItem = $("<div>").addClass("card border-primary h-100 p-3")
        .html(`
          <h3>
            <a href="/api/product/${
              p.id
            }" class="text-primary mb-2 text-decoration-none">${p.name}</a>
          </h3>
          <p class="mt-2"><strong>Price:</strong> ${p.price}</p>
          <p><strong>Featured:</strong> ${p.featured ? "Yes" : "No"}</p>
          <p><strong>Rating:</strong> ${p.rating}/5</p>
          <p><strong>Company:</strong> ${p.company}</p>
        `);

      // Append the product card to the column
      productCol.append(productItem);

      // Append the column to the product list
      productList.append(productCol);
    });
  } catch (err) {
    console.log(err);
  }
};

$(function () {
  getAllProduct();
});
