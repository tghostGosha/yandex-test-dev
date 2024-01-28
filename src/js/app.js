import * as flsFunctions from "./modules/functions.js";

import Swiper, {
  Navigation,
  Pagination, Autoplay
} from 'swiper';





//======включаем создание WEbp ====
flsFunctions.isWebp()

const swiperPlayers = new Swiper('.swiper-players', {
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: false,
    type: 'fraction'

  },
  grid: {
    columns: 3,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },
  breakpoints: {
    880: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});

//===========swiper ======

let swiper = Swiper;
let init = false;

function swiperCard() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 960px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".steps-swiper", {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: false,
        // centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  } else if (init){
    swiper.destroy();
    init = false;
  }
}
try {

  swiperCard();
  window.addEventListener("resize", swiperCard);
} catch (error ){

}




