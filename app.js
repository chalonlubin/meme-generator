"use strict";

const form = document.querySelector("form");

// Form input function
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const imgUrl = form.querySelector("#image-url");
  const topText = form.querySelector("#top-text");
  const botText = form.querySelector("#bottom-text");
  const memeHost = document.querySelector("#meme-div");
  const formInputs = form.querySelectorAll(".user");
  const rangeValue = form.querySelector("#font-size").value;

  // Imaage Input
  const img = document.createElement("img");
  img.classList.add("card-img");
  img.src = imgUrl.value;
  // Top Text
  const top = document.createElement("p");
  top.classList.add("card-text", "top-card");
  top.textContent = topText.value;
  top.style.fontSize = rangeValue + "px";
  // Bottom text
  const bot = document.createElement("p");
  bot.classList.add("card-text", "bot-card");
  bot.textContent = botText.value;
  bot.style.fontSize = rangeValue + "px";
  // Card body creation
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-img-overlay");
  cardBody.appendChild(top);
  cardBody.appendChild(bot);
  // Card container creation + Appendages
  const card = document.createElement("div");
  card.classList.add("card");
  memeHost.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);
  // Clear input fields
  formInputs.forEach((input) => {
    input.value = "";
  });
});

const rangeSlider = form.querySelector("#font-size");

rangeSlider.addEventListener("click", function (e) {
  const fontLabel = form.querySelector("#font-size-label");
  const rangeValue = form.querySelector("#font-size").value;
  e.preventDefault();
  fontLabel.innerText = `Text Size: ${rangeValue} px`;
  fontLabel.style.fontSize = rangeValue + "px";
});

// Reset button to remove ALL memes
document.addEventListener("reset", function (e) {
  e.preventDefault();
  const memeHost = document.querySelector("#meme-div").lastChild;
  memeHost.remove();
});
