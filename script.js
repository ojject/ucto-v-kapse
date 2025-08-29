// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
// Contact form feedback
const form = document.querySelector('.contact');
if (form){
  form.addEventListener('submit', ()=>{
    form.querySelector('.form-ok').hidden = false;
  });
}
