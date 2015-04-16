/* ==========================================================================
   Has Space

   Initialize:
   cargobay.hasSpace();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.hasSpace = function(undefined) {

    var init, _toggleState, _debounce;

    var containerClass = '.js-has-space',
        containerItemClass = '.js-has-space__item';

    // Debounce function
    _debounce = function(func, wait, immediate){
        var timeout;

        return function() {
            var context = this, args = arguments;

            var later = function() {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };

            var callNow = immediate && !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
                func.apply(context, args);
            }
        };
    };


    // Toggle State
    _toggleState = function(currentContainer, currentSpaceHook, currentEnoughSpaceWidth) {
        var currentAvailableSpaceWidth = $(currentSpaceHook).width() - ($(currentSpaceHook).outerWidth() - $(currentSpaceHook).width());

        if (currentEnoughSpaceWidth > currentAvailableSpaceWidth) {
            currentContainer.addClass('has-space--no-space').removeClass('has-space--space');
        } else {
            currentContainer.addClass('has-space--space').removeClass('has-space--no-space');
        }
    };


    // Init
    init = function() {
        $(containerClass).each(function() {
            var _toggleStateDebounced = _debounce(_toggleState, 50);

            var $container = $(this),
                spaceHook = $container.data('space-hook-target'),
                enoughSpaceWidth = 0;

            $container.find(containerItemClass).each(function() {
                if (!$(this).hasClass('js-has-space__item--hidden')) {
                    enoughSpaceWidth += parseInt($(this).outerWidth(), 10);
                }
            });

            _toggleState($container, spaceHook, enoughSpaceWidth);

            $(window).on('resize', function() {
                _toggleStateDebounced($container, spaceHook, enoughSpaceWidth);
            });
        });
    }();
};
