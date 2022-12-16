difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 400);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#d1d1d1");
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses (results){
     if(results.length > 0)
     {
        console.log(results);
     }
}

function draw(){
    background('#fcba03');
    fill('#eb4034');
    textSize(difference);
    text('swapnil', 30,300)
}

function gotPoses(results){
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}