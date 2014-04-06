$( document ).ready(function() {
	setGameBoard();
	$('.block').click(function(){
		changeClass($(this));
		playGame();
	});
	$(".container").on('click', '.play-again', function() {
		location.reload();
	});
});


var multiply_by = [-1,1]
var clicks = 10

function checkLoss(){
	if (clicks == 1){
		losingScreen();
	};
};

function setGameBoard(){
	$('.score').html('<p class="score-heading">' + clicks + '</p>');
	$('.block').each(function(){
		$(this).append('<p class="large-text">' + getRandomNumber() + '</p>');
		$(this).css('background-color', getRandomColor())
	});
};

function playGame(){
	if ($('.isSelected').length == 2){
		checkLoss();
		clicks -= 1;
		updateScore();
		total = findTotal();
		checkWin(total);
		reloadBoard(total);
	}
};

function checkWin(total){
	if (total == 50){
		winningScreen();
	};
};

function updateScore(){
	$('.score').html('<p class="score-heading">' + clicks + '</p>');
};

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
	$('.container').html('<div style="text-align:center"><p class="won">You Won!</p></div><div class="play-again">Play again</div>')
};

function losingScreen(){
	$('.container').html('<div style="text-align:center"><p class="lost">You lost :(</p></div><div class="play-again">Play again</div>')
};



