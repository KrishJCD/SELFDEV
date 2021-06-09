

var form,game;
var database;
var state=0;
var userCount; 

var wei,hei;
function setup()
{
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  form=new Form();
  form.display();


  wei=displayWidth;
  hei=displayHeight;
  /*game=new Game();
  game.getState();
  game.start();*/
}

function draw()
{
  background(255);
  if(userCount===0)
  {
    Player.updatePlayerCount(1);
    //game.update(1);
  }
}