const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');
let lastOpenedHint = null;

// Клик по кнопкам с подсказками
for(let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();

		const currentHint = this.parentNode.querySelector('.info-hint');

		for(let hint of infoHints) {
			hint.classList.add('none');
		}

		// Если текущая подсказка была последней открытой, просто закрыть ее
		if (lastOpenedHint === currentHint) {
			lastOpenedHint = null;
		} else {
			// Открыть текущую подсказку и запомнить ее
			currentHint.classList.toggle('none');
			lastOpenedHint = currentHint;
		}
	});
}

// Закрываем подсказки при клике по всему документу
document.addEventListener('click', function () {
	for(let hint of infoHints) {
		hint.classList.add('none');
	}
	lastOpenedHint = null;
});

// Запрещаем всплытие события клика наверх при клике на подсказки
for(let hint of infoHints) {
	hint.addEventListener('click', (e) => e.stopPropagation());
}

// Swiper slider
const swiper = new Swiper('.swiper', {
  loop: true,
	slidesPerView: 1,
	freeMode: true,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	// 	1024: {
	// 		slidesPerView: 5,
	// 		spaceBetween: 50,
	// 	},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
});

// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for(let btn of tabsBtns) {
	btn.addEventListener('click', function () {

		for(let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active');
		}

		this.classList.add('tab-controls__btn--active');

		for(let product of tabsProducts) {
			if(this.dataset.tab === 'all') {
				product.classList.remove('none');
			} else if(product.dataset.tabValue === this.dataset.tab) {
				product.classList.remove('none');
			} else {
				product.classList.add('none');
			}
		}

		swiper.update();
	});
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
	mobileNav.classList.add('mobile-nav-wrapper--open');
};

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};