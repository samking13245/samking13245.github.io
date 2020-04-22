var imagearray = [];
var i = 1;
var C = 1;
let pageturn = 0;
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
  imagearray[i] = loadImage('img/('+i+').jpg'); // load all the images
  }
}
  
function setup() {
createCanvas(720,720);
image(imagearray[C],0,0);  // load the first image 

}


function draw() {

  // text for the buttons 
  textSize(50);
  if(pageturn != 0){
  text("Read",140,575);
  text("Issue",140,630);
  }
  if(pageturn != 3){
    text("Read",435,575);
  text("Issue",435,630);
  }

  
  // end of text for the buttons
  


// mouse pressed 
 // turning foward
  if (C != pages[pageturn] && pages[pageturn] >= C){
        if ( millis() - lastTime > 5) { //speed of page turning
        C = C + 1; // Page turning increments 
        image(imagearray[C],0,0); // load image
        lastTime = millis();
  } 
  }
  // turning backward
  if(C != pages[pageturn] && pages[pageturn] <= C){
       if ( millis() - lastTime > 5) { //speed of page turning
       C = C - 1; // Page turning increments 
       image(imagearray[C],0,0); // load image
       lastTime = millis();
  }
  }


}// end of draw

// after draw
function mousePressed() {
//  // Button click detect
  if (mouseY >=500 && mouseY <665 && mouseX >=400 && mouseX <601 & pageturn != 3) {
    if (pageturn == 0){
      window.open(links[pageturn]); //link to UKDS PDF
    }else if (pageturn != 0){
      window.open(links[pageturn*2]); //link to UKDS PDF
    }
  }
  else if(mouseY >=500 && mouseY <665 && mouseX >=100 && mouseX <301 && pageturn != 0){
   window.open(links[oddpages[pageturn]]); //link to UKDS PDF
  }



  // Page turn click detect
   if (C < 750 && mouseX >360 && mouseY <500 && pageturn < 3){
       pageturn = pageturn + 1; //turn forward to next index
        

  }else if  (C > 2 && mouseX <= 360 && mouseY <500 && pageturn != 0){
     pageturn = pageturn - 1; //turn backwards to next index
}

}// end of mouse pressed

      
 
