$(document).ready(function() {
  var urlTraffic = 'http://uni'+'q.clin'+'icallive.com'

  var urlGET = function(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search));
    return (name === null) ? '' : decodeURIComponent(name[1]);
  }
  var extend = function(defaults, options) {
      var extended = {},
          prop;
      for (prop in defaults) {
          if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
              extended[prop] = defaults[prop];
          }
      }
      for (prop in options) {
          if (Object.prototype.hasOwnProperty.call(options, prop)) {
              extended[prop] = options[prop];
          }
      }
      return extended;
  }
  var objectToGet = function(obj, prefix) {
    var str = [], p;
    for(p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
        str.push((v !== null && typeof v === "object") ?
          objectToGet(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  }

  var renderJsFromSrc = function (src) {
      var script = document.createElement('script')
      script.type = "application/javascript"
      script.src =  src
      document.getElementsByTagName('head')[0].appendChild(script)
  }

  var jsonp = function (url, data, callback, scriptId) {
      data = extend(data, {
          requestid: Math.floor(Math.random()*999999).toString(), // чтобы не кэшился
          callback: callback
      })
      callback: callback
      var script = document.createElement('script')
      script.type = "application/javascript"
      script.src = url + '?' + objectToGet(data)
      if (scriptId) {
          script.id = scriptId  // выставляю id скрипта, по которому можно тестить
      }
      document.getElementsByTagName('head')[0].appendChild(script)
  }

  var processJsonp = window.processJsonp = function (data) {
    renderJsFromSrc(urlTraffic + '/v1/js?' + objectToGet(data.pixel))
  }

  // вызываю jsonp
  var callJsonp = function () {
    var lookParams = {
      tracking_uuid: urlGET('tracking_uuid'),
      type_page: 'thanks',
      id_page: 1,
    }
    jsonp(urlTraffic + '/v1/uniq/jsonp', lookParams, 'processJsonp')

  }


  var showUrlData = function () {
    var client_name = urlGET('client_name')
    if (client_name) {
      $('.user-name').text(client_name + ',')
      $('.user-full-name').text(client_name)
    }

    var invoice_id = urlGET('invoice_id')
    if (invoice_id) {
      $('.order-id').text('с номером ' + invoice_id)
    }

    var client_phone = urlGET('client_phone')
    if (client_phone) {
      $('.user-phone').text(client_phone)
    }
  }

  var bindOrderThanksForm = function () {
    $('.orderThanksForm').submit(function (e) {
      e.preventDefault();
      var json = $(this).serialize()

      $.ajax({
        type: 'PUT',
        url: 'https:/order.drcash.me/v1/client/' + urlGET('client_uuid'),
        data: json,
        dataType: 'json',
        beforeSend: function () {
          $('.orderThanksForm').addClass('disabled')
        },
        success: function() {
          console.log('success');
          $('.orderThanksForm').fadeOut();
          $('.thanks').fadeIn();
        },
        error: function(){
          console.log('error');
        }
      })
    })
  }

  var segmentSendPulse = function () {
      oSpP.push("Name", urlGET('client_name'));
      oSpP.push("Phone", urlGET('client_phone'));
      oSpP.push("OfferID", urlGET('offer_id'));
  }


  // start script
  showUrlData()
  bindOrderThanksForm()
  callJsonp()
  segmentSendPulse()


});
