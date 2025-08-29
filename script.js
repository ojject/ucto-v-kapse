// Mobile drawer
const toggle = document.querySelector('.nav-toggle');
const drawer = document.getElementById('drawer');
if (toggle){
  toggle.addEventListener('click', ()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    drawer.hidden = expanded;
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form feedback
const form = document.querySelector('.contact');
if (form){
  form.addEventListener('submit', ()=>{
    form.querySelector('.form-ok').hidden = false;
  });
}
