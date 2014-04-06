$( document ).ready(function() {
	setGameBoard();
	$('.active').click(function(){
		playGame(this);
	});
	$(".container").on('click', '.play-again', function() {
		location.reload();
	});
});


var multiply_by = [-1,1]
var clicks = 30
var fifties = 0

function checkLoss(total){
	if (clicks == 0 && total != 50){
		losingScreen();
	};
};

function checkWin(){
	if (fifties == 3){
		winningScreen();
	}
};

function setGameBoard(){
	$('.score').html('<p class="score-heading">' + clicks + '</p>');
	$('.active').each(function(){
		$(this).append('<p class="large-text">' + getRandomNumber() + '</p>');
		$(this).css('background-color', '#3498db')
	});
};

function playGame(block){
	changeClass(block);
	if ($('.isSelected').length == 2){
		updateScore();
		total = findTotal();
		checkFifties(total);
		reloadBoard(total);
	}
};

function checkFifties(total){
	checkLoss(total);
	if (total == 50){
		fifties += 1
		lockTile();
		checkWin();
	};
};

function lockTile(){
	selected = $('.isSelected').eq(1)
	selected.html('<p class="large-text">50<br><img style="width:18px" src="star.png"></p>');
	selected.removeClass('active isSelected');
	selected.addClass('lock');
};

function reloadBoard(total){
	$('.isSelected:not(.lock)').eq(1).html('<p class="large-text">' + total + '</p>');
	$('.block:not(.isSelected, .lock)').each(function(){
		$(this).html('<p class="large-text">' + getRandomNumber() + '</p>')
	});
	removeSelected($('.isSelected'));
}

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

function updateScore(){
	clicks -= 1;
	$('.score').html('<p class="score-heading">' + clicks + '</p>');
};

function changeClass(item){
	if ($(item).hasClass('isSelected')) {
		$(item).removeClass('isSelected');
		$(item).css('background-color', '#3498db');
	}
	else if ($(item).hasClass('active')) {
		$(item).css('background-color',"")
		$(item).addClass('isSelected');
	}
}

function getRandomNumber(){
	return (multiply_by[Math.round(Math.random())] * Math.floor(Math.random() * 20) + 1);
}

function removeSelected(item){
	$(item).removeClass('isSelected');
	$(item).css('background-color', '#3498db');
}

function changeToSelected(item) {
	$(item).css('background-color',"")
	$(item).addClass('isSelected');
}

function winningScreen(){
	$('.container').html('<div style="text-align:center;margin: 0 auto"><p class="won">You Won!</p></div><div class="play-again"><img style="width:55px" src="star.png"><br><br>Play again</div>')
};

function losingScreen(){
	$('.container').html('<div style="text-align:center;"><div style="text-align:center;margin: 0 auto"><p class="lost">You lost :(</p><div class="play-again">Play again</div></div></div>')
};



