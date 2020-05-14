function contactFormEvent() {
  const openBtn = $(".contact-btn")[0],
    closeBtn = $(".contact-modal__close")[0];
  
  openBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    $(".contact-modal").addClass("on");
  })
  
  closeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    $(".contact-modal").removeClass("on");
  })
}

function navFold() {
  const btn = $('.footer__btn'),
        nav = $(".footer"),
        navItem = $(".footer__nav__list-item > a");

  
  btn.click((e)=>{
    nav.toggleClass("on");
    btnIcon = btn.children();
    btnIcon.toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
  })
}

function pagingInfo() {
  $('.slide-ind').text(1 + '/' + $('.slick-slide').length);
  $('.grid-slide').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    let i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide-ind').text(i + '/' + slick.slideCount);
  });
}

function slick() {
  $('.grid-slide').slick({
    dots: false,
    fade: true,
    prevArrow: $('.slide-btn-left'),
    nextArrow: $('.slide-btn-right'),
  });
}

function init() {
  slick();
  pagingInfo();
  navFold();
  contactFormEvent();
}

$(document).ready(init());


