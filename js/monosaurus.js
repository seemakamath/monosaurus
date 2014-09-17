/**
 * monosaurus.js
 *
 * Main behavior file for Monosaurus theme
 * Most of the functions here will require jQuery 1.10+ or 2.0+
 *
 * @package    Monosaurus
 * @author     Firdouss Ross <hello@ross.my>
 * @copyright  2014 Ross.my
 * @license    http://www.opensource.org/licenses/mit-license.html MIT License
 * @version    1.0.0
 * @link       https://bitbucket.org/rossmy/monosaurus/overview
 * @since      1.0.0
 */

$(document).ready(function () {
    /*
        Resize the sections accordingly
    */
    mono_UIresize();

    /*
        Skip to content toggle
    */
    $(document).on('click', '[data-toggle~="skipcontent"]', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(window).height()
        });
    });

    /*
        Scroll to content toggle
    */
    $(document).on('click', '[data-toggle~="scrollto"]', function (e) {
        e.preventDefault();

        var target = $(this).attr('href');

        if (target) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            });
        }
    });
});

/*
    Helper Functions
*/
function mono_UIresize () {
    /*
        Size up the section.full elements
        140px is the offset of top and bottom padding of the section element
        which is 70px each.
    */
    $('section.full').each(function () {
        $(this).height( $(window).height() - 140 );
    });

    /*
        Size up min-height for section.minfull elements
    */
    $('section.minfull').each(function () {
        $(this).css('min-height', ($(window).height() - 140) + 'px' );
    });
}

/*
    Awesome function made by brahn (http://stackoverflow.com/users/239712/brahn)
    Check it out here:
    http://stackoverflow.com/a/4541963
*/
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

/*
    On window resize, resize those sections back to full height
*/
$(window).resize(function () {
    waitForFinalEvent(function(){
      mono_UIresize();
    }, 500, "monoResizeSections");
});