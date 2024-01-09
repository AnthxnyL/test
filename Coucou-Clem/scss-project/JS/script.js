
// BURGER MENU

hamburger = document.querySelector(".hamburger");
            hamburger.onclick = function() {
                navBar = document.querySelector(".header__nav");
                navBar.classList.toggle("active");
            }


// SLIDER

var swiper = new Swiper(".slide-container__slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        770: {
            slidesPerView: 2,
        },
        2000: {
            slidesPerView: 3,
        },
    },
});

  
// SLIDER HOMEPAGE

var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".button-next-section-5",
      prevEl: ".button-prev-section-5",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        2000: {
            slidesPerView: 3,
        },
    },
});


// SCROLL INFINITE

const scrollers = document.querySelectorAll(".scroller");
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation () {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('arria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
      });
    });
}

  