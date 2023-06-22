function seeMoreLess() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("see");

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "View More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View Less";
    moreText.style.display = "block";
    moreText.style.flexWrap = "wrap"
  }
}  