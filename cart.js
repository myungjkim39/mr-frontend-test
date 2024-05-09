let cartNumber = 0;

let carEl = document.getElementById("cartNumber");
let sizeEl = document.getElementById("size-el");

function addSmall() {
  sizeEl.textContent = "SIZE S";
}

function addMedium() {
  sizeEl.textContent = "SIZE M";
}

function addLarge() {
  sizeEl.textContent = "SIZE L";
}

function addToCart() {
  const selectedSize = document.getElementById("size-el").textContent.trim();
  if (selectedSize === "SIZE") {
    alert("Please select a size before adding to cart.");
    return;
  } else {
    
    const productName = document.getElementById("product-name").textContent;
    const productPrice = document.getElementById("product-price").textContent;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // Tee-shirt image
    const productImage = document.createElement("img");
    productImage.src = document.getElementById("product-image").src;
    cartItem.appendChild(productImage);

    // Product name
    const name = document.createElement("p");
    name.textContent = productName;
    cartItem.appendChild(name);

    // Quantity
    cartNumber++;
    const quantity = document.createElement("p");
    quantity.textContent = `${cartNumber}x`;
    cartItem.appendChild(quantity);

    // Price
    const price = document.createElement("p");
    price.textContent = productPrice;
    cartItem.appendChild(price);
    
    // Size
    const size = document.createElement("p");
    size.textContent = selectedSize;
    cartItem.appendChild(size);

    // Add the cart item to the cart section
    const cartSection = document.getElementById("cart-section");
    cartSection.appendChild(cartItem);

    const cartNumberElement = document.getElementById("cartNumber");
    cartNumberElement.textContent = `My Cart (${cartNumber})`;
  }
}

function myCart() {
  console.log("button clicked");
  toggleCart();
}

function toggleCart() {
  const cartSection = document.getElementById("cart-section");
  cartSection.style.display =
    cartSection.style.display === "none" ? "block" : "none";
}
