// method one
// function avg(data) {
//   // your code here
//   let avgPrice = 0;
//   let totalPrice = 0;
//   for (let i = 0; i < data.size; i++) {
//     totalPrice += data.products[i].price;
//   }
//   avgPrice = totalPrice / data.size;
//   return avgPrice;
// }

function avg(data) {
  // your code here
  let avgPrice = 0;
  let totalPrice = 0;
  data.products.forEach((product) => {
    totalPrice += product.price;
  });
  avgPrice = totalPrice / data.size;
  return avgPrice;
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
