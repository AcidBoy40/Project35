var dog, dogImage, happyDog, happyDogImg;
var food, foodStock;
var database;

function preload()
{
 dogImage = loadImage("images/dogImg.png");
 happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  foodStock = database.ref('food');
  foodStock.on("value,",readStock);
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock('food');
    dog.addImage(happyDogImg);
  }

  drawSprites();
}

function readStock(data){
  food = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
      x = x - 1;
    }
  }
  database.ref('/').update({
    food:x
  })

