const divs = document.querySelectorAll(".div");
const body = document.querySelector("body");
divs.forEach((divses) => {
  divses.addEventListener("click", (e) => {
    if (e.target.id) {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
