let indexValu = 1;
showImg(indexValu);
function btm_slide(e) {
  showImg((indexValu = e));
}
function side_slide(e) {
  showImg((indexValu += e));
}
function showImg(e) {
  let img = document.querySelectorAll("img");
  let slider = document.querySelectorAll(".btm-slider span");
  if (e > img.length) {
    indexValu = 1;
  }
  if (e < 1) {
    indexValu = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.background = "rgba(255, 255, 255, 0.21)";
  }
  img[indexValu - 1].style.display = "block";
  slider[indexValu - 1].style.background = "white";
}
