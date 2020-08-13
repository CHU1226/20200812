$(document).ready(function() {
	$('.logon').click(function(){
		$('form#reg').fadeOut();
		$('#product-list').fadeOut();
		$('form#log').fadeIn();
		return false
	});
	$('.close2').click(function(){
		$('.log-form').fadeOut();
	});
	$('.reg').click(function(){
		$('form#log').fadeOut();
		$('#product-list').fadeOut();
		$('form#reg').fadeIn();
		return false
	});
	$('.eve-btn').click(function(){
		$('#product-list').fadeOut();
		$('form#join').fadeIn();
		return false
	});
	$('#read').click(function(){
		alert("訂閱成功")
	});
	$('#cart').click(function(){
		$('form#log').fadeOut();
		$('form#reg').fadeOut();
		$('#product-list').fadeIn();
	})
	$('.add').click(function(){
		alert('成功加入購物車');
	});
	$('.log-chk,.social').click(function(){
		alert("目前尚無網路請稍後再試");
	});
	$('.event-box').click(function(){
		$('.event-main').addClass('anijump')
	});
	$('.event-main').hide();
	$('.event-main:first').show();
	$('.event-box').click(function(){
		$('.event-main').hide();
		var checked = $(this).attr("href");
		$(checked).show();
		return false
	});
	$('.tab').hide();
	$('.tab:first').show();
	$('.list-btn,.block img').click(function(){
		$('.tab').hide();
		var active = $(this).attr("href");
		$(active).show();
	});
	$('#checkout').click(function(){
		alert('請先登入會員');
	});
	$('.contact-btn').click(function(){
		alert('表單已送出');
	});
});
var blockContainer = document.querySelector(".block-container");
var blocks = Array.from(document.querySelectorAll(".block"));
var isMouseOnBlock = false;
var leftPositions = blocks.map((block, i) => i * 250);

blockContainer.onmouseover = e => isMouseOnBlock = true;
blockContainer.onmouseout = e => isMouseOnBlock = false;

setInterval(function () {
    leftPositions.forEach((leftPosition, i) => blocks[i].style.left = leftPosition + "px");

    if (!isMouseOnBlock) {
        leftPositions = leftPositions.map(leftPosition => {
            leftPosition--;

            if (leftPosition == -250) {
                leftPosition = (blocks.length - 1) * 250;
            }

            return leftPosition;
        });
    }
}, 10);
