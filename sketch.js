var store 
var showPrice = false
var pcPrice = 20000, monitorPrice=10000, keyboardPrice=1000
var money = 100000
function preload() {
  bg1 = loadImage("images/bg1.jpg")
  store1 = loadImage("images/store.jpg")
  pc1 = loadImage("images/pc.jpg")
  monitor1 = loadImage("images/monitor.jpg")
  keyboard1 = loadImage("images/keyboard.jpg")
  c1 = loadImage("images/c1.jpg")
  c2 = loadImage("images/c2.jpg")
  boyi = loadImage("images/boy.gif")
  moneyiii = loadImage("images/money.jpg")
}




function setup() {
  createCanvas(1300,700);
  moneySprite = createSprite(1200,70,70,30)
  moneySprite.addImage(moneyiii)
  moneySprite.scale=0.15
  store = createSprite(100,600,40,40)
   store.addImage(store1)
   store.scale = 0.1
   pc = createSprite(180,600,40,40)
   monitor = createSprite(250,600,40,40)
   keyboard = createSprite(330,600,40,40)
   pc.addImage(pc1)
   monitor.addImage(monitor1)
   keyboard.addImage(keyboard1)
   pc.scale = 0.03
   monitor.scale = 0.1
   keyboard.scale = 0.2
   pc.visible=false
   monitor.visible=false
   keyboard.visible=false 
boy = createSprite(650,280)
boy  .addImage(boyi)
}

function draw() {
  background(bg1); 
  push() 
  fill("green")
  textSize(30)
  text(money,moneySprite.x-20,moneySprite.y+70)
  pop()
  if(frameCount%100===0){
    money+=10
  }
  buyItems()
  if(mousePressedOver(store)){
   displayStoreItems()
  }
  if(showPrice===true){
  stroke("black")
  strokeWeight(4)
  text(pcPrice,pc.x-20,pc.y+50)
  text(monitorPrice,monitor.x-20,monitor.y+50)
  text(keyboardPrice,keyboard.x-20,keyboard.y+50)

}
spawncomments()
  drawSprites();
  
}
 function buyItems(){
   if(mousePressedOver(keyboard)){
   money=money-keyboardPrice
   }
   if(mousePressedOver(monitor)){
    money=money-monitorPrice
    }
    if(mousePressedOver(pc)){
      money=money-pcPrice
      }
 }
function spawncomments(){
  if(frameCount%120==0){
    com = createSprite(500,250,10,10)
    r = Math.round(random(1,2))
    com.visible=true
    com.velocityY=-0.5
    if(r==1){
     com.addImage(c1)
      
    }
    if(r==2){
      com.addImage(c2)      }
    }
}
function displayStoreItems(){
  if(pc.visible===true){
    pc.visible=false
    showPrice=false
     }else{
     pc.visible=true
     showPrice=true
     }
     if(monitor.visible===true){
      monitor.visible=false
   
       }else{
       monitor.visible=true
   
       }
       if(keyboard.visible===true){
        keyboard.visible=false
     
         }else{
         keyboard .visible=true
     
         }
      
}