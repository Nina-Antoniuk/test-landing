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
const PATH_NAME = '/dist/index.html';
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url);
const setSearchParams = () => {
  if (!searchParams.locale) {
    searchParams.set('locale', 'ua');
    url.search = searchParams.toString();
    console.log('url.search', url.search);
    window.location.href = url;
  }
};
window.addEventListener('DOMContentLoaded', setSearchParams);