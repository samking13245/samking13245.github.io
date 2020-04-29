
/*
 * @name Video Canvas
 * @description <p>Load a video with multiple formats and draw it to the canvas.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */

let video1;
let video1revs;

let video2;
let video2revs;



let linksindex = 0;
let direction = 0;
let pos = 0;
let pageturn = 0;
let lastTime = 0;


let oddpages = [0,1,3,5,];
let links = ["https://ukdataservice.ac.uk/media/455582/uk-data-service-annual-report-2014_2015_linked.pdf",
"https://ukdataservice.ac.uk/media/455259/ukdataserviceannualreport2012-2014.pdf",
"https://www.ukdataservice.ac.uk/media/264313/ESDS-AnnualReport20092010.pdf",
"https://www.ukdataservice.ac.uk/media/264310/ESDS-AnnualReport20082009.pdf",
"https://www.ukdataservice.ac.uk/media/264307/ESDS-AnnualReport20072008.pdf",
"https://www.ukdataservice.ac.uk/media/264304/ESDS-AnnualReport20062007.pdf",];

let debug;

function preload() {
  instructions = loadImage('data/instructions.png');
  firstvidstill = loadImage('data/1.png');
}

function setup() {
  createCanvas(720, 720);
  // specify multiple formats for different browsers
  video1 = createVideo('data/1forw.webm');
  video1rev = createVideo('data/1revs.webm');
  
  video2 = createVideo('data/2forw.webm');
  video2rev = createVideo('data/2revs.webm');
  
 video1.hide(); // by default video shows up in separate dom
 video1rev.hide(); // by default video shows up in separate dom
 
 video2.hide(); // by default video shows up in separate dom
 video2rev.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead

}

function draw() {
 

  
 if (pageturn == 0){  
   image(instructions, 0, 0);


 
 
 } else if (pageturn == 2){  image(video1, 0, 0); // draw the video frame to canvas 
   
text(debug,50,50);
 }else if (pageturn == 1){ image(video1rev, 0, 0); // draw the video frame to canvas 


 } else if (pageturn == 3){image(video2rev, 0, 0); // draw the video frame to canvas 
      
 }else if (pageturn == 4){image(video2, 0, 0); // draw the video frame to canvas 
 
}

  // text for the buttons 
  textSize(50);
  if(linksindex != 0 ){
  text("Read",140,575);
  text("Issue",140,630);
  }
  if(linksindex != 0 || pageturn == 2){
  text("Read",435,575);
  text("Issue",435,630);
  }


}








// after draw
function mousePressed() {
  // Button click detect
  
 
  

  if (pageturn != 0){
  
  if (mouseY >=500 && mouseY <665 && mouseX >=400 && mouseX <601 & pageturn != 15) {
    if (pageturn == 0){
      window.open(links[linksindex]); //link to UKDS PDF
    }else if (pageturn != 0){
      window.open(links[linksindex*2]); //link to UKDS PDF
    }
  }
  else if(mouseY >=500 && mouseY <665 && mouseX >=100 && mouseX <301 && pageturn != 0){
   window.open(links[oddpages[linksindex]]); //link to UKDS PDF
  }



  // Page turn click detect
   if (mouseX >360 && mouseY <500 && direction == 0){
     
     video1.play(); // runs video file video1 
     debug = video1.duration();
     pageturn = 2; // what page transition 
     direction = 1; //page index
     linksindex = linksindex + 1;
   }else if (mouseX >360 && mouseY <500 && direction == 1){
     video2.play(); 
     pageturn = 4;
     direction = 2;
     linksindex = linksindex + 1;
     }
     

  if  (mouseX <= 360 && mouseY <500  && direction == 1){
     video1rev.play();
     direction = 0; 
     pageturn = 1;
     linksindex = linksindex - 1;
  } else if  (mouseX <= 360 && mouseY <500  && direction == 2){
     video2rev.play();
     direction = 1; 
     pageturn = 3;
     linksindex = linksindex - 1;
   
     
}
  }
   if(mouseX > 200 && mouseX < 720 && mouseY > 615 && mouseY < 691 ){ 
  pageturn = 2;
  image(firstvidstill, 0, 0);
  
  }

}// end of mouse pressed
