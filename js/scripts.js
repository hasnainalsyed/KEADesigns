document.documentElement.style.setProperty('--header-height', document.getElementById('site-header').offsetHeight + 'px');

let ourServices__swiper = new Swiper("[our-services-swiper]", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let testimonialsSlider__swiper = new Swiper("[testimonials-slider]", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true
});

const panoramaImage = new PANOLENS.ImagePanorama("img/image1.jpeg");
const imageContainer = document.querySelector("[data-image-container-one]");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.5,
  controlBar: false
});

viewer.add(panoramaImage);
