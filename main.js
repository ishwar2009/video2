coco="";


function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  
  }
  function start()
{
 coco = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}