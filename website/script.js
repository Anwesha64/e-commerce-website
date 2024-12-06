// Products data
const products = [
    { id: 1, name: "Product 1", price: 10, image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Product+1" },
    { id: 2, name: "Product 2", price: 15, image: "https://via.placeholder.com/150/28A745/FFFFFF?text=Product+2" },
    { id: 3, name: "Product 3", price: 20, image: "https://via.placeholder.com/150/007BFF/FFFFFF?text=Product+3" },
  ];
  
  // Cart array
  let cart = [];
  
  // Add event listeners to all "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.closest(".product").getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    });
  });
  
  // Function to add product to the cart
  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    renderCart();
  }
  
  // Render the cart
  function renderCart() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalAmountElement = document.getElementById("total-amount");
  
    cartItemsContainer.innerHTML = "";
    let totalAmount = 0;
  
    cart.forEach((item) => {
      totalAmount += item.price * item.quantity;
  
      cartItemsContainer.innerHTML += `
        <div>
          <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; vertical-align: middle;">
          <span>${item.name} x${item.quantity} - $${item.price * item.quantity}</span>
        </div>
      `;
    });
  
    totalAmountElement.textContent = totalAmount;
  }
  