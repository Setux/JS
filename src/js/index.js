import '../scss/style.scss';
const body = document.querySelector('body');
const call = body.querySelector('.call-closed');
const menu = body.querySelector('.menu-closed');
const menuOpenButton = document.querySelector('.header__button--burger');
const menuCloseButton = menu.querySelector('.ui__button--close');
const slider = document.querySelector('.swiper-container');
const chatOpenButton = menu.querySelector('.contacts__button--chat');
const headChatOpenButton = document.querySelector('.header__button--chat')
const chat = body.querySelector('.chat-closed');
const chatCloseButton = chat.querySelector('.chat__button');
const callOpenButton = menu.querySelector('.contacts__button--phone');
const headCallOpenButton = document.querySelector('.header__button--phone')
const callCloseButton = call.querySelector('.call__button');
const moreFirmsButton = body.querySelector('.firms__button-more');
const firmsCont = body.querySelector('.firms__container-hidden');
const moreTechsButton = body.querySelector('.tech__button-more');
const techsCont = body.querySelector('.tech__container-hidden');

menuOpenButton.addEventListener('click', function () {
  menu.classList.toggle('menu-opened')
  slider.style.display = 'none';
  body.style.overflow = 'hidden';
});
menuCloseButton.addEventListener('click', function () {
  menu.classList.toggle('menu-opened')
  slider.style.display = 'block';
  body.style.overflow = 'auto';
});
chatOpenButton.addEventListener('click', function () {
  chat.classList.toggle('chat-opened');
  if (call.classList.contains('call-opened')) {
    call.classList.toggle('call-opened');
  }
});
chatCloseButton.addEventListener('click', function () {
  chat.classList.toggle('chat-opened');
  if (menu.classList.contains('menu-opened')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
headChatOpenButton.addEventListener('click', function () {
  chat.classList.toggle('chat-opened');
  body.style.overflow = 'hidden';
  if (call.classList.contains('call-opened')) {
    call.classList.toggle('call-opened');
  }
});
callOpenButton.addEventListener('click', function () {
  call.classList.toggle('call-opened');
  if (chat.classList.contains('chat-opened')) {
    chat.classList.toggle('chat-opened');
  }
});
callCloseButton.addEventListener('click', function () {
  call.classList.toggle('call-opened');
  if (menu.classList.contains('menu-opened')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
headCallOpenButton.addEventListener('click', function () {
  call.classList.toggle('call-opened');
  body.style.overflow = 'hidden';
  if (chat.classList.contains('chat-opened')) {
    chat.classList.toggle('chat-opened');
  }
});

moreFirmsButton.addEventListener('click', function () {
  if (!(firmsCont.classList.contains('firms__container-visible'))) {
    firmsCont.classList.toggle('firms__container-visible');
    moreFirmsButton.classList.toggle('firms__button-less');
    moreFirmsButton.textContent = 'Скрыть';
  } else {
    firmsCont.classList.toggle('firms__container-visible');
    moreFirmsButton.classList.toggle('firms__button-less');
    moreFirmsButton.textContent = 'Показать все';
  }
});
moreTechsButton.addEventListener('click', function () {
  if (!(techsCont.classList.contains('tech__container-visible'))) {
    techsCont.classList.toggle('tech__container-visible');
    moreTechsButton.classList.toggle('tech__button-less');
    moreTechsButton.textContent = 'Скрыть';
  } else {
    techsCont.classList.toggle('tech__container-visible');
    moreTechsButton.classList.toggle('tech__button-less');
    moreTechsButton.textContent = 'Показать все';
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

