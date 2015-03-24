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

cargobay.animateFormElements = (function($, window, undefined) {
    var init,
        $hook = $('.js-form__input');

    init = function() {
        // This is so the active state remains once there has been input in the field.
        $hook.on('blur', function() {
            var $this = $(this);

            if($this.val().length !== 0) {
                $this.addClass('form__input--active');
            } else {
                $this.removeClass('form__input--active');
            }
        });
    };

    return {
        init: init
    };

}(jQuery, window));
