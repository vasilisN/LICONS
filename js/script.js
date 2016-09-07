//MENU ANCHORS
$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-top").offset().top}, 1500);
});

$("#menu1").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_1").offset().top}, 1500);
});

$("#menu2").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_2").offset().top}, 1500);
});

$("#menu3").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_3").offset().top}, 1500);
});

$("#menu4").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_4").offset().top}, 1500);
});

$("#menu5").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_5").offset().top}, 1500);
});

$("#menu6").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_6").offset().top}, 1500);
});

$("#menu_colored1").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_7").offset().top}, 1500);
});

$("#menu_colored2").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_8").offset().top}, 1500);
});

$("#menu_colored3").click(function() {
    $('html, body').animate({
        scrollTop: $("#icon_set_9").offset().top}, 1500);
});


/*Ripple effect*/
    (function(window, $) {

        $(function() {


            $('.ripple').on('click', function(event) {
                event.preventDefault();

                var $div = $('<div/>'),
                    btnOffset = $(this).offset(),
                    xPos = event.pageX - btnOffset.left,
                    yPos = event.pageY - btnOffset.top;



                $div.addClass('ripple-effect');
                var $ripple = $(".ripple-effect");

                $ripple.css("height", $(this).height());
                $ripple.css("width", $(this).height());
                $div
                    .css({
                        top: yPos - ($ripple.height() / 2),
                        left: xPos - ($ripple.width() / 2),
                        background: $(this).data("ripple-color")
                    })
                    .appendTo($(this));

                window.setTimeout(function() {
                    $div.remove();
                }, 2000);
            });

        });

    })(window, jQuery);


//wow js
window.onload = function() {

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
      }
    );
    wow.init();

};
