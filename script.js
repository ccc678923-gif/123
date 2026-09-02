const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
const hero=document.querySelector('.hero-image');
window.addEventListener('scroll',()=>{if(hero){hero.style.transform=`translateY(${Math.min(window.scrollY*.16,120)}px) scale(1.03)`}});
const revealables=document.querySelectorAll('.menu-card,.editorial-copy,.manifesto-text,.visit-copy');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
revealables.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
