burger=document.querySelector(".burger");
vlist=document.querySelector(".v-list");
navlist=document.querySelector(".nav-list");


burger.addEventListener('click',()=>{
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    navlist.classList.toggle("navh");



})

function disclaimer_on() {
    document.getElementById("Dis_overlay").style.display = "block";
  }
  function PP_on() {
    document.getElementById("PP_overlay").style.display = "block";
  }
  
  function disclaimer_off() {
    document.getElementById("Dis_overlay").style.display = "none";
  }
  function PP_off() {
    document.getElementById("PP_overlay").style.display = "none";
  }