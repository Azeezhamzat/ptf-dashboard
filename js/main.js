
function byId(id){ return document.getElementById(id); }

function setTheme(isDark){
  if(isDark){ document.body.classList.add('dark'); }
  else{ document.body.classList.remove('dark'); }
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  const tbtn = byId('themeBtn');
  if(tbtn) tbtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
}

function toggleSidebar(){
  const sb = document.querySelector('.sidebar');
  if(sb) sb.classList.toggle('open');
}

function filterQuestions(){
  const q = (byId('qSearch')?.value || '').toLowerCase().trim();
  document.querySelectorAll('[data-qcard="1"]').forEach(el=>{
    const txt = (el.getAttribute('data-qtext') || '').toLowerCase();
    el.style.display = txt.includes(q) ? 'flex' : 'none';
  });
}

function toggleSection(id){
  const el = byId(id);
  if(!el) return;
  el.classList.toggle('collapsed');
}

document.addEventListener('DOMContentLoaded', ()=>{
  const dark = localStorage.getItem('darkMode') === 'true';
  setTheme(dark);

  // bind theme
  const tbtn = byId('themeBtn');
  if(tbtn){
    tbtn.addEventListener('click', ()=> setTheme(!document.body.classList.contains('dark')));
  }

  // bind mobile menu
  const mbtn = byId('menuBtn');
  if(mbtn){
    mbtn.addEventListener('click', toggleSidebar);
  }

  // section toggles
  document.querySelectorAll('[data-section-toggle="1"]').forEach(h=>{
    h.addEventListener('click', ()=>{
      const target = h.getAttribute('data-target');
      if(target) toggleSection(target);
    });
  });

  // close sidebar on nav click (mobile)
  document.querySelectorAll('.navlink').forEach(a=>{
    a.addEventListener('click', ()=>{
      const sb = document.querySelector('.sidebar');
      if(sb && sb.classList.contains('open')) sb.classList.remove('open');
    });
  });

  // back to top
  const topBtn = byId('topBtn');
  if(topBtn){
    topBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  }
});
