var video=document.getElementById("player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});





document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	
});


document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();





});



document.querySelector("#faster").addEventListener("click", function(){
	console.log("Playback speed is ");
	video.playbackRate /=0.95;
	console.log(video.playbackRate)

});



document.querySelector("#slower").addEventListener("click", function(){
	console.log("Playback speed is ");
	video.playbackRate *=0.95;
	console.log(video.playbackRate)

});



document.querySelector("#skip").addEventListener("click",function(){
	console.log("Jumped ahead");
	video.currentTime *=5;
	console.log(video.currentTime)



});


document.querySelector("#slider").addEventListener("change",function(){
	console.log("In slider");
	console.log(this.value);
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=this.value+"%"



});



document.querySelector("#mute").addEventListener("click", function(){
	console.log("video muted");
	
	console.log(video.muted);


	if (video.muted==false) {
		video.muted=true
		this.innerHTML="Unmute"
	  } else {
		video.muted=false
		this.innerHTML="Mute"
	  }


	  console.log(video.muted);

});



