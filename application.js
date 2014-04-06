$( document ).ready(function() {
	$('.block').css('background-color', getRandomColor);
	$('.block').data("color", getRandomColor())
	$(".block").each(function(){
		var randNumber = getRandomNumber();
		$(this).append('<p class="large-text">' + randNumber + '</p>');
	});

	$('.block').click(function(){
		if ($(this).hasClass('isSelected')) {
			removeSelected($(this));
		} 
		else {
			select($(this));
		}

	});
});


var numbers = [1,2,3,4,5];
function getRandomNumber(){
	return numbers[Math.floor(Math.random() * numbers.length)];
}
function getRandomColor() {
	var letters = '0123456'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 6)];
	}
	return color;
}

function removeSelected(item){
	$(item).removeClass('isSelected');
	$(item).css('background-color', getRandomColor());
}

function select(item) {
	$(item).css('background-color',"")
	$(item).addClass('isSelected');
}
