

// if(location.search=='?step=1'){
// 	$('.basic').fadeOut(0);
//     $('.nextblock').fadeIn(300);
//     $('.fadesxs3').fadeIn(300);
//     $('.overlay').addClass('filter');
//     $('.row .width').fadeOut(0);

// 	function printNumbersInterval(){
// 		var i=20000;
// 		var timerId = setInterval(
// 			function(){
// 				$('.discount-total-count').text(i+" руб.");
// 				if(i==0){
// 					clearInterval(timerId);
// 				}
// 				i=i-200;
// 				function func(){
// 					$('.discount-total-count').removeClass('animated flash');
// 				}
// 				setTimeout(func,500);
// 				function func2(){
// 					$('.discount-total-count').addClass('animated flash');
// 				}
// 				setTimeout(func2,1000);
// 			},1000
// 		);
// 	}

// 	printNumbersInterval();

// }

$(function(){

	
	
	$('.contactform1').submit(function() { 
	  if ( $(this).validationEngine('validate') ) {
	      $(this).ajaxSubmit();
	      $(this).clearForm();
	      var multyname = $(this).find('input[name="name"]').val();
	      if(multyname > 1){
	      	$('#myModal5').find('.multyname').text(',' + multyname);
	      }
		  $('.modal').modal('hide');   
		  
		  $('#myModal5').modal('show');
		  goal();
	  }
	  return false;
	}); 


	function goal(){
		setTimeout('yaCounter51281299.reachGoal("order")', 1000);
	}




	$.each($('.minconf span.textbtn'), function(index, val) {
        $(val).text($(val).closest('form').find('button, input[type="submit"]').text());
    });

	$('.contactform_q').submit(function() { 

	  if ( $(this).validationEngine('validate') ) {
	  	  $('input[name="select"]').val($('.selectpicker').val());

	      $(this).ajaxSubmit();
	      
	      $(this).clearForm();
	      $('.modal').modal('hide');   
	      $('#myModal5').modal('show');
	      goal();
	  }
	  return false;
	}); 



	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	  var msViewportStyle = document.createElement('style')
	  msViewportStyle.appendChild(
	    document.createTextNode(
	      '@-ms-viewport{width:auto!important}'
	    )
	  )
	  document.querySelector('head').appendChild(msViewportStyle)
	}

	var q1,q2,q3,q4,q5,q6;

	$(".callback_next").on("click", function(){
	    $('.basic').fadeOut(0);
	    $('.nextblock').fadeIn(300);
	    $('.fadesxs3').fadeIn(300);
	    $('.overlay').addClass('filter');
	    $('.row .width').fadeOut(0);

		// function printNumbersInterval(){
		// 	var i=20000;
		// 	var timerId = setInterval(
		// 		function(){
		// 			$('.discount-total-count').text(i+" руб.");
		// 			if(i==0){
		// 				clearInterval(timerId);
		// 			}
		// 			i=i-200;
		// 			function func(){
		// 				$('.discount-total-count').removeClass('animated flash');
		// 			}
		// 			setTimeout(func,500);
		// 			function func2(){
		// 				$('.discount-total-count').addClass('animated flash');
		// 			}
		// 			setTimeout(func2,1000);
		// 		},1000
		// 	);
		// }
	
		// printNumbersInterval();


	});


	$('.selectpicker').selectpicker();


	var f1,f2,f3,f4;
	f2 = 0;
	f3 = 0;
	f4 = 0;

	$('label').click(function(event) {
		$("label").removeClass("onnn");
		$(this).toggleClass("onnn");
		
		$(this).closest('.block').find('button.mybtn_white').fadeIn(300).addClass('blockbtn');
	});



	$(".nexts2").on("click", function(){
	    $('.fades2').fadeOut(0);
	    $('.fades3').fadeIn(300);
	    q1 = $(this).find('.div').data('s');
        $('input[name="step1"]').val(q1);
        console.log(q1);
        

	});

	$(".nexts3").on("click", function(){
	    $('.fades3').fadeOut(0);
	    $('.fades4').fadeIn(300);
	    q2 = $(this).find('.div').data('s');
        $('input[name="step2"]').val(q2);
        console.log(q2);
        

	});

	$(".nexts4").on("click", function(){
	    $('.fades4').fadeOut(0);
	    $('.fades5').fadeIn(300);
	    q3 = $(this).find('.div').data('s');
        $('input[name="step3"]').val(q3);
        console.log(q3);
        

	});
 
	$(".nexts5").on("click", function(){
	    $('.fades5').fadeOut(0);
	    $('.fades6').fadeIn(300);
	    q4 = $(this).find('.div').data('s');
        $('input[name="step4"]').val(q4);
        console.log(q4);

        
	});

	$(".nexts6").on("click", function(){
	    $('.fades6').fadeOut(0);
	    $('.fades7').fadeIn(300);
	    q5 = $(this).find('.div').data('s');
        $('input[name="step5"]').val(q5);
        console.log(q5);

         
	});

	var summas;

	$(".nexts7").on("click", function(){
	    $('.fades6').fadeOut(0);
	    $('.fadesxs3').fadeOut(0);
	    $('.fades9').fadeIn(300);


	    $.each($('.fades6 i.fa.fa-check'), function(index, val) {
	    	q6 =  $(val).closest('.div').data('s') + '. ' + q6;
	    });
	    q6 = q6.split('undefined');
	    q6 = q6[0];
            $('input[name=step6]').val(q6);
	    console.log(q6);

        
	});



});