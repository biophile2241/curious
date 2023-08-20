const navSlide = () => {
 const c= document.querySelector('.container1');
 const nav= document.querySelector('.navber');
//  const link= document.querySeleter('.navber-item');

 c.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');

 });

//  link.forEach((link,index)=> {
//      console.log(index);
//      link.style.animation = 'navLinkFade 0.5s ease forward ${index/7 + 2}s';
//     //  console.log(index/5 + 0.2);
//  });
}

navSlide();