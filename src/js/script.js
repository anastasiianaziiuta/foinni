window.addEventListener('DOMContentLoaded', function (){
    
    // Mobile menu
    let mobileMenu = document.querySelector('#js-navigation'),
        openMenu = document.querySelector('#js-menu'),
        closeMenu = document.querySelector('.js-close');

        openMenu.addEventListener('click', () =>{
            if ( window.innerWidth <=577 ) {
                mobileMenu.classList.add('navigation_active');
                openMenu.style.display = 'none';
                closeMenu.style.display = 'block';
            }

        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('navigation_active');
            closeMenu.style.display = 'none';
            openMenu.style.display = 'block';
            
        });

        // Portfolio tabs

        const filterBox = document.querySelectorAll('.js-content-photo');

        document.querySelector('.js-items').addEventListener('click', e => {
            if(e.target.tagName!== 'LI') {
                return false;
            } else {
                let filterClass = e.target.dataset['f'];

                filterBox.forEach (elem => {
                    elem.classList.remove('hide');
                    if (!elem.classList.contains(filterClass)){
                        elem.classList.add('hide');
                    }
                });
            }
        });
        new WOW().init();

        //Mobile events
        // let serviceItems = document.querySelector('.js-service-items');

        //     serviceItems.addEventListener('click', e => {
        //         let target = e.target;
        //         target.classList.remove('active');
        //         this.classList.add('active');
                
        //     });
  

});