let dCard = document.getElementById("card-d");
let hCard = document.getElementById("card-h");
let mCard = document.getElementById("card-m");
let sCard = document.getElementById("card-s");

// let eventDate = new Date("31 Dec 2023, 23:59:59").getTime();

let eventDate = new Date().setMonth(new Date().getMonth() + 2);

let counter = setInterval(() => {
  let currentDate = new Date().getTime();

  let diffDate = (eventDate - currentDate) / 1000;

  let days = Math.floor(diffDate / (3600 * 24));

  let hours = Math.floor((diffDate % (3600 * 24)) / 3600);

  let minutes = Math.floor((diffDate % 3600) / 60);

  let seconds = Math.floor(diffDate % 60);

  flip(dCard, days);
  flip(hCard, hours);
  flip(mCard, minutes);
  flip(sCard, seconds);

  if (diffDate < 0) {
    clearInterval(counter);
  }
}, 1000);

function flip(card, number) {
  let topCard = card.querySelector(".top");
  let bottomCard = card.querySelector(".bottom");
  let currentValue = parseInt(topCard.innerText);

  number = number < 10 ? `0${number}` : number;
  currentValue = currentValue < 10 ? `0${currentValue}` : currentValue;

  if (currentValue === number) return;

  let topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  topFlip.appendChild(document.createTextNode(currentValue));

  let bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  bottomFlip.appendChild(document.createTextNode(number));

  topFlip.addEventListener("animationstart", () => {
    topCard.innerText = number;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomCard.innerText = number;
    bottomFlip.remove();
  });

  card.append(topFlip, bottomFlip);
}
