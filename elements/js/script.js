//////////////////////////
/////// formulaire ///////
//////////////////////////

function myFunction() {
    alert("formulaire non fonctionnel");
}

//////////////////////////
///////// popup //////////
//////////////////////////

var popup;

function open_challenge(item) {
    // popup = window.open('elements/images/maquette2.png', 'Projet1', 'menubar=no, scrollbars=no, top=200, left=700, width=400, height=600');

    var img = $(item);
    var modal = $('.js-popup-' + img.attr('data-target') + '-content');

    var captionText = $("#caption", modal);

    modal.show();
    captionText.innerHTML = this.alt;

    // $(item).popup();
}

////////////////////////////////////////
///////// scroll anim section //////////
////////////////////////////////////////

function pageScroll(delay) {
    $('.js-section > a').bind('click', function (e) {
        e.preventDefault();

        var anchor = $(this);
        var href = anchor.attr('href');
        var offset = $('body').attr('data-offset');

        $('html, body').stop().animate({
            scrollTop: $(href).offset().top - (offset - 1)
        }, delay, 'easeInOutExpo');

        /*
         * Automatically retract the navigation after clicking 
         * on one of the menu items.
         */
        // if (!$(this).parent().hasClass('dropdown'))
        //     $('.main-collapse').collapse('hide');
    });
};

$(function () {
    $('.js-popup').click(function () {
        open_challenge(this);
    });

    $(".js-popup-close").click(function () {
        var modal = $(this).parent();
        modal.hide();
    });

    pageScroll(1500);
});

////////////////////////////////////////
//////////// show/hide nav /////////////
////////////////////////////////////////

function navisib(nav) {
    var test = document.getElementById(nav).style.display;
    if (test == "block") {
        document.getElementById(nav).style.display = "none";
    } else {
        document.getElementById(nav).style.display = "block";
    }
}