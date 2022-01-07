const toggle_navbar = document.querySelector('.toggle-navbar')
const navbar = document.querySelector('nav')
const navbar_li = document.querySelectorAll('nav div')
const logo_p = document.querySelector(".page1-header p")
const logo_span = document.querySelector(".page1-header span")
console.log(navbar_li)

toggle_navbar.addEventListener("click", function(){ 
    logo_p.style.display="none";
    logo_span.style.display="none";
    document.body.style.overflow = "hidden"
    navbar.style.transition = "all 500ms";
    navbar.style.display="grid";
    navbar.style.gridTemplateColumns="1fr";
    
    

 }); 
 const close_btn = document.querySelector('nav button')
 close_btn.addEventListener('click',()=>{
     navbar.style.display="none";
     logo_p.style.display="block";
    logo_span.style.display="block";
    document.body.style.overflow = "auto"
 })
 navbar_li.forEach(navbar_li => {
    navbar_li.addEventListener('click',function (){
        navbar.style.display="none";
        logo_p.style.display="block";
    logo_span.style.display="block";
    document.body.style.overflow = "auto"
    }
    )
  })
