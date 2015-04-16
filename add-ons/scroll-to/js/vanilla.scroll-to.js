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
        [].forEach.call(document.querySelectorAll('.js-scroll-to'), function(el) {

            el.addEventListener('click', function(e) {
                e.preventDefault();

                var target = this.getAttribute('href').slice(+1),
                    targetEl = document.getElementById(target),
                    dataOffset = this.getAttribute('data-offset'),
                    dataDuration = this.getAttribute('data-animation-duration'),
                    targetTop;

                targetOffset = (typeof dataOffset !== undefined && dataOffset !== null && !isNaN(dataOffset)) ? dataOffset : defaultOffset;
                duration = (typeof dataDuration !== undefined && dataDuration !== null && !isNaN(dataDuration)) ? dataDuration : defaultDuration;

                Velocity(targetEl, 'scroll', {
                    duration: duration,
                    offset: targetOffset
                });

            }, false);
        });
    }();
};
