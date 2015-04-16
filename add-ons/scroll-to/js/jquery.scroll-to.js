/* ==========================================================================
   Scroll To

   Initialize:
   cargobay.scrollTo.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.scrollTo = function(undefined) {

    var init,
        targetOffset,
        defaultOffset = 0,
        duration,
        defaultDuration = 300;

    // Init
    init = function() {
        var $hook = $('.js-scroll-to');

        $hook.on('click', function(e) {
            e.preventDefault();

            var $link = $(this),
                target = $link.attr('href'),
                dataOffset = $link.data('offset'),
                dataDuration = $link.data('animation-duration');

            targetOffset = (typeof dataOffset !== undefined && dataOffset !== null && !isNaN(dataOffset)) ? dataOffset : defaultOffset;
            duration = (typeof dataDuration !== undefined && dataDuration !== null && !isNaN(dataDuration)) ? dataDuration : defaultDuration;

            $(target).velocity('scroll', {
                duration: duration,
                offset: targetOffset
            });
        });
    }();
};
