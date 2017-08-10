(function($) {

  sizing();

  $(window).resize(sizing);

  sticky();

  function sizing () {
    imageOne();
    panelOne();
    footer();
  }

  function sticky () {
    var firstSticky = $('#about-panel');
    stickyDiv (firstSticky);
  }

  function imageOne () {
    var nav = $('#site-navigation');
    var imagePlacement = nav.position().top + nav.height();
    console.log(imagePlacement);
    $('#header-image').find('img').css('margin-top', imagePlacement).addClass('img-fluid');
  }

  function panelOne () {
    var backgroundImage = $('#header-image').find('img');
    var contentPlacement = backgroundImage.position().top + backgroundImage.height();
    $('#about-panel').css('margin-top',contentPlacement);
  }

  function imageTwo () {
    var imageTwoPlacement = $('#about-panel').position.top + $('#about-panel').height();
    $('#shows-panel-image').css('margin-top', imageTwoPlacement);
  }

  function footer () {
     var mastheadTotal = $('#masthead').position().top + $('#masthead').height();
     var contentTotal = $('#about-panel').position().top + $('#about-panel').height();
     var footerPlacement = mastheadTotal + contentTotal;
    $('#footer').css('margin-top', footerPlacement);
  }

  function stickyDiv (el) {
    var sticky = el.offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() > (sticky - 56)) {
            el.addClass('affix');
            el.css('margin-top', '56px');
        }
    });
  }

})(jQuery);



function navBar () {

}
