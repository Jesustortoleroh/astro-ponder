const cart = [
  {id: 1, name: "Item 1", price:"10"},
  {id: 2, name: "Item 2", price:"15"},
  {id: 3, name: "Item 3", price:"12"}
]

const cartEl = document.getElementById("cart");

if (cartEl) {
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  cartEl.innerHTML = `
    <h3>Your Cart</h3>
    <ul>
      ${cart.map((item) => `<li>${item.name} — $${item.price}</li>`).join("")}
    </ul>
    <p><strong>Total: $${total}</strong></p>
  `;
}