// const banner = document.getElementsByClassName("banner")[0];
const banner = document.querySelector(".banner");
banner.addEventListener("click", () => {
  const message = document.querySelector("h1");
  message.textContent = "Have a Good Time!";
});

const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  const hiddenContainer = document.querySelector(".hiddenContainer");
  if (hiddenContainer.style.display === "none") {
    hiddenContainer.removeAttribute("style");
  } else {
    hiddenContainer.style.display = "none";
  }
});
