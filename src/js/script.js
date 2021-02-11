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

        //Service min

        let acc = document.getElementsByClassName('js-price-title');
        

            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    } else {
                        for (el of acc){
                            el.classList.remove('active');
                        }
                        this.classList.add('active');
                    }

               });
            }
           

        new WOW().init();
});