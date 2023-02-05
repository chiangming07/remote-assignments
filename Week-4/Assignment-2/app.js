function ajax(src, callback) {
  // your code here
  return fetch(src)
    .then((respond) => respond.json())
    .then((data) => callback(data))
    .catch((e) => console.log(e));
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  console.log(data);
  data.map((product) => {
    const section = document.createElement("section");
    const productList = document.getElementById("product");
    productList.appendChild(section);
    section.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: NT$${product.price}</p>
    <p>${product.description}</p>
  `;
  });
}
const btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
  event.target.textContent = "Loading...";
  ajax(
    "https://appworks-school.github.io/Remote-Assignment-Data/products",
    function (response) {
      render(response);
    }
  ).finally(() => event.target.remove());
});
