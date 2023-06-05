const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//facilitar a sua vida
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;
//criando uma variável 
var angulo = 0;

function preload(){
    //carrega imagem
   cenario = loadImage("fundo.gif");
}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    //muda o modo de medir o ângulo para GRAUS
    angleMode(DEGREES)
    //criar um objeto da classe Torre
    torre = new Torre(160,350,150,310);
    //criar um objeto da classe Canhao
    canhao = new Canhao(160,130);

    bala =  new Bola(160,130)
   
}

function draw() {
    Engine.update(engine);
    background("cyan");
    image (cenario,600,300,1200,600);

    canhao.abacaxi();
    torre.show()
    bala.show()
}

function keyPressed(){
    if(keyCode==32){
        bala.shoot();
    }
    
}