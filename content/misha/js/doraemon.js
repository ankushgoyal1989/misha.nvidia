var result = [];

$(window).keydown(function(event){
	var a = event.keyCode;
	result.push(a);
	print();
	
});


function print(){
		var something = 0;
		result.forEach(function(shadow){
			something += shadow;
		});
		if(something === 666){
			onSuccess();
		}
};


function onSuccess(){
	$("#video1").attr("src","video.mp4");
	$("#video2").attr("src","video.mp4");
	$("#myvideo")[0].load();
	$("#myvideo")[0].play();
}


