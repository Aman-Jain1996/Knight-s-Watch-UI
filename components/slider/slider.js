const slider = document.getElementById("slider");

slider.addEventListener("change", () => {
  document.querySelector(".value").innerText = slider.value;
});
