$(document).ready(function() {
  // Show-hide block's
  $('.showhide-form').click(function(event) {
    $(this).fadeToggle('fast', function() {
      $('.leave-review form').fadeIn();
    });
  });

  $('.faq-container').click(function(event) {
    if (!$(this).hasClass('active')) {
      $('.faq-container').removeClass('active');
      $('.faq-answer').slideUp(100);
    }
    $(this).toggleClass('active');
    $(this).find('.faq-answer').slideToggle(100);
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Sorting rate
  $('.thumbs-down').click(function(event) {
    $('.reviews-containers').html($('.review-container').sort(function (a, b) {
      return $(a).attr('data-sort') - $(b).attr('data-sort');
    }));
  });

  $('.thumbs-up').click(function(event) {
    $('.reviews-containers').html($('.review-container').sort(function (a, b) {
      return $(b).attr('data-sort') - $(a).attr('data-sort');
    }));
  });

  // Slice stars
  $('.stars').each(function(index, el) {
    var data = $(this).data("stars")
    $(this).find('span').slice(0, data).addClass('selected');
  });

});
