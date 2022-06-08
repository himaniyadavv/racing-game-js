let orangeCar=document.getElementById("car--two")
let redCar=document.getElementById("car--one")
let result = document.getElementById("result")
const score=document.getElementById("score")
var game = document.getElementById("game")
var counter = 0 ;
const jumpsound = new Audio("small.wav");

orangeCar.addEventListener("animationiteration", function(){ 
 var random=((Math.floor(Math.random()*3))*130)
 orangeCar.style.left=random + "px";
 counter++;

})

window.addEventListener("keydown",function(e){
 if(e.keyCode=="39")  { var redCarLeft=parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
    if(redCarLeft<260){redCar.style.left=(redCarLeft + 130) + "px"}
 
    jumpsound.play()
   
};
    
    if(e.keyCode == "37"){
    
        var redCarLeft=parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
    if(redCarLeft>5){redCar.style.left=(redCarLeft - 130) + "px"}
      
    jumpsound.play() 
    
}; 
})

let idf = setInterval(function Gameover(){ 
    var orangeCarTop=parseInt(window.getComputedStyle(orangeCar).getPropertyValue("top"))
    
    var redCarLeft=parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
    var orangeCarLeft=parseInt(window.getComputedStyle(orangeCar).getPropertyValue("left"))

  
    if((orangeCarLeft===redCarLeft)&& (orangeCarTop>= 300)){
        console.log("GAME FINISH CONDITION ACHIVED");
        clearInterval(idf)
         result.style.display="flex";
         game.style.display="none";
         score.innerHTML= `Score : ${counter}`;
         counter=0;


    }
},10) ;

