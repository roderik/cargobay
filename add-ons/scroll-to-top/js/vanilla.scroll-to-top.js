/* ==========================================================================
   Scroll to top

   Initialize:
   cargobay.scrollToTop();

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
        [].forEach.call(document.querySelectorAll('.js-scroll-to-top'), function(el) {

            el.addEventListener('click', function(e) {
                e.preventDefault();

                var dataDuration = this.getAttribute('data-animation-duration');

                duration = (typeof dataDuration !== undefined && dataDuration !== null && !isNaN(dataDuration)) ? dataDuration : defaultDuration;

                Velocity(document.body, 'scroll', {
                    duration: duration
                });
            }, false);
        });
    }();
};
