document.addEventListener("DOMContentLoaded", function () {
  fetchProduct()
    .then((productData) => {
      updateProductDetails(productData);
    })
    .catch((error) => {
      console.error("Error fetching product information:", error);
    });
});

function fetchProduct() {
  return fetch(
    "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching product information:", error);
      throw error; 
    });
}

function updateProductDetails(productData) {
  const productName = productData.title;
  const productPrice = productData.price;
  const productDescription = productData.description;
  const productImageURL = productData.imageURL;
  const productSizeOptions = productData.sizeOptions;

  document.getElementById("product-name").textContent = productName;
  document.getElementById("product-price").textContent = `$${productPrice}`;
  document.getElementById("product-description").textContent =
    productDescription;
   document.getElementById("product-image").src = productImageURL;
}
