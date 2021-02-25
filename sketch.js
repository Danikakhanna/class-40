var database
var gameState=0
var playerCount=0
var form,player,game
var allPlayers
var  car1,car2,car3,car4,cars
var ranks
function preload(){
    c1=loadImage('images/car1.png')
    c2=loadImage('images/car2.png')
    c3=loadImage('images/car3.png')
    c4=loadImage('images/car4.png')
    t=loadImage('images/track.jpg')
}
function setup(){
    createCanvas(displayWidth -20,displayHeight -30);
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
 }

function draw(){
    background("white");
    if(playerCount===4){
        game.updateState(1)
    }
if (gameState===1){
    clear()
    game.play()
}
if(gameState===2){
    clear()
    game.finish()
}
}

