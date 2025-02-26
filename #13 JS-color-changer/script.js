const colors = [
  "#641e16",
  "#78281f",
  "#512e5f",
  "#4a235a",
  "#154360",
  "#1b4f72",
  "#0e6251",
  "#0b5345",
  "#145a32",
  "#186a3b",
  "#7d6608",
  "#7e5109",
  "#784212",
  "#6e2c00",
  "#7b7d7d",
  "#626567",
  "#4d5656",
  "#424949",
  "#1b2631",
  "#17202a",
  "#212f3d",
  "#212f3d",
  "#616a6b",
  "#717d7e",
  "#909497",
  "#b3b6b7",
  "#a04000",
  "#af601a",
  "#b9770e",
  "#b7950b",
  "#239b56",
  "#1e8449",
  "#117a65",
  "#148f77",
  "#2874a6",
  "#1f618d",
  "#6c3483",
  "#76448a",
  "#b03a2e",
  "#922b21",
  "#f1948a",
  "#c39bd3",
  "#a9cce3",
  "#a3e4d7",
  "#a9dfbf",
  "#f9e79f",
  "#f0b27a",
  "#f4f6f7",
  "#d5dbdb",
  "#aeb6bf",
];

let btn = document.querySelector(".btn");
let color = document.querySelector(".color");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  let number = getRandomNumber();
  console.log(number);

  body.style.backgroundColor = colors[number];
  color.innerText = colors[number];
});

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * colors.length);

  return randomNumber;
}
