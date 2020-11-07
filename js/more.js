let moreButton = document.querySelector('button');
let firmsCont = document.querySelector('.main__container-hidden');
moreButton.addEventListener('click', function () {
    if (firmsCont.classList.contains('main__container-hidden')) {
firmsCont.classList.remove('main__container-hidden');
firmsCont.classList.add('main__container-visible');
moreButton.textContent = 'Скрыть';
moreButton.classList.remove('firms__button-more');
moreButton.classList.add('firms__button-less');
    } else {
        firmsCont.classList.remove('main__container-visible');
        firmsCont.classList.add('main__container-hidden');
        moreButton.textContent = 'Показать все';
        moreButton.classList.remove('firms__button-less');
        moreButton.classList.add('firms__button-more');
    }
})