/* ==========================================================================
   Animate Form Elements

   Initialize:
   cargobay.animateFormElements.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.animateFormElements = (function(window, undefined) {
    var init;

    init = function() {
        // This is so the active state remains once there has been input in the field.

        [].forEach.call( document.querySelectorAll('.js-scroll-to'), function(el) {
            el.addEventlistener('blur', function() {
                if(el.value.length !== 0) {
                    el.addClass('form__input--active');
                } else {
                    el.removeClass('form__input--active');
                }
            });
        });
    };

    return {
        init: init
    };

}(window));