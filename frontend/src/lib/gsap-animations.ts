import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  const isDev = process.env.NODE_ENV === 'development';

  const animateElements = document.querySelectorAll('.scroll-animate');
  
  animateElements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const direction = htmlEl.dataset.direction || 'up';
    const scaleAnim = htmlEl.dataset.scale !== 'false';
    
    let xOffset = 0;
    let yOffset = 0;
    
    if (direction === 'up') yOffset = 50;
    if (direction === 'down') yOffset = -50;
    if (direction === 'left') xOffset = -50;
    if (direction === 'right') xOffset = 50;

    gsap.fromTo(htmlEl, 
      {
        autoAlpha: 0, 
        y: yOffset,
        x: xOffset,
        scale: scaleAnim ? 0.95 : 1
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: htmlEl,
          start: 'top 85%',
          toggleActions: 'play none none none',
          markers: isDev,
        }
      }
    );
  });

  const staggerContainers = document.querySelectorAll('.scroll-stagger-container');
  
  staggerContainers.forEach((container) => {
    const htmlContainer = container as HTMLElement;
    const staggerItems = htmlContainer.querySelectorAll('.scroll-stagger-item');
    
    gsap.fromTo(staggerItems,
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        duration: 0.8,
        autoAlpha: 1,
        y: 0,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: htmlContainer,
          start: 'top 85%',
          toggleActions: 'play none none none',
          markers: isDev,
        }
      }
    );
  });

  const parallaxElements = document.querySelectorAll('.scroll-parallax');
  
  parallaxElements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const yValue = htmlEl.dataset.y || "30%";
    
    gsap.fromTo(htmlEl, 
      { y: `-${yValue}` },
      {
        y: yValue,
        ease: 'none',
        scrollTrigger: {
          trigger: htmlEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  });
};
