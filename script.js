const app = document.getElementById("app");
const hearts = document.getElementById("hearts");

let slide = 0;
let reveal = false;
let chosen = false;
let heartInterval = null;

function next(){
  slide++;
  render();
}

function startHeartRain(){
  if(heartInterval) return;

  heartInterval = setInterval(()=>{
    const h = document.createElement("div");
    h.className="heart";
    h.innerText=Math.random()>0.5?"💗":"💖";
    h.style.left=Math.random()*window.innerWidth+"px";
    h.style.opacity=0.4+Math.random()*0.4;
    hearts.appendChild(h);
    setTimeout(()=>h.remove(),6000);
  },700);
}

function stopHeartRain(){
  clearInterval(heartInterval);
  heartInterval=null;
  hearts.innerHTML="";
}

function render(){

stopHeartRain();

if(slide===0){
app.innerHTML=`
<h1>⚠️ this is a very serious psychological test</h1>
<div class="small">please answer honestly</div>
<br>
<button onclick="next()">start</button>
`;
}

else if(slide===1){
app.innerHTML=`
<h1>how have you been recently?</h1>
<button onclick="next()">good</button>
<button onclick="next()">ups and downs</button>
<button onclick="next()">tired but trying</button>
`;
}

else if(slide===2){
app.innerHTML=`
<h1>do you overthink at night</h1>
<button onclick="next()">yes</button>
<button onclick="next()">sometimes</button>
<button onclick="next()">always</button>
`;
}

else if(slide===3){
app.innerHTML=`
<h1>have you been sleeping with a calm heart?</h1>
<button onclick="next()">yeah</button>
<button onclick="next()">not really</button>
`;
}

else if(slide===4){
app.innerHTML=`
<h1>on a scale of 1–10, how dramatic has life been lately?</h1>
<div style="display:flex;align-items:center;gap:15px;margin:30px 0;">
<div style="font-weight:600;">1</div>
<input type="range" min="1" max="10" value="5">
<div style="font-weight:600;">10</div>
</div>
<button onclick="next()">Next</button>
`;
}

else if(slide===5){
app.innerHTML=`
<div class="same">
gotcha! this wasn’t a test
i just wanted to check on you :>
</div>
<br>
<button onclick="next()">Next</button>
`;
}

else if(slide===6){
app.innerHTML=`
<div class="same">
we’re giving each other space, and i respect that
</div>
<br>
<button onclick="next()">Next</button>
`;
}

else if(slide===7){
app.innerHTML=`
<div class="same">
i’m not here to fix anything
i’m not here to rush anything
</div>
<br>
<button onclick="next()">Next</button>
`;
}

else if(slide===8){
app.innerHTML=`
<div class="same">
i just wanted to check in and 
gently remind you that you’re not alone (ever)
</div>
<br>
<button onclick="next()">Next</button>
`;
}
else if(slide===9){
app.innerHTML=`
<div class="same">
for you, 
i would learn anything
i didn’t even know how to code
but i figured it out 
to make this 
</div>
<br>
<button onclick="next()">Next</button>
`;
}

else if(slide===10){
app.innerHTML=`
<div class="same">
not because i expect anything
just because i want to make you smile
(and that’s more than enough for me ^^)
</div>
<br>
<button onclick="next()">Next</button>
`;
}

else if(slide===11){
app.innerHTML=`
<div class="same">
and no pressure
just for now
</div>
<br>
<button onclick="next()">Next</button>
`;
}


else if(slide===12){
if(!reveal){
app.innerHTML=`
<div class="big">don’t click this.</div>
<br>
<button onclick="reveal=true; render()">oops you have to click it tho</button>
`;
}else{
app.innerHTML=`
<div class="same">this is a little warmth from me to you :3</div>
<div class="small">(hoping your day feels a little lighter)</div>
<br>
<button onclick="next()">Next</button>
`;
}
}

else if(slide===13){
if(!chosen){
app.innerHTML=`
<button onclick="chosen=true; next()">act like this didn’t affect you</button>
<button onclick="chosen=true; next()">save this for later</button>
<button onclick="chosen=true; next()">smile and close it</button>
`;
}
}

else if(slide===14){
app.innerHTML=`
<div class="same">
that’s okay
i still meant every word ;)
</div>
<br>
<button onclick="next()">Next</button>
`;
}

else if(slide===15){
app.innerHTML=`
<div class="big">Happy Valentine’s Day &lt;3</div>
<div class="small">🤍</div>
`;
startHeartRain();
}

}

render();
