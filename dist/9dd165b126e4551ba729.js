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
var url = new URL(window.location.href);
const PATH_NAME = '/dist/index.html';
console.log(url);
if (url.pathname === PATH_NAME) {
  window.location.href = `${PATH_NAME}/ua`;
}