 
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
	toggle.addEventListener('click', () => {
		navLinks.classList.toggle('show');
	});
}

 
(function initAboutSlider() {
	const aboutWrapper = document.querySelector('#aboutSlides .slides');
	const aboutSlides = document.querySelectorAll('#aboutSlides .slides > div');
	const aboutPrev = document.querySelector('#aboutSlides .prev-arrow');
	const aboutNext = document.querySelector('#aboutSlides .next-arrow');
	if (!aboutWrapper || aboutSlides.length === 0) return;

	const totalAboutSlides = aboutSlides.length;
	let currentAboutIndex = 0;

	function updateAboutSlider() {
		aboutWrapper.style.transform = `translateX(-${currentAboutIndex * 100}%)`;
		aboutSlides.forEach((slide, i) => {
			slide.classList.toggle('active', i === currentAboutIndex);
		});
		if (aboutPrev) aboutPrev.classList.toggle('hidden', currentAboutIndex === 0);
		if (aboutNext) aboutNext.classList.toggle('hidden', currentAboutIndex === totalAboutSlides - 1);
	}

	window.changeAboutSlides = function (direction) {
		currentAboutIndex += direction;
		if (currentAboutIndex < 0) currentAboutIndex = 0;
		if (currentAboutIndex >= totalAboutSlides) currentAboutIndex = totalAboutSlides - 1;
		updateAboutSlider();
	};

	document.addEventListener('DOMContentLoaded', updateAboutSlider);
})();

 
window.changeSlide = function (direction) {
	const slides = document.querySelectorAll('.slides > div');
	if (slides.length === 0) return;
	if (typeof window.currentSlide === 'undefined') window.currentSlide = 0;
	slides[window.currentSlide].classList.remove('active');
	window.currentSlide += direction;
	if (window.currentSlide < 0) window.currentSlide = slides.length - 1;
	else if (window.currentSlide >= slides.length) window.currentSlide = 0;
	slides[window.currentSlide].classList.add('active');
	const slidesContainer = document.querySelector('.slides');
	if (slidesContainer) slidesContainer.style.transform = `translateX(-${window.currentSlide * 100}%)`;
};

 
(function initKeySlider() {
	const slidesWrapper = document.querySelector('.slides-wrapper');
	const slide = document.querySelectorAll('.slide');
	const prevArrow = document.querySelector('.prev-arrow');
	const nextArrow = document.querySelector('.next-arrow');
	if (!slidesWrapper || slide.length === 0 || !prevArrow || !nextArrow) return;

	const numSlides = slide.length;
	let currentSlideIndex = 0;

	function updateSlider() {
		slidesWrapper.style.transform = `translateX(-${currentSlideIndex * (100 / numSlides)}%)`;
		slide.forEach((s, index) => s.classList.toggle('active', index === currentSlideIndex));
		prevArrow.classList.toggle('hidden', currentSlideIndex === 0);
		nextArrow.classList.toggle('hidden', currentSlideIndex === numSlides - 1);
	}

	window.changeKeySlides = function (direction) {
		currentSlideIndex += direction;
		if (currentSlideIndex < 0) currentSlideIndex = 0;
		else if (currentSlideIndex >= numSlides) currentSlideIndex = numSlides - 1;
		updateSlider();
	};

	document.addEventListener('DOMContentLoaded', updateSlider);
})();

 
window.changeSlide1 = function (direction) {
	const slides1 = document.querySelectorAll('.slidess > div');
	if (slides1.length === 0) return;
	if (typeof window.currentSlide1 === 'undefined') window.currentSlide1 = 0;
	slides1[window.currentSlide1].classList.remove('active');
	window.currentSlide1 += direction;
	if (window.currentSlide1 < 0) window.currentSlide1 = slides1.length - 1;
	else if (window.currentSlide1 >= slides1.length) window.currentSlide1 = 0;
	slides1[window.currentSlide1].classList.add('active');
	const container = document.querySelector('.slidess');
	if (container) container.style.transform = `translateX(-${window.currentSlide1 * 100}%)`;
};

 
(function initContactForm() {
	const form = document.forms ? document.forms['google-sheet'] : null;
	const scriptURL = 'https://script.google.com/macros/s/AKfycbxV09pG7kPHd9fB7igXNd-kIo-xziP27FfuqwNiq484tCzozMnyt6nJlxVU1ciKB9UF/exec';
	if (!form) return;
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(() => {
				form.reset();
				window.location.href = 'response.html';
			})
			.catch((error) => console.error('Error!', error.message));
	});
})();

 
if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => window.scrollTo(0, 0));

 
(function initSimpleImageCycler() {
	const images = document.querySelectorAll('.gallery img');
	if (images.length === 0) return;
	let index = 0;
	function changeImage() {
		images[index].classList.remove('activeg');
		index = (index + 1) % images.length;
		images[index].classList.add('activeg');
	}
	setInterval(changeImage, 4000);
})();

 
(function initAutoScroll() {
	const scrollBox = document.getElementById('scrollBox');
	if (!scrollBox) return;
	let direction = 1;
	let scrollStep = 3;
	let pauseTime = 2000;
	let paused = false;
	function autoScroll() {
		if (!paused) {
			const maxScroll = scrollBox.scrollWidth - scrollBox.clientWidth;
			if (direction === 1 && scrollBox.scrollLeft >= maxScroll - scrollStep) {
				pauseAndReverse();
			} else if (direction === -1 && scrollBox.scrollLeft <= scrollStep) {
				pauseAndReverse();
			} else {
				scrollBox.scrollLeft += direction * scrollStep;
			}
		}
		requestAnimationFrame(autoScroll);
	}
	function pauseAndReverse() {
		paused = true;
		setTimeout(() => {
			direction *= -1;
			paused = false;
		}, pauseTime);
	}
	scrollBox.addEventListener('mouseenter', () => (paused = true));
	scrollBox.addEventListener('mouseleave', () => (paused = false));
	window.addEventListener('load', autoScroll);
})();

document.querySelector("form[name='google-sheet']").addEventListener("submit", function (e) {
	e.preventDefault(); // prevent normal form submit

	// Get values
	const name = document.getElementById("name").value.trim();
	const contact = document.getElementById("contact").value.trim();
	const email = document.getElementById("email").value.trim();
	const message = document.getElementById("message").value.trim();

	// Validation
	if (!name || !contact || !email) {
		alert("Please fill in all required fields.");
		return;
	}

	// ✅ If valid → show popup
	document.getElementById("popup").style.display = "flex";

	// Optionally reset form
	e.target.reset();
});