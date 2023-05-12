document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.menu-burger').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.add('menu--active');
    });

    document.querySelector('.menu__btn-close').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.remove('menu--active');
    });

    

    document.addEventListener('click', (event) => {
        if(event.target.matches('.btn-js')) {
            console.log('myModal');
            openModal('#myModal');
        }
    });

    const swiper1 = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1240: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const swiper2 = new Swiper('.social__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const swiper3 = new Swiper('.advantages__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            1280: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});



async function closeModal(selector) {
    let myModalEl = document.querySelector(selector);
    let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.hide();
}
async function openModal(selector) {
    let myModalEl = document.querySelector(selector);
    let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.show();
}


document.querySelectorAll('.btn__item').forEach(el => {
    el.addEventListener('click', (event) => { 
        let id = event.target.dataset.id
        document.querySelectorAll('.catalog-content').forEach(el => el.classList.add('d-none'));
        document.querySelector(`.catalog-content${id}`).classList.remove('d-none');
    });
    
});
document.querySelectorAll('.select__item').forEach(el => {
    el.addEventListener('click', (event) => { 
        let id = event.target.dataset.id
        console.log(id);
        document.querySelectorAll('.catalog-content').forEach(el => el.classList.add('d-none'));
        document.querySelector(`.catalog-content${id}`).classList.remove('d-none');
    });
    
});
document.querySelector('.catalog-hero__filter-btn').addEventListener('click', (event) => { 
    document.querySelector('.filter').classList.toggle('d-none');
});