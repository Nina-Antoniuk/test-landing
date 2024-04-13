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
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
const url = new URL(window.location.href);
if (url.searchParams.has('locale')) {} else if (!url.searchParams.has('locale')) {
  url.searchParams.set('locale', 'ua');
  history.pushState({}, '', url);
}
const burgerMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileNav = document.querySelector('#mobile-nav');
const toggleMobileMenu = e => {
  console.log('e', e);
  console.log(mobileNav.classList.toggle('open'));
};
burgerMenuBtn.addEventListener('click', toggleMobileMenu);