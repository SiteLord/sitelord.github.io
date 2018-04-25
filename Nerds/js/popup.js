var btn = document.querySelector('#btn');
var popup = document.querySelector('.popup');
var dark = document.querySelector('.dark-popup');
var x = document.querySelector('.popup-x');
var show = function (evt) {
		evt.preventDefault();
		popup.classList.add('modal-show');
		dark.classList.add('modal-show');
	};
var close = function (evt) {
		evt.preventDefault();
		popup.classList.remove('modal-show');
		dark.classList.remove('modal-show');
	};	

btn.addEventListener('click', show);
dark.addEventListener('click', close);
x.addEventListener('click', close);