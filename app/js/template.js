$(document).ready(function() {



// @todo: strong refactoring
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



// @todo: strong refactoring
$('.menu-toggle').on('click', function(e) {

    var list = $('.nav-list'),
        li = $('.nav-list li'),
        content = $('.content');

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
                content.css({
                    marginTop: list.height()
                });
            }
        });

    }
});

// @todo: strong refactoring
$('.services-toolbar button').on('click', function(e) {

    var targetContent = $(e.target).data('content'),
        contentToOpen = $('.services-content').find("[data-content='" + targetContent + "']"),
        contentBoxes = $('.services-content > div');

    if (contentToOpen.is(':visible')) {
        contentToOpen.hide();
    } else {
        contentBoxes.hide();
        contentToOpen.show();
    }
});






});

