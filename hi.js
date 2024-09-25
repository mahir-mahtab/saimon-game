let game=[];
let user=[];
let h3=document.querySelector("h3");
let btn=document.querySelectorAll(".btn");
  let start=false;
  let level=0;
  document.addEventListener("keypress",function(){
    if(!start){
        start=true;
        // console.log("mer");
        levelup();
    }
  }) 
  function levelup(){
    user=[];
    level++;
    h3.innerText=`Level ${level}`;
    let rand =Math.floor(Math.random()*3)
    btnflash(btn[rand]);
    game.push(rand);
  }
  function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
    btn.classList.remove("flash");    
    },500);
  }
  function btnpress(){
    let btn=this;
    btnflash(btn);  
    user.push((Number(btn.textContent)-1));
    checkans(user.length-1);
  }
  let allbut=document.querySelectorAll(".btn");
  for(bt of allbut){
    bt.addEventListener("click",btnpress);
  }
  function checkans(idx){
    console.log(user);
    console.log(game);
     if(user[idx]===game[idx]){
        if(game.length==user.length){
            

       setTimeout(levelup,1000);

     }
    }
     else{
        h3.innerText="dhon game khella,press any key to start";
        reset();
     }
    
    }
    function reset(){
        start=false;
        user=[];
        game=[];
        level=0;
    }

