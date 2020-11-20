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