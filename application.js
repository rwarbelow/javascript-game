$( document ).ready(function() {

	$('.block').css('background-color', getRandomColor)
	$('.block').each(function(){
		var randNumber = getRandomNumber();
		$(this).append('<p class="large-text">' + randNumber + '</p>');
	});

	$('.block').click(function(){
		changeClass($(this));
	});

	$('.block').click(function(){
		if ($('.isSelected').length == 2){
			total = findTotal();
			if (total == 100){
				winningScreen();
			};
			reloadBoard(total);
		}
	});

	
});

var multiply_by = [-1,1]

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
	return (multiply_by[Math.round(Math.random())] * Math.floor(Math.random() * 20) + 1);
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

