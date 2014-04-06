$( document ).ready(function() {
	$('.block').css('background-color', getRandomColor);
	$('.block').data("color", getRandomColor())
	$('.block').each(function(){
		var randNumber = getRandomNumber();
		$(this).append('<p class="large-text">' + randNumber + '</p>');
	});

	$('.block').click(function(){
		changeClass($(this));
	});
	$(document).keypress(function(e) {
		if(e.which == 13) {
			var selected = $('.isSelected').length;
			if (selected == 2){
				var toAdd = ($('.isSelected').text()).split('');
				var total = 0;
				jQuery.each( toAdd, function( i, val ) {
					total += parseInt(val);
				});
				alert(total);
			}
		}
	});

});

var WINNING_NUMBER = 100;
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

function changeToSelected(item) {
	$(item).css('background-color',"")
	$(item).addClass('isSelected');
}

function changeClass(item){
	if ($(item).hasClass('isSelected')) {
		removeSelected($(item));
	} 
	else {
		changeToSelected($(item));
	}
}
