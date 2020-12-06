var wall , bullet , speed , weight , thickness , damage;

function setup(){
    createCanvas(1600,400);

    speed = random(223,321);
    weight = random(30,52);
 
    bullet = createSprite(50,200,10,10);
    bullet.velocityX = speed;

    thickness = random(22,83);
    
    wall = createSprite(1500,200,thickness,height/2);
    wall.shapeColor = color(80,80,80);

    damage = bullet*weight*speed*speed / thickness*thickness*thickness; 

}

function draw(){

background(255,255,255);

bullet.velocityX = speed;

  if (bullet.x - wall.x < bullet.width/2 + bullet.width/2 &&
      wall.x - bullet.x < wall.width/2 + bullet.width/2 ){

    bullet.velocityX = 0;      
       
     if(damage<10){
         wall.shapeColor = color(0,255,0);
     }

    if(damage>10){
        wall.shapeColor = color(255,0,0);
    }
  }



drawSprites();
}


