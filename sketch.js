//Create variables here
var dog
var dogB
var db
var food
var fd = 50
function preload()
{
  doggy = loadImage("images/dogImg.png")
  doggy1 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 800);
  db = firebase.database();

  food = db.ref("Food")
  food.on("value" , function(data){
dogB = data.val()
    //dogB.Food = fd
  })



  dog = createSprite(400 , 400 , 50 , 50)
  dog.addImage(doggy)
  dog.scale = 0.5
  
}


function draw() { 
  background("white"); 

  

  drawSprites();

  fill ("black")
  textSize(50)
  text ("FOOD: " + dogB , 300 , 100)

  if (dogB <= 0){
    fill ("black")
    textSize(50)
  text("FOODS GONE -VE" , 200 , 200)

  }
  
  
  //add styles here

}

function keyPressed(){

if(keyCode === UP_ARROW){

dogB -= 1



db.ref("/").set({
Food: dogB


})

dog.addImage(doggy1)
//fd -= 1

}

}

