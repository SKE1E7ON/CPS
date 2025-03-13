const navLinks = document.querySelectorAll('.nav__link');
const btn_close_menu = document.getElementById("close_menu")
const menu = document.getElementById("menu")
const btn_show_menu = document.getElementById("menu_button")
const blurs = document.getElementById("blur")
const texting = document.getElementsByClassName(".texting")
const show_text = document.getElementById("show_text")
const close_text = document.getElementById("close_text")
const text = document.getElementById("text")
const show = document.getElementById("show");
const corp_container = document.getElementById("corp_container");
const clozd = document.getElementById("close");
const show_staff = document.getElementById("show_staff")
const staff_container = document.getElementById("staff_container")
const close_staff = document.getElementById("close_staff")
const call_me = document.getElementById("call_me")
const me_call = document.getElementById("me_call")
const call_back = document.getElementById("call_back")
const back_call = document.getElementById("back_call")
const back_calla = document.getElementById("back_calla")
const back_callb = document.getElementById("back_callb")
const exid = document. getElementById("exid")

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    navLinks.forEach(link => link.classList.remove('nav__link--active'));

    event.target.classList.add('nav__link--active');
  });
});

exid.addEventListener('click', (event) => {
  event.preventDefault();
  call_me.classList.add('off');
  call_me.classList.remove('on');
  blurs.style.display = "none"
});

me_call.addEventListener('click', (event) =>{
  event.preventDefault();
  call_me.classList.add('on');
  call_me.classList.remove('off');
  blurs.style.display = "block"

});
exid.addEventListener('click', (event) => {
  event.preventDefault();
  call_back.classList.add('off');
  call_back.classList.remove('on');
  blurs.style.display = "none"
});

back_call.addEventListener('click', (event) =>{
  event.preventDefault();
  call_back.classList.add('on');
  call_back.classList.remove('off');
  blurs.style.display = "block"

});
back_calla.addEventListener('click', (event) =>{
  event.preventDefault();
  menu.classList.add('hidden');
  menu.classList.remove('visible');
  blurs.style.display = "none"
  call_back.classList.add('on');
  call_back.classList.remove('off');
  blurs.style.display = "block"

});
back_callb.addEventListener('click', (event) =>{
  event.preventDefault();
  call_back.classList.add('on');
  call_back.classList.remove('off');
  blurs.style.display = "block"

});

btn_close_menu.addEventListener('click', (event) => {
  event.preventDefault();
    menu.classList.add('hidden');
    menu.classList.remove('visible');
    blurs.style.display = "none"
});

btn_show_menu.addEventListener('click', (event) =>{
  event.preventDefault();
    menu.classList.add('visible');
    menu.classList.remove('hidden');
    blurs.style.display = "block"

});

show_text.addEventListener('click', (event)=>{
  event.preventDefault();
  text.style.height = "80%"
  show_text.classList.remove("on")
  show_text.classList.add("off")
  close_text.classList.add("on")
  
});

close_text.addEventListener('click', (event)=>{
  event.preventDefault();
    text.style.height = "115px"
    close_text.classList.remove("on")
    close_text.classList.add("off")
    show_text.classList.add("on")
});



const swiper = new Swiper('.swiper', {
  slidesPerView: 1.5,
  spaceBetween: 1,
  loop: false,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      640: {
          slidesPerView: 2.5, // На маленьких экранах
      },
      1024: {
          slidesPerView: 3.5, // На больших экранах
      },
  },
});
const swiper2 = new Swiper('.swiper-2', {
  slidesPerView: 1.5,
  spaceBetween: 1,
  loop: false,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      640: {
          slidesPerView: 2.5, // На маленьких экранах
      },
      1024: {
          slidesPerView: 3.5, // На больших экранах
      },
  },
});
show.addEventListener('click', () => {
  corp_container.style.height = '100%'
  clozd.style.display = "flex"
  show.style.display = "none"
})

clozd.addEventListener('click', () =>{
  corp_container.style.height = '200px'
  clozd.style.display = "none"
  show.style.display = "flex"
})

show_staff.addEventListener('click', () => {
  staff_container.style.height = '100%'
  close_staff.style.display = "flex"
  show_staff.style.display = "none"
})

close_staff.addEventListener('click', () =>{
  staff_container.style.height = '170px'
  close_staff.style.display = "none"
  show_staff.style.display = "flex"
})