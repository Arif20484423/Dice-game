var x=Math.random();
x=Math.floor(x*6)+1;


var y=Math.random();
y=Math.floor(y*6)+1;

if(x===1){
  document.querySelector(".img1").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/557px-Dice-1.svg.png");
}
else if(x===2){
document.querySelector(".img1").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/3/34/Dice-2.svg");
}
else if(x===3){
    document.querySelector(".img1").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/c/ca/Dice-3.svg");
}
else if(x===4){
    document.querySelector(".img1").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/1/16/Dice-4.svg");
}
else if(x===5){
    document.querySelector(".img1").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/d/dc/Dice-5.svg");
}
else{
    document.querySelector(".img1").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/1/14/Dice-6.svg");
}



if(y===1){
  document.querySelector(".img2").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/557px-Dice-1.svg.png");
}
else if(y===2){
document.querySelector(".img2").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/3/34/Dice-2.svg");
}
else if(y===3){
    document.querySelector(".img2").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/c/ca/Dice-3.svg");
}
else if(y===4){
    document.querySelector(".img2").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/1/16/Dice-4.svg");
}
else if(y===5){
    document.querySelector(".img2").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/d/dc/Dice-5.svg");
}
else{
    document.querySelector(".img2").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/1/14/Dice-6.svg");
}



if(x>y){
  document.querySelector("h1").innerHTML="I Win";
}
else if(y>x){
  document.querySelector("h1").innerHTML="You Win";
}
else{
    document.querySelector("h1").innerHTML="Tie Please Refresh";
}
