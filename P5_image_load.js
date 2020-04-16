var imagearray = [];
var i = 1;
var C = 1;
var pageturn = 0;
var Cindex = 1;
let lastTime = 0;
let pages = [ 1, 251, 501,750, ];

function preload()
{
for (i = 1; i < 752; i++) { 
  imagearray[i] = loadImage('img/('+i+').jpg');
  }
}
  
function setup() {
createCanvas(1040,480);
}


function draw() {
  background(0);
  image(imagearray[C],0,0);


if (mouseIsPressed){
  if (C < 750 && C >= 0 && mouseX >360){
   if ( millis() - lastTime > 50 ) {
     pageturn = pageturn + 1;
    lastTime = millis();
   }
  }if  (C <= 750 && C > 0 && mouseX <= 360){
    if ( millis() - lastTime > 50 ) {
     pageturn = pageturn - 1;
    lastTime = millis();
   }  
}


}// mouse pressed 

  if (C != pages[pageturn] && pages[pageturn] >= C){
      if ( millis() - lastTime > 5) {
      C = C + 1;
      lastTime = millis();
  } 
  }
  if(C != pages[pageturn] && pages[pageturn] <= C){
   if ( millis() - lastTime > 5) {
     C = C - 1;
    lastTime = millis();
  }
  }

}




// after draw

//void mousePressed(); {
 // if (mouseX > 730 && mouseX < 980 && mouseY > 40 && mouseY <140) { 
   // link("https://ukdataservice.ac.uk/media/622467/ukdsannualreport18.pdf");
   // }
      
     
//}
