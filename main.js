img="";
Status = "";
object = [];
function preload(){
    img=loadImage("dog_cat.jpg");
}


function draw(){
    image(img,0,0,600,400);
   
        if(Status !=""){

            for(i=0; i<object.length; i++){

                document.getElementById("status").innerHTML = "Status = Objects Detected";
                percent = floor(object[i].confidence*100);
                fill("red");
                text(object[i].label + " " + percent + "%" , object[i].x +15 , object[i].y +15);
                noFill();
                stroke("red");
               rect(object[i].x  , object[i].y , object[i].width  , object[i].height);
            }
        }

    
    
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    Object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status Is Detecting Object";

}

function modelLoaded(){

    console.log("Model Is Loaded Sucessfully!");
    Status = true;
    Object_detector.detect(img,gotResult);

}

    function gotResult(error,results){

        if(error){

            console.log(error);
        }

        else{
            console.log(results);
            object = results;

        }
    }
