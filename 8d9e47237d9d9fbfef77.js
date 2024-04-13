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
console.log('url', url);
if (url.searchParams.has('locale')) {
  console.log('has locale');
} else if (!url.searchParams.has('locale')) {
  console.log('!has locale');
  url.searchParams.set('locale', 'ua');
  console.log('url', url);
  history.pushState({}, '', url);
}