import '../scss/style.scss';
let menu = document.querySelector('.menu-closed');
let menuOpenButton = document.querySelector('.header__button--burger');
let menuCloseButton = document.querySelector('.ui__button--close');
let slider = document.querySelector('.swiper-container');
let chatOpenButton = document.querySelector('.contacts__button--chat');
let headChatOpenButton = document.querySelector('.header__button--chat')
let chat = document.querySelector('.chat-closed');
let chatCloseButton = document.querySelector('.chat__button');
let callOpenButton = document.querySelector('.contacts__button--phone');
let headCallOpenButton = document.querySelector('.header__button--phone')
let callCloseButton = document.querySelector('.call__button');
let call = document.querySelector('.call-closed');
let body = document.querySelector('body');
menuOpenButton.addEventListener('click', function () {
  menu.classList.remove('menu-closed');
  menu.classList.add('menu-opened');
  slider.style.display = 'none';
  body.style.overflow = 'hidden';
});
menuCloseButton.addEventListener('click', function () {
  menu.classList.remove('menu-opened');
  menu.classList.add('menu-closed');
  slider.style.display = 'block';
  body.style.overflow = '';
});
chatOpenButton.addEventListener('click', function () {
  chat.classList.remove('chat-closed');
  chat.classList.add('chat-opened');
});
chatCloseButton.addEventListener('click', function () {
  chat.classList.remove('chat-opened');
  chat.classList.add('chat-closed');
  if (menu.classList.contains('menu-opened')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});
headChatOpenButton.addEventListener('click', function () {
  chat.classList.remove('chat-closed');
  chat.classList.add('chat-opened');
  body.style.overflow = 'hidden';
});
callOpenButton.addEventListener('click', function () {
  call.classList.remove('call-closed');
  call.classList.add('call-opened');
});
callCloseButton.addEventListener('click', function () {
  call.classList.remove('call-opened');
  call.classList.add('call-closed');
  if (menu.classList.contains('menu-opened')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});
headCallOpenButton.addEventListener('click', function () {
  call.classList.remove('call-closed');
  call.classList.add('call-opened');
  body.style.overflow = 'hidden';
});

let moreFirmsButton = document.querySelector('.firms__button-more');
let firmsCont = document.querySelector('.firms__container-hidden');
let moreTechsButton = document.querySelector('.tech__button-more');
let techsCont = document.querySelector('.tech__container-hidden');
moreFirmsButton.addEventListener('click', function () {
  if (firmsCont.classList.contains('firms__container-hidden')) {
    firmsCont.classList.remove('firms__container-hidden');
    firmsCont.classList.add('firms__container-visible');
    moreFirmsButton.textContent = 'Скрыть';
    moreFirmsButton.classList.remove('firms__button-more');
    moreFirmsButton.classList.add('firms__button-less');
  } else {
    firmsCont.classList.remove('firms__container-visible');
    firmsCont.classList.add('firms__container-hidden');
    moreFirmsButton.textContent = 'Показать все';
    moreFirmsButton.classList.remove('firms__button-less');
    moreFirmsButton.classList.add('firms__button-more');
  }
});
moreTechsButton.addEventListener('click', function () {
  if (techsCont.classList.contains('tech__container-hidden')) {
    techsCont.classList.remove('tech__container-hidden');
    techsCont.classList.add('tech__container-visible');
    moreTechsButton.textContent = 'Скрыть';
    moreTechsButton.classList.remove('tech__button-more');
    moreTechsButton.classList.add('tech__button-less');
  } else {
    techsCont.classList.remove('tech__container-visible');
    techsCont.classList.add('tech__container-hidden');
    moreTechsButton.textContent = 'Показать все';
    moreTechsButton.classList.remove('tech__button-less');
    moreTechsButton.classList.add('tech__button-more');
  }
})

let textButton = document.querySelector('.description__button');
let description = document.querySelector('.description-hidden');
textButton.addEventListener('click', function () {
  if (description.classList.contains('description-hidden')) {
    description.classList.remove('description-hidden');
    description.classList.add('description-full');
    textButton.classList.remove('description__button-off');
    textButton.classList.add('description__button-on');
    textButton.textContent = 'Скрыть';
  } else {
    description.classList.add('description-hidden');
    description.classList.remove('description-full');
    textButton.classList.add('description__button-off');
    textButton.classList.remove('description__button-on');
    textButton.textContent = 'Читать далее';
  }
})

console.log('Works!');
let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween:16,
  setWrapperSize:true,
  width:240,
  autoHeight:true,
  centeredSlides:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

