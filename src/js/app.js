import { gsap } from "gsap";

export default function () {
  const toggleButton = document.querySelector('.burger');
  const blocks = document.querySelectorAll('.block')
  let isOpen = false;
  const tl = gsap.timeline({ paused :true});


  
  tl.to('.block', {
    duration : 1,
    // clipPath : "polygon(0% 0%, 100% 0%, 100% 100%, % 100%",
    stagger :0.075,
    ease: "power3.inOut",
    opacity: 0,
  })
  tl.to('.menu-title, .menu-item',{
    duration : 0.3,
    opacity :1,
    stagger : 0.05,
  },"-=0.5")

  toggleButton.addEventListener('click',function (e) {
    // blocks.forEach(block => {
    //   gsap.to(block, {
    //     duration : 1,
    //     clipPath : "polygon(0% 0%, 100% 0%, 100% 100%, % 100%",
    //     stagger :0.075,
    //     ease : "power3.inOut",
    //   })
    // });
    
    
    if(isOpen) {
      console.log('replay')
      tl.reverse();
    } else {
      console.log('play')
      tl.play();
    }
    isOpen = !isOpen
  })
}