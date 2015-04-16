/* ==========================================================================
   Scroll to top

   Initialize:
   cargobay.scrollToTop.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.scrollToTop = function(undefined) {

    var init,
        duration,
        defaultDuration = 300;

    // Init
    init = function() {
        var $hook = $('.js-scroll-to-top');

        $hook.on('click', function(e) {
            e.preventDefault();

            var dataDuration = $(this).data('animation-duration');

            duration = (typeof dataDuration !== undefined && dataDuration !== null && !isNaN(dataDuration)) ? dataDuration : defaultDuration;

            $('html, body').velocity('scroll', {
                duration: duration
            });
        });
    }();
};
