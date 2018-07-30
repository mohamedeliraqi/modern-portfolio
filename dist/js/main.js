console.log('Ready');

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuBranding = document.querySelector('.menu-branding')
const menuNav = document.querySelector('.menu-nav')
const items = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(e){
	if(!showMenu){
		// open Menu and Toggle btn to close
		document.body.style = 'overflow: hidden !important;'; // to remove scroll when opening the menu
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');

		items.forEach((item)=>{
			item.classList.add('show');
		})

		// Set Menu State
		showMenu = true;
	}else{
		// close Menu and Toggle btn to open
		document.body.style = '';
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');

		items.forEach((item)=>{
			item.classList.remove('show');
		})

		// Set Menu State
		showMenu = false;
	}
}