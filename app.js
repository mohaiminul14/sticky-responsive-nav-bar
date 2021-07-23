//function 
const navSlide = () => {
    //connect selector
    const toggle = document.querySelector('.toggle-icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    //toggle function
    toggle.addEventListener('click',() => {
        //button a click korle slide asbe
        nav.classList.toggle('nav-active');

        //protibar click  a jate animate kore 
        navLinks.forEach((link,index)=>{
            if(link.style.animation)
            {
                link.style.animation='';
            }
            else
            {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 +1}s`;
            }
        });
        //toggle er cross er jonno
        toggle.classList.toggle('toggle-cross')
    });
}

navSlide();

