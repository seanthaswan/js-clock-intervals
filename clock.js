var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");


//TRYING BONUS
var currentDate = new Date();
var seconds = currentDate.getSeconds();
var minutes = currentDate.getMinutes();
var hours = currentDate.getHours();





// var displayTime = function() {}
var secondRotation = function(){
// seconds++;
var secondDegrees = (seconds/60)*360;
second.style.transform = "rotate(" + secondDegrees + "deg)";
};
var minuteRotation = function(){
// minutes++;
var minuteDegrees = (minutes/60)*360;
minute.style.transform = "rotate(" + minuteDegrees + "deg)";
};
var hourRotation = function(){
// hours++;
var hourDegrees = (hours/60)*12;
hour.style.transform = "rotate(" + hourDegrees + "deg)";
};
// setInterval(secondRotation, 1000);
// setInterval(minuteRotation, 60000);
// setInterval(hourRotation, 360000);

// };


var checkCurrentTime = function(){
	currentDate = new Date();
	seconds = currentDate.getSeconds();
	minutes = currentDate.getMinutes();
	hours = currentDate.getHours();
	secondRotation();
	minuteRotation();
	hourRotation();
}

setInterval(checkCurrentTime, 1000);
