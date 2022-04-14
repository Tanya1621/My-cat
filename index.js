const images = document.querySelectorAll(".cards__image");
const cardsItems = document.querySelectorAll(".cards__item");

// function openText (element) {
//     const closestText = element.closest('.play__text');
//     closestText.classList.add('.play__text_opened');
// }

function checkOpen (opened_) {
  
  if (opened_ !== null) {
    opened_.classList.remove("play__text_opened");}
}

cardsItems.forEach(function (element) {
  const image = element.querySelector(".cards__image");
  image.addEventListener("click", function () {
    const opened = document.querySelector('.play__text_opened');
    checkOpen (opened);
    const text = element.querySelector(".play__text");
    text.classList.add("play__text_opened");
  });
});
