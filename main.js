

function setup(){
    canvas = createCanvas(480,500);
    console.log(canvas.width)
    video =  createCapture(VIDEO);
    canvas.position(800,100);
    posenet = ml5.poseNet(video , modelloded);
    posenet.on("pose",gotposes);
}

function draw(){
    background("grey")
}

function modelloded(){
    console.log("modelloded")
}

function gotposes(result){
    if(result.length > 0 ){
        console.log(result);
    }
}