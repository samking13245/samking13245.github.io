var imagearray = [];
var i = 1;
var C = 1;
var pageturn = 0;
var Cindex = 1;
let lastTime = 0;
let pages = [ 1, 251, 501,750, ];
let oddpages = [0,1,3,5,];
let links = ["https://ukdataservice.ac.uk/media/455582/uk-data-service-annual-report-2014_2015_linked.pdf",
"https://ukdataservice.ac.uk/media/455259/ukdataserviceannualreport2012-2014.pdf",
"https://www.ukdataservice.ac.uk/media/264313/ESDS-AnnualReport20092010.pdf",
"https://www.ukdataservice.ac.uk/media/264310/ESDS-AnnualReport20082009.pdf",
"https://www.ukdataservice.ac.uk/media/264307/ESDS-AnnualReport20072008.pdf",
"https://www.ukdataservice.ac.uk/media/264304/ESDS-AnnualReport20062007.pdf",];

function preload()
{
for (i = 1; i < 752; i++) { 
  imagearray[i] = loadImage('img/('+i+').jpg');
  }
}
  
function setup() {
createCanvas(720,720);
image(imagearray[C],0,0);

}


function draw() {
 // image(imagearray[C],0,0);
 // text(pageturn,0,725); // Debuging
  textSize(50);
  text("Read",140,575);
  text("Issue",140,630);
  text("Read",435,575);
  text("Issue",435,630);
if (mouseIsPressed){
  if (C < 750 && C >= 0 && mouseX >360 && mouseY <500){
   if ( millis() - lastTime > 50 ) {
     pageturn = pageturn + 1;
    lastTime = millis();
   }
  }else if  (C <= 750 && C > 0 && mouseX <= 360 && mouseY <500){
    if ( millis() - lastTime > 50 ) {
     pageturn = pageturn - 1;
    lastTime = millis();
   }  
}





}// mouse pressed 

  if (C != pages[pageturn] && pages[pageturn] >= C){
      if ( millis() - lastTime > 5) {
      C = C + 1;
       
      image(imagearray[C],0,0);
      lastTime = millis();
  } 
  }
  if(C != pages[pageturn] && pages[pageturn] <= C){
   if ( millis() - lastTime > 5) {
     C = C - 1;
     image(imagearray[C],0,0);
    lastTime = millis();
  }
  }

}




// after draw
function mouseClicked() {
  if (mouseY >=500 && mouseY <665 && mouseX >=400 && mouseX <601) {
    if (pageturn == 0){
      window.open(links[pageturn]);
    }else if (pageturn != 0){
      window.open(links[pageturn*2]);
    }
  }else if(mouseY >=500 && mouseY <665 && mouseX >=100 && mouseX <301){
   window.open(links[oddpages[pageturn]]);
  }
}


      
     
//}
