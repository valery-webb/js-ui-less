$(document).ready(function() {



//@todo refactor this hardcore
    $(window).on('scroll', function() {

        var viewPortWidth = $(this).width(),
            offsetWrapper = $('.offset-wrapper'),
            scrollPoint = (viewPortWidth < 321) ? 50 : 85;

        if ($(this).scrollTop() > scrollPoint) {
            offsetWrapper.addClass('fixed-element');
        } else {
            offsetWrapper.removeClass('fixed-element');
        }
    });



//@todo refactor this hardcore
$('.menu-toggle').on('click', function(e) {

    var list = $('.nav-list');
    var li = $('.nav-list li');

    if (list.hasClass('opened')) {

        list.slideUp({
            duration: 500,
            progress: function() {
                $('.content').css({
                    marginTop: list.height()
                });
            },
            done: function() {
                list.removeClass('opened');
                list.removeAttr('style')
                li.removeAttr('style')
            }
        });

    } else {

        list.addClass('opened');
        li.css({display: 'block'})


        list.slideDown({
            duration: 500,
            progress: function() {
                $('.content').css({
                    marginTop: list.height()
                });
            }
        });

    }
}); // mobile menu end

//@todo refactor this hardcore
$('.services-toolbar button').on('click', function(e){
    var targetContent = $(e.target).data('content');
    $('.services-content').find("[data-content='" + targetContent + "']").toggleClass('hide');
})






});

