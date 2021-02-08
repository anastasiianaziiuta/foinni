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
        // let tab = document.querySelectorAll('.js-item'),
        //     info = document.querySelector('.js-items'),
        //     tabContent = document.querySelectorAll('.js-content-photo');

        //     function hideTabContent(a) {
        //         for ( let i=a; i<tabContent.length; i++ ) {
        //             tabContent[i].style.display = 'none';
        //         }
        //     }
        //     hideTabContent(6);

        //     function showTabContent(b) {
        //         if (tabContent[b].style.display = 'none') {
        //             tabContent[b].style.display = 'block';
        //         }
        //     }

        //     info.addEventListener('click', function(e) {
        //         let target = e.target;
        //         if (target && target.classList.contains('js-item')){
        //             for ( let i=0; i<tab.length; i++ ) {
        //                 if (target == tab[i]) {
        //                     hideTabContent(0);
        //                     showTabContent(i);
        //                     break;
        //                 }
        //             }
        //         }
        //     });
        
});