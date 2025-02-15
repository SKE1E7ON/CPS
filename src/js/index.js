import '../style.css';
import '../style/swiper-bundle.main.css';

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
const exid = document. getElementById("exid")

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    navLinks.forEach(link => link.classList.remove('nav__link--active'));

    event.target.classList.add('nav__link--active');
  });
});

exid.addEventListener('click', () => {
  call_me.classList.add('off');
  call_me.classList.remove('on');
  blurs.style.display = "none"
});

me_call.addEventListener('click', () =>{
  call_me.classList.add('on');
  call_me.classList.remove('off');
  blurs.style.display = "block"

});
exid.addEventListener('click', () => {
  call_back.classList.add('off');
  call_back.classList.remove('on');
  blurs.style.display = "none"
});

back_call.addEventListener('click', () =>{
  call_back.classList.add('on');
  call_back.classList.remove('off');
  blurs.style.display = "block"

});

btn_close_menu.addEventListener('click', () => {
    menu.classList.add('hidden');
    menu.classList.remove('visible');
    blurs.style.display = "none"
});

btn_show_menu.addEventListener('click', () =>{
    menu.classList.add('visible');
    menu.classList.remove('hidden');
    blurs.style.display = "block"

});

show_text.addEventListener('click', ()=>{
  text.style.height = "80%"
  show_text.classList.remove("on")
  show_text.classList.add("off")
  close_text.classList.add("on")
  
});

close_text.addEventListener('click', ()=>{
    text.style.height = "115px"
    close_text.classList.remove("on")
    close_text.classList.add("off")
    show_text.classList.add("on")
});



var swiper = new Swiper(".mySwiper", {
  
  direction: 'horizontal',
  loop: false,
  slidersPerView: 'auto',
  spaseBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpionts:{
    768:{
      spaseBetween: 0,
    },
  }

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