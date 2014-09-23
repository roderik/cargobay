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

    var init, findParent, toggle, show, hide, hideFast;

    // Config
    var animationDuration = 150,
        containerClass = 'js-toggle-container',
        btnClass = 'js-toggle-btn',
        btnClassActive = 'toggle-btn--active',
        itemClassActive = 'toggle-item--active',
        itemContentClass = 'toggle-item__content';


    init = function() {
        toggle();
    };

    findParent = function(el) {
        var iNode = el.parentNode;

        while(iNode){
            if(iNode.classList.contains('containerClass')) {
                return iNode;
            }

            iNode = iNode.parentNode;
        };
    };


    // Main toggle function
    toggle = function() {
        [].forEach.call( document.querySelectorAll('.' + btnClass), function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
            });
            btn.addEventListener('touchstart', function(e) {
                e.preventDefault();
            });
            btn.addEventListener('mousedown', function(e) {
                e.preventDefault();
            });

            btn.addEventListener('touchend', function(e) {
                var container = findParent(this);

                console.log(container);

            });

            btn.addEventListener('mouseup', function(e) {
                var container = findParent(this);

                console.log(container);

            });
        });

        /*
        $('.' + btnClass).on('click touchstart mousedown', function(e) {
            e.preventDefault();
        }).on('touchend mouseup', function() {
            var $this = $(this),
                $container = $this.parents('.' + containerClass),
                $otherActiveItem = $container.find('.' + itemClassActive),
                $target = $($this.data('target')),
                $targetContent = $target.find('.' + itemContentClass),
                targetContentHeight = $targetContent.height();
                currentTargetIsActive = $target.hasClass(itemClassActive);

            if(currentTargetIsActive) {
                // Target is active, so hide it
               hide($this, $target);

            } else {
                // Clear others
                if($otherActiveItem[0]) {
                    hideFast($('.' + btnClassActive), $otherActiveItem);
                }
                // Update target
                show($this, $target, $targetContent, targetContentHeight);
            }
        });
        */
    };


    // Show an item
    show = function($btn, $target, $targetContent, height) {
        /*
        $btn.addClass(btnClassActive);
        $target.addClass(itemClassActive);

        $target.velocity({
            height: height
        }, {
            duration: animationDuration,
            complete: function() {
                $target.css('height', 'auto');
            }
        });
        */
    };


    // Hide an item
    hide = function($btn, $target) {
        /*
        $target.velocity({
            height: 0
        }, {
            duration: animationDuration,
            complete: function() {
                $btn.removeClass(btnClassActive);
            }
        });

        $target.removeClass(itemClassActive);
        */
    };

    hideFast = function($btn, $target) {
        /*
        $btn.removeClass(btnClassActive);

        $target.css('height', 0);
        $target.removeClass(itemClassActive);
        */
    };


    return {
        init: init
    };

}(window));
