$(document).ready(function() {

$("#knopka6").click(function(){ 
$("#zakaz12").addClass("hide") 
$("#zakaz3").addClass("hide") 
$("#zakaz6").removeClass("hide") 
}); 

$("#no-thanks-one").click(function(){ 
$("#zakaz3").removeClass("hide") 
$("#zakaz12").addClass("hide") 
$("#zakaz6").addClass("hide") 
}); 

$("#knopka12").click(function(){ 
$("#zakaz6").addClass("hide") 
$("#zakaz3").addClass("hide") 
$("#zakaz12").removeClass("hide") 
});
 	jQuery(function($){
	   $('input[type=tel]').mask("+(380) 99 999 9999 ",{autoclear: true});
	});

	$(document).on('click' , '#no-thanks-one', function (event) {
       event.preventDefault();
       $(".modal").modal('hide');
	   $("#zayavka-159-one").modal('show');
     });

	$(document).on('click' , '#no-thanks-two', function (event) {
       event.preventDefault();
       $(".modal").modal('hide');
	   $("#zayavka-129-one-product").modal('show');
     });

    $(document).on('click' , '.buy-first', function (event) {
       event.preventDefault();
	   $(".modal").modal('hide');
	   $("#zayavka").modal('show');
     });

    $(document).on('click' , '.buy-second', function (event) {
       event.preventDefault();
	   $(".modal").modal('hide');
	   $("#zayavka-two").modal('show');
     });

    $(document).on('click' , '.buy-129-one', function (event) {
       event.preventDefault();
	   $(".modal").modal('hide');
	   $("#zayavka-129-one").modal('show');
     });
    $(document).on('click' , '.buy-129-two', function (event) {
       event.preventDefault();
	   $(".modal").modal('hide');
	   $("#zayavka-129-two").modal('show');
     });

    $(document).on('click' , '.pay-6-online-popup', function (event) {
       event.preventDefault();
       $(".modal").modal('hide');
       $("#modal-chanse-offline").modal('show');
     });
    $(document).on('click' , '.pay-10-online-popup', function (event) {
       event.preventDefault();
       $(".modal").modal('hide');
       $("#modal-chanse-offline").modal('show');
     });
    $(document).on('click' , '#no-tnahks-submit', function (event) {
       event.preventDefault();
       
     });

var data_set;

    //Отправка форы заявки
    $(".form-zayavka").on("submit", function (e) {//устанавливаем событие отправки для формы с id=form
    	e.preventDefault(); 
            var form_data = $(this).serialize(); //собераем все данные из формы
            var s=$(this);
            data_set=form_data;

          if ($(s).find('input[name=upsell]').val()=='1') {

                   $(".modal").modal('hide');

                  $("#modal-upsell").modal('show');

            } else {


            $.ajax({
            type: "POST", //Метод отправки
            url: "send-feedback.php", //путь до php фаила отправителя
            data: form_data,
	            success: function() {
	            	$(".modal").modal('hide');
	            	window.location.href = "thanks.html";
	            	if ($(s).find('input[name=redirect5]').val()=='1') {
                       try { fbq('track', 'Lead'); } catch (err) {}
	            		window.location.href = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTk0MTYxNzI0NjgzIiwiYW1vdW50IjoiNTQwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCR0L7QvNCx0L7Rh9C60Lgg0YEg0LrQvtC70YzRhtC+0LwsIDbRiNGCIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUifQ==&signature=Stdt7HuBjPs3J+WNw/syuUuhlb0=";
	            	} else {
	            	window.location.href = "thanks.html";
	            	}
	            	$('.form-zayavka')[0].reset();
	                   //код в этом блоке выполняется при успешной отправке сообщения
	            }});

          }
    });


  $(document).on('click' , '#no-thanks-upsell', function (event) {
       event.preventDefault();
       var s=$(this);
            $.ajax({
            type: "POST", //Метод отправки
            url: "send-feedback.php", //путь до php фаила отправителя
            data: data_set,
              success: function() {
                $(".modal").modal('hide');
                try { fbq('track', 'Lead'); } catch (err) {}
                window.location.href = "thanks.html";
                // window.location.href = $(s).data('url');
                $('.form-zayavka')[0].reset();
              }});


 });


  $(document).on('click' , '.buy-upsell', function (event) {
          event.preventDefault();
          var s=$(this);
            $.ajax({
            type: "POST", //Метод отправки
            url: "send-feedback.php", //путь до php фаила отправителя
            data: data_set+"&new_price="+ encodeURIComponent($(s).data('price'))+"&new_count="+ encodeURIComponent($(s).data('count')),
              success: function() {
                $(".modal").modal('hide');
                try { fbq('track', 'Lead'); } catch (err) {}
                window.location.href = $(s).data('url');
                $('.form-zayavka')[0].reset();
              }});


 });





    $(".form-zayavka-ten").on("submit", function (e) {//устанавливаем событие отправки для формы с id=form
    	e.preventDefault(); 
            var form_data = $(this).serialize(); //собераем все данные из формы
            var s=$(this);
            $.ajax({
            type: "POST", //Метод отправки
            url: "send-feedback.php", //путь до php фаила отправителя
            data: form_data,
	            success: function() {
	            	$(".modal").modal('hide');
	            	if ($(s).find('input[name=redirect10]').val()=='1') {
                         try { fbq('track', 'Lead'); } catch (err) {}
	            		window.location.href = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTk0MTYxNzI0NjgzIiwiYW1vdW50IjoiODkwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCR0L7QvNCx0L7Rh9C60Lgg0YEg0LrQvtC70YzRhtC+0LwsIDEy0YjRgiIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1In0=&signature=I2nbH33G0tpfLzPkj8Z9boYjmMI=";
	            	} else {
	            	window.location.href = "thanks.html";
	            	}
	            	$('.form-zayavka')[0].reset();
	                   //код в этом блоке выполняется при успешной отправке сообщения
	            }});
    });

    $(".form-zayavka-one-order").on("submit", function (e) {//устанавливаем событие отправки для формы с id=form
    	e.preventDefault(); 
            var form_data = $(this).serialize(); //собераем все данные из формы
            var s=$(this);
            $.ajax({
            type: "POST", //Метод отправки
            url: "send-feedback.php", //путь до php фаила отправителя
            data: form_data,
	            success: function() {
	            	$(".modal").modal('hide');
	            	if ($(s).find('input[name=redirect1]').val()=='1') {
                  try { fbq('track', 'Lead'); } catch (err) {}
	            		window.location.href = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTk0MTYxNzI0NjgzIiwiYW1vdW50IjoiMzUwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCR0L7QvNCx0L7Rh9C60Lgg0YEg0LrQvtC70YzRhtC+0LwsIDPRiNGCIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUifQ==&signature=kTUGuD+9/LNiuWoBOam1uAj4pWE=";
	            	} else {
	            	window.location.href = "thanks.html";
	            	}
	            	$('.form-zayavka')[0].reset();
	                   //код в этом блоке выполняется при успешной отправке сообщения
	            }});
    });





});


  var namekey = ['utm_source','utm_campaign','utm_medium','utm_term','utm_content'], //Ключи какие будем парсить 
      div_class = 'form', // Куда будем выводить результат 
      input_hide = 'hidden'; //hidden 




function parseGET(url){ 
  if(!url || url == '') url = decodeURI(document.location.search); 
  if(url.indexOf('?') < 0) return Array(); 

  url = url.split('?'); 
  url = url[1]; 

  var GET = [], 
      params = [], 
      key = []; 

  if(url.indexOf('#')!=-1){ url = url.substr(0,url.indexOf('#')); } 
  if(url.indexOf('&') > -1){ params = url.split('&');} else {params[0] = url; } 

  for (r=0; r<params.length; r++){ 
    for (z=0; z<namekey.length; z++){ 
      if(params[r].indexOf(namekey[z]+'=') > -1){ 
        if(params[r].indexOf('=') > -1) { 
          key = params[r].split('='); 
          GET[key[0]]=key[1]; 
        } 
      } 
    } 
  } 
  return (GET); 
}; 

function input(){ 

  var $_GET = parseGET(); 

  for(z=0; z<namekey.length; z++){ 
    if(!!$_GET[namekey[z]]){ 
      $(div_class).append('<input name="'+namekey[z]+'" type="'+input_hide+'" value="'+$_GET[namekey[z]]+'">'); 
    } 
  } 

  $(div_class).append('<input name="refer" type="'+input_hide+'" value="'+refer+'">'); 
}








