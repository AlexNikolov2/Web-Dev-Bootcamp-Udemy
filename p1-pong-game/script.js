let blue = document.getElementById("blue");
let red = document.getElementById("red");

document.getElementById("add-blue").addEventListener("click", addtoBlue);
document.getElementById("add-red").addEventListener("click", addtoRed);
document.getElementById("reset").addEventListener("click", resetGame);

function winCondition() {
  if (blue.innerHTML == 6) {
    alert("Blue wins!");
    blue.innerHTML = "-";
    red.innerHTML = "-";
  } else if (red.innerHTML == 6) {
    alert("Red wins!");
    blue.innerHTML = "-";
    red.innerHTML = "-";
  }
}
function addtoBlue() {
  if (blue.innerHTML === "-") {
    blue.innerHTML = 1;
    red.innerHTML = 0;
  } else {
    blue.innerHTML++;
  }
  setTimeout(() => {
    blue.style.color = "blue";
    setTimeout(() => {
      blue.style.color = "black";
    }, 3000);
  }, 0);
  winCondition();
}
function addtoRed() {
  if (red.innerHTML === "-") {
    red.innerHTML = 1;
    blue.innerHTML = 0;
  } else {
    red.innerHTML++;
  }
  setTimeout(() => {
    red.style.color = "red";
    setTimeout(() => {
      red.style.color = "black";
    }, 3000);
  }, 0);
  winCondition();
}
function resetGame() {
  blue.innerHTML = "-";
  red.innerHTML = "-";
}
