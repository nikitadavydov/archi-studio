$('.hide').eq(0).hover(
function(){
  $('.hide').eq(0).css('opacity','1')
},
function(){
  $('.hide').eq(0).css('opacity','0')
});
$('.hide').eq(1).hover(
function(){
  $('.hide').eq(1).css('opacity','1')
},
function(){
  $('.hide').eq(1).css('opacity','0')
});
$('.hide').eq(2).hover(
function(){
  $('.hide').eq(2).css('opacity','1')
},
function(){
  $('.hide').eq(2).css('opacity','0')
});
$('.hide').eq(3).hover(
function(){
  $('.hide').eq(3).css('opacity','1')
},
function(){
  $('.hide').eq(3).css('opacity','0')
});
$('.hide').eq(4).hover(
function(){
  $('.hide').eq(4).css('opacity','1')
},
function(){
  $('.hide').eq(4).css('opacity','0')
});
$('.hide').eq(5).hover(
function(){
  $('.hide').eq(5).css('opacity','1')
},
function(){
  $('.hide').eq(5).css('opacity','0')
});

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});