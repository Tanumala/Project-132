Status = "";
AC_image = "";

function preload()
{
    AC_image = loadImage("ac.jpg")
}

function setup()
{
    canvas = createCanvas(640,350);
    canvas.position(450,200);
    document.getElementById("status").innerHTML = "Status :- Detecting Objects";
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded()
{
    console.log("Model is Loaded");
    Status = "true";
    object_detector.detect(AC_image,gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
      console.log(error);
    }
    else
    {
      console.log(results);
    }
}

function draw()
{
    image(AC_image,0,0,640,350);
}