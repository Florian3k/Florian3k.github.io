var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function POINT(posX, posY, prop) {
  this.x = posX;
  this.y = posY;
  this.property = prop;
}
function CONNECT(a, b) {
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  if (b.property) {
    var gamma = 35;
    var len = 15;
    var atan;
    var Dx = b.x - (b.x<a.x?-1:1) * len * Math.cos(Math.atan((b.y-a.y)/(b.x-a.x)) + gamma * Math.PI / 180);
    var Dy = b.y - (b.x<a.x?-1:1) * len * Math.sin(Math.atan((b.y-a.y)/(b.x-a.x)) + gamma * Math.PI / 180);
    
    var Ex = b.x - (b.x<a.x?-1:1) * len * Math.cos(Math.atan((b.y-a.y)/(b.x-a.x)) - gamma * Math.PI / 180);
    var Ey = b.y - (b.x<a.x?-1:1) * len * Math.sin(Math.atan((b.y-a.y)/(b.x-a.x)) - gamma * Math.PI / 180);

    ctx.lineTo(Dx,Dy);
    ctx.moveTo(b.x, b.y);
    ctx.lineTo(Ex,Ey);
  }
}
function START(posX, posY) {
  var r = 15;
  var w = 30;
  ctx.moveTo(posX - w, posY + r);
  ctx.arc(posX - w, posY, r, 0.5 * Math.PI, 1.5 * Math.PI);
  ctx.lineTo(posX + w, posY - r);
  ctx.arc(posX + w, posY, r, 1.5 * Math.PI, 0.5 * Math.PI);
  ctx.lineTo(posX - w, posY + r);
  
  ctx.font = "20px Arial";
  ctx.fillText("START", posX - 32, posY + 7);
  
  this.lower = new POINT(posX, posY + r, true);
}
function KONIEC(posX, posY) {
  var r = 15;
  var w = 37;
  ctx.moveTo(posX - w, posY + r);
  ctx.arc(posX - w, posY, r, 0.5 * Math.PI, 1.5 * Math.PI);
  ctx.lineTo(posX + w, posY - r);
  ctx.arc(posX + w, posY, r, 1.5 * Math.PI, 0.5 * Math.PI);
  ctx.lineTo(posX - w, posY + r);
  
  ctx.font = "20px Arial";
  ctx.fillText("KONIEC", posX - 38, posY + 7);
  
  this.upper = new POINT(posX, posY - r, true);
  this.left  = new POINT(posX - 52, posY, true);
  this.right = new POINT(posX + 52, posY, true);
}
function IO_BLOCK(posX, posY, width, text) {
  var offset = 10;
  var h = 17;
  ctx.moveTo(posX - width/2 + offset, posY - h);  //up   left
  ctx.lineTo(posX + width/2 + offset, posY - h);  //up   right
  ctx.lineTo(posX + width/2 - offset, posY + h);  //down right
  ctx.lineTo(posX - width/2 - offset, posY + h);  //down left
  ctx.lineTo(posX - width/2 + offset, posY - h);  //up   left
  
  ctx.font = "20px Arial";
  ctx.fillText(text, posX - width/2 + offset + 5, posY + 7);
  
  this.upper = new POINT(posX, posY - h, true);
  this.lower = new POINT(posX, posY + h, true);
}
function OP_BLOCK(posX, posY, width, text) {
  var w = 15;
  ctx.moveTo(posX - width/2, posY - w);  //up   left
  ctx.lineTo(posX + width/2, posY - w);  //up   right
  ctx.lineTo(posX + width/2, posY + w);  //down right
  ctx.lineTo(posX - width/2, posY + w);  //down left
  ctx.lineTo(posX - width/2, posY - w);  //up   left
  
  ctx.font = "20px Arial";
  ctx.fillText(text, posX - width/2 + 7, posY + 7);
  
  this.upper = new POINT(posX, posY - w, true);
  this.lower = new POINT(posX, posY + w, true);
}
function OP_BLOCK_2(posX, posY, width, text1, text2) {
  var w = 15;
  ctx.moveTo(posX - width/2, posY - w*2);  //up   left
  ctx.lineTo(posX + width/2, posY - w*2);  //up   right
  ctx.lineTo(posX + width/2, posY + w*2);  //down right
  ctx.lineTo(posX - width/2, posY + w*2);  //down left
  ctx.lineTo(posX - width/2, posY - w*2);  //up   left
  
  ctx.font = "20px Arial";
  ctx.fillText(text1, posX - width/2 + 5, posY - 8);
  ctx.fillText(text2, posX - width/2 + 5, posY - 8 + 2*w);
  
  this.upper = new POINT(posX, posY - w*2, true);
  this.lower = new POINT(posX, posY + w*2, true);
}
function IF_BLOCK(posX, posY, width, height, text, swap) {
  ctx.moveTo(posX          , posY - height/2);  //up
  ctx.lineTo(posX + width/2, posY);             //right
  ctx.lineTo(posX          , posY + height/2);  //down
  ctx.lineTo(posX - width/2, posY);             //left
  ctx.lineTo(posX          , posY - height/2);  //up
  
  ctx.font = "20px Arial";
  ctx.fillText(text, posX - width/2 + 25, posY + 7);
  if (swap) {
    ctx.fillText("TAK", posX - width/2 - 40, posY - 5);
    ctx.fillText("NIE", posX + width/2 + 5 , posY - 5);
  } else {
    ctx.fillText("NIE", posX - width/2 - 40, posY - 5);
    ctx.fillText("TAK", posX + width/2 + 5 , posY - 5);
  }
  this.upper = new POINT(posX, posY - height/2, true);
  this.left = new POINT(posX - width/2, posY, true);
  this.right = new POINT(posX + width/2, posY, true);
}
{
  var _startBlock = new START(400, 50);
  var _op_1 = new OP_BLOCK(400, 100, 140, "Wyjdź z domu");
  var _op_2 = new OP_BLOCK(400, 150, 180, "Zejdź po schodach");
  var _op_3 = new OP_BLOCK(400, 200, 170, "Idź na przystanek");
  var _op_4 = new OP_BLOCK(400, 250, 180, "Czekaj na tramwaj");
  var _op_5 = new OP_BLOCK(400, 300, 190, "Wsiądź do tramwaju");
  var _op_6 = new OP_BLOCK(400, 350, 276, 'Jedź na "Młodych Techników"');
  var _op_7 = new OP_BLOCK(400, 400, 190, "Wysiądź z tramwaju");
  var _op_8 = new OP_BLOCK(400, 450, 130, "Idź do szkoły");
  var _endBlock = new KONIEC(400, 500);
  CONNECT(_startBlock.lower, _op_1.upper);
  CONNECT(_op_1.lower, _op_2.upper);
  CONNECT(_op_2.lower, _op_3.upper);
  CONNECT(_op_3.lower, _op_4.upper);
  CONNECT(_op_4.lower, _op_5.upper);
  CONNECT(_op_5.lower, _op_6.upper);
  CONNECT(_op_6.lower, _op_7.upper);
  CONNECT(_op_7.lower, _op_8.upper);
  CONNECT(_op_8.lower, _endBlock.upper);
}

var startBlock = new START(300, 600);
var io_1 = new IO_BLOCK(300, 650, 115, "wczytaj S");
var op_1 = new OP_BLOCK_2(300, 725, 140, "L = długość(S)", " i = 1");
var if_1 = new IF_BLOCK(300, 850, 86, 86, "i < L");

CONNECT(startBlock.lower, io_1.upper);
CONNECT(io_1.lower, op_1.upper);
CONNECT(op_1.lower, if_1.upper);

var pt_1 = new POINT(400, 850);
var if_2 = new IF_BLOCK(400, 950, 140, 90, "S[i]==S[L]");
var pt_2 = new POINT(500, 950);
var op_2 = new OP_BLOCK_2(500, 1050, 86, " i = i + 1", "L = L - 1")

CONNECT(if_1.right, pt_1);
CONNECT(pt_1, if_2.upper);
CONNECT(if_2.right, pt_2);
CONNECT(pt_2, op_2.upper);

var pt_3 = new POINT(500, 1100);
var pt_4 = new POINT(570, 1100);
var pt_5 = new POINT(570, 780);
var pt_6 = new POINT(300, 780, true);

CONNECT(op_2.lower, pt_3);
CONNECT(pt_3, pt_4);
CONNECT(pt_4, pt_5);
CONNECT(pt_5, pt_6);

var pt_7 = new POINT(140, 850);
var pt_8 = new POINT(300, 950);
var io_2 = new IO_BLOCK(140, 1050, 80, '"TAK"');
var io_3 = new IO_BLOCK(300, 1050, 80, '"NIE"');

CONNECT(if_1.left, pt_7);
CONNECT(if_2.left, pt_8);
CONNECT(pt_7, io_2.upper);
CONNECT(pt_8, io_3.upper);

var pt_9 = new POINT(140, 1150);
var pt_10 = new POINT(300, 1150);
var endBlock = new KONIEC(220, 1150);
CONNECT(io_2.lower, pt_9);
CONNECT(io_3.lower, pt_10);
CONNECT(pt_9, endBlock.left);
CONNECT(pt_10, endBlock.right);

ctx.stroke();
ctx.stroke();
