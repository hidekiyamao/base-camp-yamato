const menu=document.querySelector('.menu-button');const nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('line-reserve').addEventListener('click',e=>{e.preventDefault();alert('LINE公式アカウントの予約URL取得後に接続します。')});

const imageModal=document.querySelector('.image-modal');
const modalImage=imageModal.querySelector('img');
const closeModal=()=>{imageModal.classList.remove('open');imageModal.setAttribute('aria-hidden','true');modalImage.src='';};
document.querySelectorAll('.zoomable').forEach(button=>{
  button.addEventListener('click',()=>{
    modalImage.src=button.dataset.image;
    modalImage.alt=button.querySelector('img').alt;
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden','false');
  });
});
imageModal.querySelector('.modal-close').addEventListener('click',closeModal);
imageModal.addEventListener('click',event=>{if(event.target===imageModal)closeModal();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();});
