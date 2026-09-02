const cursor=document.querySelector('.cursor');
const hero=document.querySelector('.hero-image');
const progress=document.querySelector('.scroll-line');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('mousemove',e=>{
  if(cursor&&!reduceMotion){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';}
});

document.querySelectorAll('a,button,.menu-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{if(cursor)cursor.classList.add('cursor-large')});
  el.addEventListener('mouseleave',()=>{if(cursor)cursor.classList.remove('cursor-large')});
});

window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const pct=max>0?(window.scrollY/max)*100:0;
  if(progress)progress.style.width=pct+'%';
  if(hero&&!reduceMotion)hero.style.transform=`translateY(${Math.min(window.scrollY*.16,120)}px) scale(1.03)`;
},{passive:true});

const revealables=document.querySelectorAll('.reveal,.ritual-step,.quote blockquote');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}
}),{threshold:.12});
revealables.forEach(el=>{el.classList.add('reveal');observer.observe(el)});

const buttons=document.querySelectorAll('.menu-filter button');
const cards=document.querySelectorAll('.menu-card');
buttons.forEach(button=>button.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const filter=button.dataset.filter;
  cards.forEach(card=>{
    const show=filter==='all'||card.dataset.category===filter;
    card.classList.toggle('hidden',!show);
  });
}));
