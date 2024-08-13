function showImg() {
  const images = document.querySelectorAll(`.work__img`);

  images.forEach((image) => {
    const workBlock = document.querySelector(".work__block");
    const elem = document.createElement("div");
    elem.classList = "work__box";
    elem.innerHTML += `
      <div class="work__img active__img">
        <img
          src="./images/our__amazing__work/icon.png"
          alt="work__img"
        />
        <span>creative design</span>
        <span>Web Design</span>
      </div>
      <div class="work__img">
        <img
          src="${image.src}"
          alt="work__img"
        />
      </div>`;
    workBlock.append(elem);
  });
}

showImg();

const tabs = document.querySelector(".work__tabs");
const blocks = Array.from(document.querySelectorAll(".work__box"));

let activeCards = blocks.slice(0, 12);

let unActiveCards = blocks.slice(12, 24);

unActiveCards.forEach((card) => {
  card.style.display = "none";
});

tabs.addEventListener("click", showPhotos);

function showPhotos(event) {
  let target = event.target.dataset.tab;

  if (event.target.tagName !== "LI") return false;

  activeCards.forEach((item) => {
    if (item.classList.contains(target) || target === "all") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

const button = document.querySelector(".work__btn");

button.addEventListener("click", (e) => {
  e.preventDefault();

  unActiveCards.forEach((card) => {
    card.style.display = "block";
  });
  button.style.display = "none";
});
