const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;


function preload(){
  
}
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create()
   world = engine.world

   ground = new Ground(500,550,1000,10)
   player1 = new Player(500,500,30,30)
   player2 = new Player(200,500,30,30)
   platform = new Platform(200,400,100,20)

   keyPressed()

}

function draw() {
  background("lightBlue");
 
  Engine.update(engine);

  ground.display()
  player1.display()
  player2.display()
  player2.colour = "pink"
 platform.display()
 

 if(isTouching(player2,platform)){

  
    platform.colour  ="pink"

 }

 if(isTouching(player1,platform)){

  
  platform.colour  ="blue"

}

if(platform.colour = "blue"){

if(isTouching(player2,platform)){

  platform.colour  ="blue"

}

}


}


function keyPressed(){

 

     if(keyCode === 68){

       Matter.Body.applyForce(player1.body,player1.body.position,{x:10,y:0})

     }

     if(keyCode === 87){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:-10})

    }

    if(keyCode === 65){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:-10,y:0})

    }

    if(keyCode === 73){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:-10})

    }

    if(keyCode === 74){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:-10,y:0})

    }

    if(keyCode === 76){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:10,y:0})

    }


}

function isTouching(object1,object2){

  if((object1.body.position.x-object2.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object2.body.position.x-object1.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object1.body.position.y-object2.body.position.y) <= (object2.height/2 + object1.height/2)
  &&(object2.body.position.y-object1.body.position.y) <= (object2.height/2 + object1.height/2)){
 
    return true
 
  }else{
 
    return false
 
  }
 
 }