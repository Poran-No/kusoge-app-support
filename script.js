const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const lines=[
'> booting P-039 archive...',
'> public_build: #01 - #10',
'> fragment_01: NU',
'> fragment_02: MA',
'> fragment_03: 4',
'> fragment_04: 0',
'> archive_tag: NUMA40',
'> note: narrative identifier only',
'> premium_unlock: Apple In-App Purchase only',
'> status: something is still hidden...',
'> 41.EXIT ?'
];

const out=document.getElementById('terminalText');
let i=0,j=0,text='';
function type(){
  if(!out||i>=lines.length)return;
  const line=lines[i];
  if(j<line.length){
    text+=line[j++]; out.textContent=text+'█';
    setTimeout(type,26+Math.random()*34);
  }else{
    text+='\n'; out.textContent=text; i++; j=0; setTimeout(type,250);
  }
}
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!out?.dataset.started){out.dataset.started='1';type()}}),{threshold:.3});
if(out)obs.observe(out);
