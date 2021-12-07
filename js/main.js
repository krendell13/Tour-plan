$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  //Keyboard Navigation
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  //Keyboard Navigation
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

//Parallax effect
$(".newsletter").parallax({
  imageSrc: "img/newsletter-bg.jpg",
  speed: 0.4,
});

var menuButton = $('.menu-button');
menuButton.on("click", function() {
  $(".navbar-bottom").toggleClass('navbar-bottom_visible');
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}

$(document).on('keydown', function(e) {
  if (e.keyCode == 27)
    window.close();
});

//Обработка форм
$(".form").each(function (){
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Name must be at least 3 letters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Email must be in the format of name@mail.com",
    },
    phone: {
      required: "Phone is required",
    }
  },
});
})

AOS.init();

});

