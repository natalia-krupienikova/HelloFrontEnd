// general__swiper
const generalSwiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// news__swiper
const newsSwiper = new Swiper('.swiper1', {
  loop: true,

  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// gallery
Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});

// Google Map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 40.6686, lng: -73.8999 },
    zoom: 13.5,
    mapId: '2f084b4895741534',
  });

  const marker = new google.maps.Marker({
    position: { lat: 40.6781, lng: -73.8981 }, 
    map: map,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}

window.initMap = initMap;

// validate form
function validateForm() {
  let form = document.forms["contactsForm"];
  let nameInput = form['name'];
  let emailInput = form['email'];
  let emailRegexp = /^\S+@\S+\.\S+$/;

  if (nameInput.value.length < 4) {
    nameInput.classList.add("error");
    nameInput.classList.remove("success");
  } else {
    nameInput.classList.add("success");
    nameInput.classList.remove('error');
  }

  if (!emailRegexp.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailInput.classList.remove("success");
  } else {
    emailInput.classList.add("success");
    emailInput.classList.remove('error');
  }
}
