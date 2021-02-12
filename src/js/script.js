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


        //Touch event

        // let allItems = document.querySelector('.js-team-items'),

         let visibleItem = document.querySelectorAll('.js-team-item');
             
            for (let i = 0; i < visibleItem.length; i ++ ){
                visibleItem[i].addEventListener('click', function() {
                    if (this.classList.contains('show')){
                        this.classList.remove('show');
                    } else {
                        for (el of visibleItem) {
                            el.classList.remove('show');
                        }
                        this.classList.add('show');
                    }
                });
            }
         
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
           

         //Modal
         let btnMenu = document.querySelectorAll('.js-price-btn'),
             overlayMenu = document.querySelector('.js-overlay'),
             closeOrder = document.querySelector('.js-close-order');
 
                btnMenu.forEach(item=>{
                    item.addEventListener('click', () =>{
                        overlayMenu.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    });
                });

                function closeModalWindow (){
                    overlayMenu.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }

                closeOrder.addEventListener('click', ()=> {
                
                    closeModalWindow();
                });


          // PageUp
        let pageUp = document.querySelector('.js-pageup');

        window.addEventListener('scroll', showPageUp);
        
            function showPageUp(){
                let scrolled = window.pageYOffset,
                    coords = document.documentElement.clientHeight;
                
                    if (scrolled > coords) {
                        pageUp.style.display = 'block';
                    }
                    if (scrolled < coords) {
                        pageUp.style.display = '';
                    }
            }
        showPageUp();

        new WOW().init();
});