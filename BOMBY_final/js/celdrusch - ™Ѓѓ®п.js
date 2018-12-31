$(document).ready(function() {

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

    //Отправка форы заявки
    $(".form-zayavka").on("submit", function (e) {//устанавливаем событие отправки для формы с id=form
    	e.preventDefault(); 
            var form_data = $(this).serialize(); //собераем все данные из формы
            var s=$(this);
            $.ajax({
            type: "POST", //Метод отправки
            url: "send-feedback.php", //путь до php фаила отправителя
            data: form_data,
	            success: function() {
	            	$(".modal").modal('hide');
	            	window.location.href = "thanks.html";
	            	if ($(s).find('input[name=redirect5]').val()=='1') {
                       try { fbq('track', 'Lead'); } catch (err) {}
	            		window.location.href = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTk0MTYxNzI0NjgzIiwiYW1vdW50IjoiNDk1IiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCR0L7QvNCx0L7Rh9C60LAg0YEg0LrQvtC70YzRhtC+0LwsIDXRiNGCIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUifQ==&signature=ull3BVUZ2CJlkG6sgGuJDDArdbU=";
	            	} else {
	            	window.location.href = "thanks.html";
	            	}
	            	$('.form-zayavka')[0].reset();
	                   //код в этом блоке выполняется при успешной отправке сообщения
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
	            		window.location.href = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTk0MTYxNzI0NjgzIiwiYW1vdW50IjoiODkwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCR0L7QvNCx0L7Rh9C60LAg0YEg0LrQvtC70YzRhtC+0LwsIDEw0YjRgiIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1In0=&signature=2P9S1kJ2DmTkf8aZb8JU8rV5+Kg=";
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
	            		window.location.href = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTk0MTYxNzI0NjgzIiwiYW1vdW50IjoiMTI5IiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCR0L7QvNCx0L7Rh9C60LAg0YEg0LrQvtC70YzRhtC+0LwsIDHRiNGCIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUifQ==&signature=K0ASH2JN6sM+7as0F9GunmoxD9A=";
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

$(document).ready(function (){ 
    input();
});


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








