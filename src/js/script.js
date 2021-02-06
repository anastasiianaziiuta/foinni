window.addEventListener('DOMContentLoaded', function (){
    // Mobile menu
    let mobileMenu = document.querySelector('#js-navigation'),
        openMenu = document.querySelector('#js-logo'),
        closeMenu = document.querySelector('.js-close');

        openMenu.addEventListener('click', () =>{
            mobileMenu.classList.add('navigation_active');
            openMenu.style.display = 'none';
            closeMenu.style.display = 'block';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('navigation_active');
            closeMenu.style.display = 'none';
            openMenu.style.display = 'block';
            
        });

});