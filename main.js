song1 = "";
song2 = "";
peterpan = "";
harrypotter = "";
lx=0;
ly=0;
ls=0;
rx=0;
ry=0;
rs=0;

function preload(){
song1=loadSound("music.mp3");//harry potter
song2=loadSound("music2.mp3");//peter pan
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

        peterpan=song2.isPlaying();
        console.log(peterpan);

        fill("red");
        stroke("black");


        if(ls > 0.2){
        circle(lx,ly,20);
        song1.stop();
        if(peterpan == false){
        song2.play();
        document.getElementById("song").innerHTML="Song Name: Peter Pan Theme Song";
        }
        }

       harrypotter=song1.isPlaying();
        console.log(harrypotter);

        if(rs > 0.2){
        circle(rx,ry,20);
        song2.stop();
        if(harrypotter == false){
        song1.play();
        document.getElementById("song").innerHTML="Song Name: Harry Potter Theme Song";
        }
        }
        }

        function modelloaded(){
            console.log('"PoseNet Is Initialized!"');
            }

            function gotposes(results){
                if(results.length>0){
                console.log(results);
                lx=results[0].pose.leftWrist.x;
                ly=results[0].pose.leftWrist.y;
                ls=results[0].pose.keypoints[9].score;
                rx=results[0].pose.rightWrist.x;
                ry=results[0].pose.rightWrist.y;
                rs=results[0].pose.keypoints[10].score;
                console.log("leftwristx="+lx);
                console.log("leftwristy="+ly);
                console.log("leftwristscore="+ls);
                console.log("rightwristx="+rx);
                console.log("rightwristx="+ry);
                console.log("rightwristscore="+rs);
                }
                }