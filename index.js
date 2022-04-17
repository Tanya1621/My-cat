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
const text1 = 'Я родился в один из тех дней, когда хочется посильнее закутаться в одеялко и не под каким предлогом не выходить на улицу. Нас было четверо - я и три мои сестренки. Так и шла моя жизнь, я спал, ел, играл и воевал за территорию.'
const text2 = 'Все изменилось, когда пришла она. Я сначала испугался, но любопытство взяло верх. Я подошел к ней и своим тоненьким голоском приказал меня почесать. Она отозвалась на мою просьбу и погладила мое пузико. Так Танюша стала моей мамой-кошкой.'
const text3 = 'Придя домой, я почувствовал еще один слабый запах, который я решил проигнорировать и сразу занял кровать. Все было прекрасно, и я думал, что попал в рай, пока не приехал он. Самый добрый, ласковый, лучший друг котеек - Коля.'
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
  case 'Начало':
    text.textContent = text1;
 break;
 case 'Встреча':
  text.textContent = text2;
 break;
 case 'Новый дом':
  text.textContent = text3;
 break;
}
})
});