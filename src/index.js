import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const burgerMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileNav = document.querySelector('#mobile-nav');

const toggleMobileMenu = () => {
  mobileNav.classList.toggle('open');
};

burgerMenuBtn.addEventListener('click', toggleMobileMenu);

mobileNav.addEventListener('click', toggleMobileMenu);
