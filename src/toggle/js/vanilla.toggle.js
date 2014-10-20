/* ==========================================================================
   Toggle

   Initialize:
   cargobay.toggle.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE10 and up
   ========================================================================== */


var cargobay = cargobay || {};

cargobay.toggle = (function(window, undefined) {

    var init, findParent, addMultiEventistener, toggle, show, hide;

    // Config
    var animationDuration = 150,
        containerClass = 'js-toggle-container',
        btnClass = 'js-toggle-btn',
        btnClassActive = 'toggle-btn--active',
        itemClassActive = 'toggle-item--active',
        itemContentClass = 'toggle-item__content';


    // Init
    init = function() {
        toggle();
    };


    // Find parent of a element with a certain class
    findParent = function(el) {
        var iNode = el.parentNode;

        while(iNode){
            if(iNode.classList.contains(containerClass)) {
                return iNode;
            }

            iNode = iNode.parentNode;
        }
    };


    // Add multiple listeners
    addMultiEventistener = function(el, s, fn) {
        var evts = s.split(' ');

        for (var i=0, iLen=evts.length; i<iLen; i++) {
            el.addEventListener(evts[i], fn, false);
        }
    };


    // Main toggle function
    toggle = function() {
        [].forEach.call( document.querySelectorAll('.' + btnClass), function(btn) {
            addMultiEventistener(btn, 'click touchstart mousedown', function(e){
                e.preventDefault();
            });

            addMultiEventistener(btn, 'touchend mouseup', function(e){
                var container = findParent(btn),
                    otherActiveItem = container.querySelectorAll('.' + itemClassActive)[0],
                    target = container.querySelectorAll(btn.getAttribute('data-target'))[0],
                    targetContent = target.querySelectorAll('.' + itemContentClass)[0],
                    targetContentHeight = targetContent.offsetHeight,
                    currentTargetIsActive = target.classList.contains(itemClassActive);

                if(currentTargetIsActive) {
                    // Target is active, so hide it
                   hide(btn, target);

                } else {
                    // Update target
                    show(this, target, targetContent, targetContentHeight);
                }
            });
        });
    };


    // Show an item
    show = function(btn, target, targetContent, height) {
        btn.classList.add(btnClassActive);
        target.classList.add(itemClassActive);

        Velocity({
            elements: target,
            properties: {
                height: height
            },
            options: {
                duration: animationDuration,
                complete: function() {
                    target.style.height = 'auto';
                }
            }
        });
    };


    // Hide an item
    hide = function(btn, target) {
        Velocity({
            elements: target,
            properties: {
                height: 0
            },
            options: {
                duration: animationDuration,
                complete: function() {
                    btn.classList.remove(btnClassActive);
                }
            }
        });

        target.classList.remove(itemClassActive);
    };


    return {
        init: init
    };

}(window));
