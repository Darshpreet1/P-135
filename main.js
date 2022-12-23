

function setup(){
    canvas = createCanvas(480,500);
    video =  createCapture(VIDEO);
    canvas.position(800,100);
    posenet = ml5.poseNet(video , modelloded);
    posenet.on("pose",gotposes);
}



function modelloded(){
    console.log("modelloded")
}

function gotposes(result){
    if(result.length > 0 ){
        console.log(result);
    }
}