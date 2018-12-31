function randomInteger(min, max) {
			var rand = min + Math.random() * (max + 1 - min);
			rand = Math.floor(rand);
			return rand;
		}

$(document).ready(function(){
    if(window.innerWidth > 7) {
        var i = 0;

        function yved() {
            i = 1;
            $('.yved:nth-child(' + i + ')').fadeIn(500).delay(7000).fadeOut(500);
        }

        setTimeout(function () {
            setInterval(
                function () {
                    i = i + 1;
                    /*if (i > 5) i = 1;//10 - количество уведомлений 1200 */
                    $('.yved:nth-child(' + i + ')').fadeIn(500).delay(7000).fadeOut(500);
                }, 50000);
            yved();
        }, 7000);
    }
});