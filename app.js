$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Did he really say this?!</button>");
//3. When button pressed
$("button").click(function(){
	//3.1. Show spoiler next to button clicked
	$(this).prev().show();
	//3.2. Get rid of button
	$(this).remove();
});