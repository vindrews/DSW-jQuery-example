$(document).ready(function() {
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
		
	$("#p1").click(function(){
		$(".disappear").toggle();
	});
	
	$("#boat").mouseenter(function(){
		alert("Good job! You successfully toggled the sailboat and moved your cursor over it!");
	});

	$("#boat").mouseleave(function(){
		alert("Even better job! You moved your cursor away from the image to close that alert!");
	});
});
