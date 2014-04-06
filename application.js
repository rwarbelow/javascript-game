$( document ).ready(function() {
	$('.block').css('background-color', getRandomColor);
	// $('.block').append('<h1>' + getRandomNumber() + '</h1>');
	$(".block").each(function(){
		var randNumber = getRandomNumber();
		$(this).append('<h1>' + getRandomNumber() + '</h1>');
	});
});

var numbers = [1,2,3,4,5];
function getRandomNumber(){
	return numbers[Math.floor(Math.random() * numbers.length)];
}
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}
