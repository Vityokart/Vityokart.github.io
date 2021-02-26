//nav
const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault() 
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      document.querySelector(goto).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

//burgerMenu
const navToggle = document.querySelector('.nav_toggle')
const nav = document.querySelector('.nav')

navToggle.addEventListener("click", function() {
    nav.classList.toggle('burger_show')
    navToggle.classList.toggle('active')
})

//slider
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true
});
