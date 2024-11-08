const nav = document.querySelector('.header__navi')

document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active')
	nav.classList.toggle('opens')
	body.classList.toggle("no-scroll")
})
