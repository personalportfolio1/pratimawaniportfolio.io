// hide the nav-links
$(document).ready(function(){
   $('.nav-link').click(function(){
       $('.navbar-collapse').collapse('hide');
   });

   let nav=document.querySelector(".navbarsection");
   window.onscroll=function(){
       if(document.documentElement.scrollTop > 20){
           nav.classList.add("scroll-on");
       }
           else{
               nav.classList.remove("scroll-on");
           }
       }
});