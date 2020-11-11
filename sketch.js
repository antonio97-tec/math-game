var tela = 0
var opçao = 1;
var xMenu = 100;
var y = 100;
var xJogar= 40;
var yJogar = 290;
/*
var nivel = 1;
tempo = 30 segundos;
HAVERA 15 NIVEIS, A CADA 5 NIVEIS O TEMPO DIMINUI 5 SEGUNDOS
*/
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  if (tela == 0) {
    menu ()
  }
  if (tela == 1 ) {
    jogar ()
  }
  if ( tela ==2) {
    instruçoes()
  }
}

function menu () 
{
   rect ( 85,y,170, 45, 15 );

  textSize (40);  
  text ( 'Math Game', 120, 50);
  textSize (32);
  
  text ( 'Jogar', xMenu, 130)
  text ( 'Instruções', xMenu, 230)
  text ( 'Créditos', xMenu, 330)
}

function jogar () 
{
  rect ( xJogar, yJogar, 100, 35)
 
  
  
  
  //TEXTO DE OPERAÇÃO
  textSize(50)
  text ( 'x1 + y1', 100, 50)
  
  //OPÇOES PRA RESPOSTAS
  textSize (26)
  text ('opçao 1', 50, 320)
  text ('opçao 2', 150, 320)
  text ('opçao 3', 250, 320)
  
  
  
}

function instruçoes () 
{
  textSize (26) 
  text('Este jogo servirá para aprimorar \nseus conhecimentos na área de\nmatematica./nEntao você fará uso\ndas setas esquerda e direita \npara selecionar a resposta correta.',0,50)
  
}


function keyPressed () 
{
  if ( keyIsDown(UP_ARROW) && y>130) {
    
   opçao= opçao -1;
    y = y - 100;
  }
  
  if ( keyIsDown (DOWN_ARROW) && y <300) {
    opçao = opçao +1;
    y = y +100;
  }
  
  if(key =='Enter') {
    tela = opçao;
  }
  if (key == 'Escape' ) {
    tela = 0;
  }
  
  //FUNÇÃO DO JOGO
  if (keyIsDown (RIGHT_ARROW) && xJogar < 240) 
    {
      xJogar = xJogar + 100;
    }
  
  
  if (keyIsDown (LEFT_ARROW) && xJogar > 50) 
    {
      xJogar = xJogar - 100;
    }
}