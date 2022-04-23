const images = document.querySelectorAll(".play__image");
const cardsItems = document.querySelectorAll(".play__card");

// function openText (element) {
//     const closestText = element.closest('.play__text');
//     closestText.classList.add('.play__text_opened');
// }

function checkOpen (opened_) {
  
  if (opened_ !== null) {
    opened_.classList.remove("play__text_opened");}
}

cardsItems.forEach(function (element) {
  const image = element.querySelector(".play__image");
  image.addEventListener("click", function () {
    const opened = document.querySelector('.play__text_opened');
    checkOpen (opened);
    const text = element.querySelector(".play__text");
    text.classList.add("play__text_opened");
  });
});

const popup = document.querySelector('.popup');
const aboutCards = document.querySelectorAll('.about__card');
const closeButton = document.querySelector('.popup__close');
const text1 = 'I was born on one of those days when you want to stay in your bed under a soft and warm blanket. There were four kittens - me and my sisters. My life went so: I ate, slept, played and fought for the area.'
const text2 = 'Everything changed when she came. I was afraid for the first moment, but I was too curious. I came to her and ordered to pet me. She responded to my request and stroked my belly. So Tanya became my mother.'
const text3 = 'When I came to my new home, I felt like a real host. I found my new place between pillows in a bed. Being a very humble cat, I left some space on the edge of the bed for my new mom.'
let headingPopup = document.querySelector('.popup__heading');
let text = document.querySelector('.popup__text');



function openPopup () {
  popup.classList.add('popup_opened');
}

function closePopup(){
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

aboutCards.forEach (function(element) {
element.addEventListener('click', function () {
  openPopup ();
  const heading = element.querySelector('.about__heading').textContent;
headingPopup.textContent = heading;
switch (heading){
  case 'The beginning':
    text.textContent = text1;
 break;
 case 'The meeting':
  text.textContent = text2;
 break;
 case 'New home':
  text.textContent = text3;
 break;
}
})
});