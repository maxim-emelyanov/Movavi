import $ from 'jquery';
$(document).ready(function () {
    var defevent = false;
    $(".step_anchor").click(function (e) {
        if (defevent) {
            defevent = false;
        }
        else {
            e.preventDefault();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tabs").offset().top
            }, 1000);
            defevent = true;
            setTimeout(function () {$(e.target).trigger('click') }, 500);
        }
    });
});
