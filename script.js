"use strict"
const elementsarray=document.getElementsByClassName("celement");
const l=elementsarray.length;
let time="night";
const icon=document.getElementsByTagName("img")[0];
icon.addEventListener("click",()=>{
    if(time=="night")
    {
        document.body.classList.add("daynight");
        icon.src="image/icons8-night-64.png";
        time="day";
    }
    else if(time=="day")
    {
        document.body.classList.remove("daynight");
        icon.src="image/icons8-morning-64.png";
        time="night";
    }
})
for(let i=0;i<l;i++)
{
    elementsarray[i].addEventListener("transitionend",(e)=>{
        elementsarray[i].classList.remove("playing");
        if(time=="day")
        {
        elementsarray[i].classList.remove("dayplaying");
        }
    });
}
window.addEventListener("keydown",function(event){
    if(!document.querySelector(`#${event.key}`))
    {
          return;
    }
   (document.querySelector(`#${event.key}`)).currentTime= 0;
    document.querySelector(`#${event.key}`).play();
    document.querySelector(`.${event.key}`).classList.add("playing");
    if(time=="day"){
        document.querySelector(`.${event.key}`).classList.add("dayplaying");
    }
})

for(let i=0;i<l;i++)
{
    elementsarray[i].addEventListener("click",myfunc);
}
function myfunc(event){
    const t=event.target.innerText.toLowerCase();
    document.querySelector(`#${t}`).currentTime=0;
    document.querySelector(`#${t}`).play();
    document.querySelector(`.${t}`).classList.add("playing");
    if(time=="day"){
    document.querySelector(`.${t}`).classList.add("dayplaying");
    }
}