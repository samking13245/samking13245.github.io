
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



let oddpages = [0,1,3,5,];
let links = ["https://ukdataservice.ac.uk/media/622467/ukdsannualreport18.pdf",
"https://ukdataservice.ac.uk/media/604931/50351_ukds_annual_report_17_web.pdf",
"https://ukdataservice.ac.uk/media/604697/28817_ukds_annual_report_16_web.pdf",
"https://ukdataservice.ac.uk/media/455582/uk-data-service-annual-report-2014_2015_linked.pdf",
"https://ukdataservice.ac.uk/media/455259/ukdataserviceannualreport2012-2014.pdf",
"https://www.ukdataservice.ac.uk/media/264313/ESDS-AnnualReport20092010.pdf",
"https://www.ukdataservice.ac.uk/media/264310/ESDS-AnnualReport20082009.pdf",
"https://www.ukdataservice.ac.uk/media/264307/ESDS-AnnualReport20072008.pdf",
"https://www.ukdataservice.ac.uk/media/264304/ESDS-AnnualReport20062007.pdf",
"https://www.ukdataservice.ac.uk/media/264301/ESDS-AnnualReport20052006.pdf",
"https://www.ukdataservice.ac.uk/media/264298/ESDS-AnnualReport20042005.pdf",
"https://www.ukdataservice.ac.uk/media/264295/ESDS-AnnualReport20032004.pdf",];

let debug;

function preload() {
  instructions = loadImage('data/instructions.png');
  firstvidstill = loadImage('data/1.png');
}



function setup() {
  createCanvas(720, 720);
  // specify multiple formats for different browsers
  //load all the video files 
  video1 = createVideo('data/1forw.mp4');
  video1rev = createVideo('data/1revs.mp4');
  video2 = createVideo('data/2forw.mp4');
  video2rev = createVideo('data/2revs.mp4');
  video3 = createVideo('data/3forw.mp4'); 
  video3rev = createVideo('data/3revs.mp4'); 
  video4 = createVideo('data/4forw.mp4'); 
  video4rev = createVideo('data/4revs.mp4'); 
  video5 = createVideo('data/5forw.mp4'); 
  video5rev = createVideo('data/5revs.mp4'); 
  video6 = createVideo('data/6forw.mp4'); 
  video6rev = createVideo('data/6revs.mp4'); 
  video7 = createVideo('data/7forw.mp4'); 
  video7rev = createVideo('data/7revs.mp4'); 
  video8 = createVideo('data/8forw.mp4'); 
  video8rev = createVideo('data/8revs.mp4'); 
  video9 = createVideo('data/9forw.mp4'); 
  video9rev = createVideo('data/9revs.mp4'); 
  video10 = createVideo('data/10forw.mp4'); 
  video10rev = createVideo('data/10revs.mp4'); 
  video11 = createVideo('data/11forw.mp4'); 
  video11rev = createVideo('data/11revs.mp4'); 
  video12 = createVideo('data/12forw.mp4'); 
  video12rev = createVideo('data/12revs.mp4'); 
  video13 = createVideo('data/13forw.mp4'); 
  video13rev = createVideo('data/13revs.mp4'); 
  video14 = createVideo('data/14forw.mp4'); 
  video14rev = createVideo('data/14revs.mp4'); 
  video15 = createVideo('data/15forw.mp4'); 
  video15rev = createVideo('data/15revs.mp4');
  
  //hide all the video files by default video shows up in separate dom element. hide it and draw it to the canvas instead
  video1.hide(); 
  video1rev.hide(); 
  video2.hide(); 
  video2rev.hide(); 
  video3.hide(); 
  video3rev.hide(); 
  video4.hide(); 
  video4rev.hide(); 
  video5.hide(); 
  video5rev.hide(); 
  video6.hide(); 
  video6rev.hide(); 
  video7.hide(); 
  video7rev.hide(); 
  video8.hide(); 
  video8rev.hide(); 
  video9.hide(); 
  video9rev.hide(); 
  video10.hide(); 
  video10rev.hide(); 
  video11.hide(); 
  video11rev.hide(); 
  video12.hide(); 
  video12rev.hide(); 
  video13.hide(); 
  video13rev.hide(); 
  video14.hide(); 
  video14rev.hide(); 
  video15.hide(); 
  video15rev.hide(); 

}

function draw() {

  
 if (pageturn == 0){  
   image(instructions, 0, 0);
 } else if (pageturn == 2){  image(video1, 0, 0); // draw the video frame to canvas    
 }else if (pageturn == 4){image(video2, 0, 0); // draw the video frame to canvas 
 }else if (pageturn == 6){image(video3, 0, 0); 
 }else if (pageturn == 8){image(video4, 0, 0); 
 }else if (pageturn == 10){image(video5, 0, 0); 
 }else if (pageturn == 12){image(video6, 0, 0); 
 }else if (pageturn == 14){image(video7, 0, 0); 
 }else if (pageturn == 16){image(video8, 0, 0); 
 }else if (pageturn == 18){image(video9, 0, 0); 
 }else if (pageturn == 20){image(video10, 0, 0); 
 }else if (pageturn == 22){image(video11, 0, 0); 
 }else if (pageturn == 24){image(video12, 0, 0); 
 }else if (pageturn == 26){image(video13, 0, 0); 
 }else if (pageturn == 28){image(video14, 0, 0); 
 }else if (pageturn == 30){image(video15, 0, 0); 
 
 }else if (pageturn == 1){ image(video1rev, 0, 0); // draw the video frame to canvas 
 }else if (pageturn == 3){image(video2rev, 0, 0); // draw the video frame to canvas  
 }else if (pageturn == 5){image(video3rev, 0, 0); 
 }else if (pageturn == 7){image(video4rev, 0, 0); 
 }else if (pageturn == 9){image(video5rev, 0, 0); 
 }else if (pageturn == 11){image(video6rev, 0, 0); 
 }else if (pageturn == 13){image(video7rev, 0, 0); 
 }else if (pageturn == 15){image(video8rev, 0, 0); 
 }else if (pageturn == 17){image(video9rev, 0, 0); 
 }else if (pageturn == 19){image(video10rev, 0, 0); 
 }else if (pageturn == 21){image(video11rev, 0, 0); 
 }else if (pageturn == 23){image(video12rev, 0, 0); 
 }else if (pageturn == 25){image(video13rev, 0, 0); 
 }else if (pageturn == 27){image(video14rev, 0, 0); 
 }else if (pageturn == 29){image(video15rev, 0, 0); 
}

  // text for the buttons 
  textSize(50);
  if(linksindex != 0 ){
  text("Read",140,575);
  text("Issue",140,630);
  }
  if(linksindex != 0 || pageturn == 2 || pageturn == 1){
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
     pageturn = 2; // what page transition 
     direction = 1; //page index
     linksindex = linksindex + 1; // links to pdf array
   }else if (mouseX >360 && mouseY <500 && direction == 1){
     video2.play(); 
     pageturn = 4;// what page transition 
     direction = 2;//page index
     linksindex = linksindex + 1; // links to pdf array
    }else if (mouseX >360 && mouseY <500 && direction == 2){
     video3.play(); // runs video file
     pageturn = 6;// what page transition 
     direction = 3;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 3){
     video4.play(); // runs video file
     pageturn = 8;// what page transition 
     direction = 4;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 4){
     video5.play(); // runs video file
     pageturn = 10;// what page transition 
     direction = 5;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 5){
     video6.play(); // runs video file
     pageturn = 12;// what page transition 
     direction = 6;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 6){
     video7.play(); // runs video file
     pageturn = 14;// what page transition 
     direction = 7;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 7){
     video8.play(); // runs video file
     pageturn = 16;// what page transition 
     direction = 8;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 8){
     video9.play(); // runs video file
     pageturn = 18;// what page transition 
     direction = 9;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 9){
     video10.play(); // runs video file
     pageturn = 20;// what page transition 
     direction = 10;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 10){
     video11.play(); // runs video file
     pageturn = 22;// what page transition 
     direction = 11;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 11){
     video12.play(); // runs video file
     pageturn = 24;// what page transition 
     direction = 12;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 12){
     video13.play(); // runs video file
     pageturn = 26;// what page transition 
     direction = 13;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 13){
     video14.play(); // runs video file
     pageturn = 28;// what page transition 
     direction = 14;//page index
     linksindex = linksindex + 1; // links to pdf array
     }else if (mouseX >360 && mouseY <500 && direction == 14){
     video15.play(); // runs video file
     pageturn = 30;// what page transition 
     direction = 15;//page index
     linksindex = linksindex + 1; // links to pdf array
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
   //untested
   else if  (mouseX <= 360 && mouseY <500  && direction == 3){ 
  video3rev.play(); 
  direction = 2; 
  pageturn = 5; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 4){ 
  video4rev.play(); 
  direction = 3; 
  pageturn = 7; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 5){ 
  video5rev.play(); 
  direction = 4; 
  pageturn = 9; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 6){ 
  video6rev.play(); 
  direction = 5; 
  pageturn = 11; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 7){ 
  video7rev.play(); 
  direction = 6; 
  pageturn = 13; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 8){ 
  video8rev.play(); 
  direction = 7; 
  pageturn = 15; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 9){ 
  video9rev.play(); 
  direction = 8; 
  pageturn = 17; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 10){ 
  video10rev.play(); 
  direction = 9; 
  pageturn = 19; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 11){ 
  video11rev.play(); 
  direction = 10; 
  pageturn = 21; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 12){ 
  video12rev.play(); 
  direction = 11; 
  pageturn = 23; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 13){ 
  video13rev.play(); 
  direction = 12; 
  pageturn = 25; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 14){ 
  video14rev.play(); 
  direction = 13; 
  pageturn = 27; 
  linksindex = linksindex - 1; 
}else if  (mouseX <= 360 && mouseY <500  && direction == 15){ 
  video15rev.play(); 
  direction = 14; 
  pageturn = 29; 
  linksindex = linksindex - 1; 
}
    

}
   if(mouseX > 200 && mouseX < 720 && mouseY > 615 && mouseY < 691 && pageturn == 0){ //display first video image holder. 
  pageturn = 2;
  image(firstvidstill, 0, 0);
  
  }

}// end of mouse pressed
