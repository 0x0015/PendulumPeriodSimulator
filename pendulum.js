
var Length = 1.0;
var g = 9.81;
var Period = 0.0;
var pi = 3.141592653589;
var time = 0.0;


function computePeriod(){
	Period = 2.0 * pi * sqrt(Length / g);
}

function setLength(){
	var elm = document.getElementById("LengthInput");
	Length = elm.value;
	computePeriod();
}

function setup(){
	createCanvas(400, 400);
	strokeWeight(4);
	textSize(20);
	frameRate(60);
	computePeriod();
}

function draw(){
	background(200);
	time += deltaTime/1000;
	while(time >= Period){
		time -= Period;
	}
	var currentPpos = (time/Period) * 2 * pi;
	//console.log(currentPpos, time, time/Period);
	var xpos = cos(currentPpos);
	var r_xpos = 200 + xpos * 100;
	var r_ypos = 300 - cos((time/Period) * 4 * pi) * 5;//janky hack to simulate it having constant length.
	line(200, 0, r_xpos, r_ypos);

	var str = "Length: " + Length + "m\nPeriod: " + Period.toFixed(3) + "s";
	text(str, 20, 350);
}
