import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


//-------------------------- SWIPER ---------------------------//
// core version + navigation, pagination modules:
/*import Swiper, { Navigation, Pagination } from 'swiper';*/
// init Swiper:
/*document.addEventListener('DOMContentLoaded', () => {
	const width = window.innerWidth
	if (width < 768) {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1,

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},



			modules: [Navigation, Pagination],
		});
	}
});
*/

import $ from "jquery";
import "slick-carousel"; 

/*
$('.menu').on('click', function () {
	$('.header__list').toggleClass('header__list--active')
});
*/


/*	document.getElementById("a1").innerHTML = "All";*/

function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button', '.burger-menu__lines');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');
	
	button.on('click', (e) => {
	  e.preventDefault();
	  toggleMenu();
	});
	
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	
	function toggleMenu(){
	  menu.toggleClass('burger-menu__active');
	  
	  if (menu.hasClass('burger-menu__active')) {
		 $('body').css('overlow', 'hidden');
	  } else {
		 $('body').css('overlow', 'visible');
	  }
	}
 }
 
 burgerMenu('.burger-menu');