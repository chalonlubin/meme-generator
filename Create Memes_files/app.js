

const form = document.querySelector('form');



// Form input function

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const imgUrl = form.querySelector('#image-url');
  const topText = form.querySelector('#top-text');
  const botText = form.querySelector('#bottom-text');
  const memeHost = document.querySelector('#meme-div');
  const formInputs = form.querySelectorAll('.user');

  // Imaage Input
  const img = document.createElement('img');
  img.classList.add("card-img")
  img.src = imgUrl.value;
  // Top Text
  const top = document.createElement('p');
  top.classList.add("card-text","top-card");
  top.textContent = topText.value
  // Bottom text
  const bot = document.createElement("p");
  bot.classList.add("card-text", "bot-card");
  bot.textContent = botText.value

   // Card body creation
   const cardBody = document.createElement("div");
    cardBody.classList.add("card-img-overlay");
    cardBody.appendChild(top);
    cardBody.appendChild(bot);
  // card creation
  const card = document.createElement("div");
  card.classList.add("card");
  memeHost.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);

  formInputs.forEach(input => {
    input.value = '';
  });
});

document.addEventListener("reset", function(e){
  e.preventDefault();
  const memeHost = document.querySelector('#meme-div');
  console.log("its clicking");
  memeHost.innerHTML = "";
})



