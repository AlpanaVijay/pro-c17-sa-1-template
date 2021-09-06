
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,100,50,50,2,1);
  box2 = new Box(300,100,40,40,2,2);
  
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  
  box2.show();
  box2.moveUp();

}

