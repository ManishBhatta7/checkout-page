const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const countDisplay = document.getElementById("count-display");

let currentCount = 1;
decrementBtn.addEventListener("click", () => {
  currentCount--;
  countDisplay.innerText = currentCount;
});

incrementBtn.addEventListener("click", () => {
  currentCount++;
  countDisplay.innerText = currentCount;
});

const decrementBtn2 = document.getElementById("decrement-btn2");
const incrementBtn2 = document.getElementById("increment-btn2");
const countDisplay2 = document.getElementById("count-display2");

let currentCount2 = 1;
decrementBtn2.addEventListener("click", () => {
  currentCount2--;
  countDisplay2.innerText = currentCount2;
});

incrementBtn2.addEventListener("click", () => {
  currentCount2++;
  countDisplay2.innerText = currentCount2;
});
