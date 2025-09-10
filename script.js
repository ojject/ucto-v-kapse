// Form OK
const form = document.querySelector('.contact');
if (form){
  form.addEventListener('submit', ()=>{
    form.querySelector('.form-ok').hidden = false;
  });
}

// Reveal on scroll
const reveal = () => {
  document.querySelectorAll('[data-animate]').forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.85) el.classList.add('in');
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Presenter mode (optional)
const params = new URLSearchParams(location.search);
const presenter = params.get('present');
const bar = document.getElementById('presenterBar');
if (bar && presenter === '1'){
  bar.hidden = false;
  const sections = [...document.querySelectorAll('main .section')];
  let idx = 0;
  const go = (d)=>{ idx = Math.min(Math.max(0, idx + d), sections.length-1); sections[idx].scrollIntoView({behavior:'smooth', block:'start'}); };
  document.getElementById('prevSec').onclick = ()=>go(-1);
  document.getElementById('nextSec').onclick = ()=>go(+1);
  document.addEventListener('keydown', (e)=>{ if(e.key==='ArrowRight') go(+1); if(e.key==='ArrowLeft') go(-1); });
}
