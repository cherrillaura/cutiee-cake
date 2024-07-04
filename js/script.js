//Toogle to manage #cake-mennu
const navbarNav = document.querySelector('.navbar-nav');
//when #cake-menu is clicked
document.querySelector('#cake-menu').onclick = () => {
	navbarNav.classList.toggle('active');
}

//Klik where ever for hide sidebar
const cake = document.querySelector('#cake-menu');
document.addEventListener('click', function(e) {
	if(!cake.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});