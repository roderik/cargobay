/* ==========================================================================
   Toggle

   Initialize:
   cargobay.toggle.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */


var cargobay = cargobay || {};

cargobay.toggle = (function($, window, undefined) {

    var init, toggle, show, hide, hideFast;

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


    // Main toggle function
    toggle = function() {
        $('.' + btnClass).on('click touchstart mousedown', function(e) {
            e.preventDefault();
        }).on('touchend mouseup', function() {
            var $this = $(this),
                $container = $this.parents('.' + containerClass),
                //$otherActiveItem = $container.find('.' + itemClassActive),
                $target = $($this.data('target')),
                $targetContent = $target.find('.' + itemContentClass),
                targetContentHeight = $targetContent.height(),
                currentTargetIsActive = $target.hasClass(itemClassActive),
                hideOthers = $this.data('hide-others');


            if(currentTargetIsActive) {
                // Target is active, so hide it
               hide($this, $target);

            } else {

                // Check if others have to be cleared.
                if(hideOthers){
                    var ownTarget = $this.data('target');
                    var currentLevel = $this.data('level');

                    //console.log('Button triggers others on the same level to hide: ' + hideOthers);
                    //console.log('CurrentLevel: ' + currentLevel);

                    $.each($('.js-toggle-btn[data-level="'+currentLevel+'"]'), function(index, value){
                        if(ownTarget !== $(value).data('target')){
                            $value = $(value);
                            var smTarget = $(value).data('target');
                            console.log('Button on same level: ' + smTarget);

                            console.log("All classes for same level button: \n" + $value.attr("class"));
                            if($value.hasClass(btnClassActive)){
                                console.log('Button is active; Hiding...');

                                // Clear others
                                hideFast($value, $(smTarget));
                            }else{
                                console.log('Button is not active...');
                            }
                        }
                    });
                }

                // Update target
                show($this, $target, $targetContent, targetContentHeight);
            }
        });
    };


    // Show an item
    show = function($btn, $target, $targetContent, height) {
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
    };


    // Hide an item
    hide = function($btn, $target) {
        $target.velocity({
            height: 0
        }, {
            duration: animationDuration,
            complete: function() {
                $btn.removeClass(btnClassActive);
            }
        });

        $target.removeClass(itemClassActive);
    };

    hideFast = function($btn, $target) {
        $btn.removeClass(btnClassActive);

        $target.css('height', 0);
        $target.removeClass(itemClassActive);
    };

    return {
        init: init
    };

}(jQuery, window));
