const pages=[...document.querySelectorAll(".page")];let index=0;
function show(i){pages.forEach((p,n)=>p.classList.toggle("active",n===i));index=i;window.scrollTo({top:0,behavior:"smooth"});petals(i===pages.length-1?25:10)}
function petals(n){const box=document.getElementById("petals");for(let i=0;i<n;i++){const p=document.createElement("span");p.className="petal";p.style.left=Math.random()*100+"%";p.style.top="-20px";p.style.animationDuration=6+Math.random()*7+"s";p.style.animationDelay=Math.random()*2+"s";box.appendChild(p);setTimeout(()=>p.remove(),16000)}}
const music=document.getElementById("music");
document.getElementById("startBtn").addEventListener("click",()=>{music.play().catch(()=>{});show(1)});
document.querySelectorAll(".next").forEach(b=>b.addEventListener("click",()=>show(Math.min(index+1,pages.length-1))));
document.getElementById("replay").addEventListener("click",()=>{music.currentTime=0;show(0)});
petals(15);