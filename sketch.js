//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImg,dogImg1
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(100,100,10,10)
  dog.addImage(dogImg)
  database=firebase.database()
  foodStock.database.ref("Food")
  foodStock.on("value",readStock)

  
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   happyDog.addImage(dogImg1)
 }
  drawSprites();
  //add styles here
textSize(20)
fill("black")
stroke(2)
text("Note:Press UP_ARROW Key To Feed Drago Milk",100,200)
}
 function readStock(data){
   foodS=data.val();
 }

 function writeStock(x){
   database.ref('/').update({
     Food:x
   })
 }


