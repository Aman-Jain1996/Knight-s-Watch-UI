const star = document.getElementsByName("rating");

function clickHandler(e) {
  let elementId = e.target.id;
  elementId = elementId[elementId.length - 1];

  for (let i = 1; i <= 5; i++) {
    console.log(document.getElementById(i));
    document.getElementById(i).classList.remove("rating-active");
  }

  for (let i = 1; i <= elementId; i++)
    document.getElementById(i).classList.add("rating-active");
}

star.forEach((ele) => ele.addEventListener("click", clickHandler));
