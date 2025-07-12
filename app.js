 let gameSeq=[];
 let userSeq=[];
 let started=false;
 let level=0;
 let btns=["yellow","red","purple","blue"];
 let h2=document.querySelector("h2");
 let highest=0;
  document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
     
  });
 function gameFlash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
  }
  function userFlash(btn){
    btn.classList.add('flashuser')
    setTimeout(function(){
        btn.classList.remove("flashuser");
    },250);
  }
function levelUp(){
  userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let btnrand=Math.floor(Math.random()*3);//generate number between 0 to 3it 
    let randColor=btns[btnrand];//let btns[2]=purple
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randbtn=document.querySelector(`.${randColor}`);
    gameFlash(randbtn);

}
function checkAns(idx){
   // console.log(`current level ${level}`);
   if(userSeq[idx]==gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
     }
   }
 else {
        if (level > highest) {
            highest = level;
        }
        h2.innerHTML = `Game over! Your score is <b>${level}</b>. Highest score is <b>${highest}</b>. Press any key to start.`;
      let body= document.querySelector("body");
        body.style.backgroundColor="red";
     setTimeout(function(){
   body.style.backgroundColor="white";
     },150);
     
     reset();
}
}
function btnpressed(){
   let btn=this;
   userFlash(btn);
   usercol=btn.getAttribute("id");
   userSeq.push(usercol);
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnpressed);
    }
function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}