/* ==========================================================================
   General functions for Cargobay components
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.general = function(undefined) {

    var exports = this.general;

    // Credits: https://github.com/jashkenas/underscore/blob/master/underscore.js#L852
    exports.debounce = function(func, wait, immediate) {
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

    // Smooth animation using easeInOutQuad curve
    // Credits: https://gist.github.com/james2doyle/5694700
    exports.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
        if (t < 1) {
            return c/2*t*t + b;
        }
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    // Animation
    exports.animate = function(elem,style,unit,from,to,time){
        if(!elem) return;
        window.requestAnimationFrame(function() {
            elem.style[style] = to;
        }, time);
        elem.style[style] = from;
    };
};
