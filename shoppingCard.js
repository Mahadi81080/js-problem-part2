const products = [
  { name: "shampo", price: 300, quantity: 2 },
  { name: "HandWash", price: 200, quantity: 3 },
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 700, quantity: 3 },
  { name: "Watch", price: 550, quantity: 1 },
];

function getShoppingTotal(products) {
  let total = 0;
  for (const product of products) {
    const thisProductsCost = product.price * product.quantity;
    total = total + thisProductsCost;
  }
  return total;
}

const total = getShoppingTotal(products);
console.log("total khoroc:", total);
