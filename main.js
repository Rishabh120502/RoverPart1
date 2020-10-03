canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add(){
background_imgTag=new Image();
background_imgTag.onload=Upload_background;
background_imgTag.src=background_image;
rover_imgTag=new Image();
rover_imgTag.onload=Upload_rover;
rover_imgTag.src=rover_image;
}
function Upload_background(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function Upload_rover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPress=e.keyCode;
console.log(keyPress);
if(keyPress=="38"){
    //up();
    console.log("up");
}
if(keyPress=="40"){
    //down();
    console.log("down");
}
if(keyPress=="37"){
    //left();
    console.log("left");
}
if(keyPress=="39"){
    //right();
    console.log("right");
}
}