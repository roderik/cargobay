/* ==========================================================================
   Has Space

   Initialize:
   cargobay.hasSpace();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE10 and up
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
        var currentAvailableSpaceWidth = 0,
            currentSpaceHookStyles = window.getComputedStyle(document.querySelectorAll(currentSpaceHook)[0], null);

        currentAvailableSpaceWidth = parseInt(currentSpaceHookStyles.getPropertyValue('width'), 10) - (parseInt(currentSpaceHookStyles.getPropertyValue('padding-left'), 10) + parseInt(currentSpaceHookStyles.getPropertyValue('padding-right'), 10));

        if (currentEnoughSpaceWidth > currentAvailableSpaceWidth) {
            currentContainer.classList.add('has-space--no-space');
            currentContainer.classList.remove('has-space--space');
        } else {
            currentContainer.classList.add('has-space--space');
            currentContainer.classList.remove('has-space--no-space');
        }
    };


    // Init
    init = function() {
        [].forEach.call( document.querySelectorAll(containerClass), function(container) {
            var _toggleStateDebounced = _debounce(_toggleState, 50);

            var spaceHook = container.getAttribute('data-space-hook-target'),
                enoughSpaceWidth = 0;

            [].forEach.call( container.querySelectorAll(containerItemClass), function(item) {
                if (!item.classList.contains('js-has-space__item--hidden')) {
                    enoughSpaceWidth += parseInt(item.offsetWidth, 10);
                }
            });

            _toggleState(container, spaceHook, enoughSpaceWidth);

            window.addEventListener('resize', function(e) {
                _toggleStateDebounced(container, spaceHook, enoughSpaceWidth);
            });
        });
    }();
};
