noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550,400);
    canvas.position(600,160);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw()
{
   background('#7B7B7B');
   document.getElementById("square_side").innerHTML = "Width and the Height of the square will be = " + difference + "px";
   fill('#004DFF');
   stroke('#004DFF');
   square(noseX , noseY , difference);
}
function modelLoaded()
{
    console.log("PoseNet Is Intitalized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("noseX = " + noseX + " noseY = " + noseY);

         rightwristX = results[0].pose.rightWrist.x;
         leftwristX = results[0].pose.leftWrist.x;

         difference = floor(leftwristX - rightwristX);

         console.log("leftwristX = " + leftwristX + " rightwristX = " + rightwristX + " Difference = " + difference);

    } 
}