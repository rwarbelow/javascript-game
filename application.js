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
			if ($('.isSelected').length == 2){
				total = findTotal();
				if (total == 100){
					winningScreen();
				};
				reloadBoard(total);
			}
		}
	});
});

var WINNING_NUMBER = 100;
var numbers = [2,4,8,10,12,13,19];

function findTotal(){
	var toAdd = []
	$('.isSelected').each(function(){
		toAdd.push($(this).text())
	});
	var total = 0;
	jQuery.each( toAdd, function( i, val ) {
		total += parseInt(val);
	});
	return total;
}

function getRandomNumber(){
	return numbers[Math.floor(Math.random() * 7)];
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

function reloadBoard(total){
	$('.isSelected').eq(1).html('<p class="large-text">' + total + '</p>');
	$('.block:not(".isSelected")').each(function(){
		$(this).html('<p class="large-text">' + getRandomNumber() + '</p>')
	});
	removeSelected($('.isSelected'));
}

function winningScreen(){
	$('.container').html('<div style="text-align:center"><p class="won">You Won!</p></div>')
};

