
const tabs=[...document.querySelectorAll(".step-tab")];
const panels=[...document.querySelectorAll(".step-panel")];

function activateTab(tab){
  tabs.forEach(t=>{
    const active=t===tab;
    t.classList.toggle("active",active);
    t.setAttribute("aria-selected",String(active));
  });
  panels.forEach(p=>{
    const active=p.id===`panel-${tab.dataset.panel}`;
    p.classList.toggle("active",active);
    p.hidden=!active;
  });
}

tabs.forEach((tab,index)=>{
  tab.addEventListener("click",()=>activateTab(tab));
  tab.addEventListener("keydown",event=>{
    if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End"].includes(event.key)) return;
    event.preventDefault();
    let next=index;
    if(["ArrowDown","ArrowRight"].includes(event.key)) next=(index+1)%tabs.length;
    if(["ArrowUp","ArrowLeft"].includes(event.key)) next=(index-1+tabs.length)%tabs.length;
    if(event.key==="Home") next=0;
    if(event.key==="End") next=tabs.length-1;
    tabs[next].focus();
    activateTab(tabs[next]);
  });
});

const checks=[...document.querySelectorAll(".check-card input")];
const progress=document.querySelector("#progress-text");
function updateProgress(){
  const done=checks.filter(check=>check.checked).length;
  progress.textContent=`${done} of ${checks.length} checks complete${done===checks.length?" — SAFER review complete":""}`;
}
checks.forEach(check=>check.addEventListener("change",updateProgress));
document.querySelector(".reset-button").addEventListener("click",()=>{
  checks.forEach(check=>check.checked=false);
  updateProgress();
  checks[0].focus();
});

const menuButton=document.querySelector(".menu-button");
const menu=document.querySelector(".mobile-menu");
menuButton.addEventListener("click",()=>{
  const open=menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
});
menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));
document.querySelector("#year").textContent=new Date().getFullYear();
