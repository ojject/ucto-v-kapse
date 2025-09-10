// year
const y = new Date().getFullYear();
document.getElementById('year').textContent = y;
document.getElementById('year2').textContent = y;

// mobile menu
const btn = document.querySelector('.menu');
const nav = document.getElementById('mobileNav');
if (btn && nav){
  btn.addEventListener('click', ()=>{
    const open = nav.hasAttribute('hidden') ? false : true;
    if (open){ nav.setAttribute('hidden',''); btn.setAttribute('aria-expanded','false'); }
    else { nav.removeAttribute('hidden'); btn.setAttribute('aria-expanded','true'); }
  });
}

// side-nav active highlight on scroll
const links = document.querySelectorAll('.side-nav a');
const sections = [...document.querySelectorAll('main .section')];
const byId = id => document.querySelector(`.side-nav a[href="#${id}"]`);
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(l=>l.classList.remove('active'));
      const id = e.target.getAttribute('id');
      const a = byId(id); if(a) a.classList.add('active');
    }
  });
},{rootMargin: '-40% 0px -50% 0px', threshold: 0.01});
sections.forEach(s=>obs.observe(s));

// contact form OK
const form = document.querySelector('.contact__form');
if (form){
  form.addEventListener('submit', ()=>{
    form.querySelector('.ok').hidden = false;
  });
}
