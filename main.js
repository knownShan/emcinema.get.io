// search bar
const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".box");

search.addEventListener("keyup", e =>{
  if(e.key === "Enter"){
    let searchValue = search.value,
      value = searchValue.toLowerCase();
      images.forEach(image =>{
        if(value === image.dataset.name){
            return image.style.display = "block";
          }
          image.style.display = "none";
        });
        console.log(value);
  }
});
search.addEventListener("keyup", e =>{
  if(search.value != "")return;
  images.forEach(image =>{
    image.style.display = "block";
  });
});

// funtion to toggle the class.
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active')  ;
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

var swiper = new Swiper(".sugg-container", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
});