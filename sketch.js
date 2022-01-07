//variables
  var SERVE = 0, PLAY = 1, PLAY1 = 2, PLAY2 = 3;
  var gameState = SERVE;
  var nextbutton;
  var tempSprite;
  var instructions, seasonchoice, summerop, winterop;
  var intruImg, choose_season, summer, winter;
  var preferred_plant, preferredplantsprite;
  var weigela, weigela_img, gloriosa_daisy, gloriosa_daisy_img, muskrose, muskrose_img, watermelon, watermelon_img, pineapple, pineapple_img;
  var pansy, pansy_img, goldenbell, goldenbell_img, primrose, primrose_img, plum, plum_img, kiwi, kiwi_img;
  var restart_img, restart;

function preload() {
  //images of instruction and questions
    intruImg = loadImage("instructions.JPG");
    choose_season = loadImage("qu1.JPG");
    summer = loadImage("summer.JPG");
    winter = loadImage("winter.JPG");
    preferred_plant = loadImage("qu2.JPG");
    restart_img = loadImage("restart.png");

  //images of summer plants  
    weigela_img = loadImage("weigela.jpeg");
    gloriosa_daisy_img = loadImage("gloriosa daisy.jpg");
    muskrose_img = loadImage("musk rose.jpg");
    watermelon_img = loadImage("watermelon.jpg");
    pineapple_img = loadImage("pineapple.jpg");

  //images of winter plants
    pansy_img = loadImage("pansies.jpg");
    goldenbell_img = loadImage("golden bell.jpg");
    primrose_img = loadImage("primrose.jpg");
    plum_img = loadImage("plum.jpg");
    kiwi_img = loadImage("kiwi.jpg");
}

function setup() {
  createCanvas(1200,1400);

  //restart button
    restart = createSprite(60,30,10,10);
    restart.addImage("restartbutton",restart_img);
    restart.scale = 0.3;

  //summer sprite
    summerop = createSprite(190,200,50,50);
    summerop.addImage("summerImg",summer);
    summerop.scale = 0.6;
    summerop.visible = false;

  //winter sprite  
    winterop = createSprite(980,200,50,50);
    winterop.addImage("winterImg",winter);
    winterop.scale = 0.7;
    winterop.visible = false;

  //instructions sprite
    instructions = createSprite(600,300,20,20);
    instructions.addImage("imageforinstructions",intruImg);
    instructions.scale = 0.5;

  //choice for season
    seasonchoice = createSprite(580,60,30,30);
    seasonchoice.addImage("chooseseason",choose_season);
    seasonchoice.scale = 0.7;
    seasonchoice.visible = false;

  //choice for summer plants
    preferredplantsprite = createSprite(600,100,30,30);
    preferredplantsprite.addImage("chooseplant",preferred_plant);
    preferredplantsprite.visible = false;

  //weigela questions

  //weigela
    weigela = createSprite(190,570,20,20);
    weigela.addImage("weigela",weigela_img);
    weigela.scale = 0.15;
    weigela.visible = false;

  //gloriosa daisy
    gloriosa_daisy = createSprite(650,570,20,20);
    gloriosa_daisy.addImage("gloriosa",gloriosa_daisy_img);
    gloriosa_daisy.scale = 0.3;  
    gloriosa_daisy.visible = false;

  //musk rose
    muskrose = createSprite(1100,570,20,20);
    muskrose.addImage("muskrose",muskrose_img);
    muskrose.scale = 0.3;
    muskrose.visible = false;

  //watermelon
    watermelon = createSprite(420,800,20,20);
    watermelon.addImage("watermelon",watermelon_img);
    watermelon.scale = 0.05;
    watermelon.visible = false;

  //pineapple
    pineapple = createSprite(880,800,20,20);
    pineapple.addImage("pineapple",pineapple_img);
    pineapple.scale = 0.4;
    pineapple.visible = false;

  //pansy
    pansy = createSprite(420,570,20,20);
    pansy.addImage("pansy",pansy_img);
    pansy.scale = 0.1;
    pansy.visible = false;

  //goldenbell
    goldenbell = createSprite(880,570,20,20);
    goldenbell.addImage("goldenbell",goldenbell_img);
    goldenbell.scale = 0.1;
    goldenbell.visible = false;

  //primrose
    primrose = createSprite(190,800,20,20);
    primrose.addImage("primrose",primrose_img);
    primrose.scale = 0.35;
    primrose.visible = false;

  //plum
    plum = createSprite(650,800,20,20);
    plum.addImage("plum",plum_img);
    plum.scale = 0.2;
    plum.visible = false;

  //kiwi
    kiwi = createSprite(1100,800,20,20);
    kiwi.addImage("kiwi",kiwi_img);
    kiwi.scale = 0.3;
    kiwi.visible = false;
}

function draw() {
  background("pink");
  
  if (keyDown("space")) {
    gameState = PLAY;
  }
  if (gameState===PLAY) {
    summerop.visible = true;
    winterop.visible = true;
    instructions.visible = false;
    seasonchoice.visible = true;
  }

  if (gameState===PLAY && mousePressedOver(summerop)) {
    gameState = PLAY1;
  }

  if (gameState===PLAY1) {
    summerop.visible = false;
    winterop.visible = false;
    seasonchoice.visible = false;
    preferredplantsprite.visible = true;
    weigela.visible = true;
    gloriosa_daisy.visible = true;
    muskrose.visible = true;
    watermelon.visible = true;
    pineapple.visible = true;
  }

  if (gameState===PLAY && mousePressedOver(winterop)) {
    gameState = PLAY2;
  }

  if (gameState===PLAY2) {
    summerop.visible = false;
    winterop.visible = false;
    seasonchoice.visible = false;
    preferredplantsprite.visible = true;
    pansy.visible = true;
    goldenbell.visible = true;
    primrose.visible = true;
    plum.visible = true;
    kiwi.visible = true;
  }
  
  if (mousePressedOver(restart)) {
    gameState = SERVE;
  }

  if (gameState===SERVE) {
    summerop.visible = false;
    winterop.visible = false;
    seasonchoice.visible = false;
    preferredplantsprite.visible = false;
    weigela.visible = false;
    gloriosa_daisy.visible = false;
    muskrose.visible = false;
    watermelon.visible = false;
    pineapple.visible = false;
    pansy.visible = false;
    goldenbell.visible = false;
    primrose.visible = false;
    plum.visible = false;
    kiwi.visible = false;
    instructions.visible = true;
  }

  if (mousePressedOver(weigela)) { 
      window.open("https://youtu.be/ce8BKNooBRg"); 
  }

  if (mousePressedOver(gloriosa_daisy)) {
    window.open("https://youtu.be/m0LQjeuQ8MU");
  }

  if (mousePressedOver(muskrose)) {
    window.open("https://youtu.be/wthHTDKqxuk");
  }

  if (mousePressedOver(watermelon)) {
    window.open("https://youtu.be/BafwqlWtQrA");
  }
  
  if (mousePressedOver(pineapple)) {
    window.open("https://youtu.be/MHFvC5Rm5Pw");
  }

  if (mousePressedOver(pansy)) {
    window.open("https://youtu.be/rzxSUzSOCSk");
  }

  if (mousePressedOver(goldenbell)) {
    window.open("https://youtu.be/JKIg92MdwyA");
  }

  if (mousePressedOver(primrose)) {
    window.open("https://youtu.be/u2k5gavvI0o");
  }

  if (mousePressedOver(plum)) {
    window.open("https://youtu.be/i6mniJNdQf0");
  }

  if (mousePressedOver(kiwi)) {
    window.open("https://youtu.be/ovQ5uwucG2E");
  }

  drawSprites();
}

/*function gameStatePlay () {
  gameState = "play";
  tempSprite.visible = true;
}*/