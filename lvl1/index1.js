const lvlPage = document.querySelector("h5");


const counterDisplay = document.querySelector("h3");
let counter = 0;

let temps = 5;
const timerElement = document.getElementById("timer");
const square = document.createElement("span2");
const bubble = document.createElement("span1");

function diminuerTemps() {
  timerElement.innerText = temps;
  temps--;
  temps = temps <= 0 ? 0 : temps - 0;
 
}

setInterval(diminuerTemps, 1000);


const buzz = () => {
  const audio = new Audio();
  audio.src = "../asset/buzz.mp3";
  audio.play();
};
const ring = () => {
  const audio = new Audio();
  audio.src = "../asset/Enter.mp3";
  audio.play();
};

const squareMaker = () => {
  const square = document.createElement("span2");
  square.classList.add("square");
  document.body.appendChild(square);

  const size = Math.random() * 200 + 100 + "px";
  square.style.height = size;
  square.style.width = size;

  square.style.top = Math.random() * 100 + 50 + "%";
  square.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  square.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  square.addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
    square.remove();
    if (square.remove) buzz(square.remove);
  });
  setTimeout(() => {
    square.remove();
  }, 6000);

  if (temps == "0") {
    lvlPage.style.opacity = "2";
    square.style.visibility ="hidden"
    
  }

  if (counter == "20") {
    lvlPage.style.opacity = "2";
    square.style.visibility = "hidden";
  }
};

const bubbleMaker = () => {
  const bubble = document.createElement("span1");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;

    counterDisplay.textContent = counter;
    bubble.remove();
    if (bubble.remove) ring(bubble.remove);
  });

  if (temps == "0") {
    lvlPage.style.opacity = "2";
    bubble.style.visibility ="hidden"
    
  }

  if (counter == "20") {
    lvlPage.style.opacity = "2";
    bubble.style.visibility = "hidden";
  }

  setTimeout(() => {
    bubble.remove();
  }, 6000);
};

setInterval(bubbleMaker, 1000);
setInterval(squareMaker, 500);



