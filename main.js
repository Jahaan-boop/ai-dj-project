song1 = "";
song2 = "";
lx=0;
ly=0;
rx=0;
ry=0;

function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
posenet.on("pose", gotposes);
    }

    function draw(){
        image(video, 0,0,600,500)
        }

        function modelloaded(){
            console.log('"PoseNet Is Initialized!"');
            }

            function gotposes(results){
                if(results.length>0){
                console.log(results);
                lx=results[0].pose.leftWrist.x;
                rx=results[0].pose.rightWrist.x;
                ly=results[0].pose.leftWrist.y;
                ry=results[0].pose.rightWrist.y;
                console.log("leftwristx="+lx);
                console.log("rightwristx="+rx);
                console.log("leftwristy="+ly);
                console.log("rightwristx="+ry);
                }
                }