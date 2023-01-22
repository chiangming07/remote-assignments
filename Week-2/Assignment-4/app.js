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
    hiddenContainer.scrollIntoView(); //可以直接滑下去讓使用者知道有新增區域
  } else {
    hiddenContainer.style.display = "none";
  }
});
