const pagination_div = document.getElementById("pagination_div");

pagination_div.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const active = document.querySelector(".active");
    active.classList.remove("active");

    e.target.classList.add("active");
  }
});
