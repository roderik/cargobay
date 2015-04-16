/* ==========================================================================
   Toggle

   Initialize:
   cargobay.toggle;

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.toggle = function(undefined) {

    var init, _toggle, _show, _hide, _hideFast;

    // Config
    var defaultAnimationDuration = 150,
        animationDuration = 0,
        btnClass = 'js-toggle-btn',
        btnClassActive = 'toggle-btn--active',
        itemClassActive = 'toggle-item--active',
        itemContentClass = 'toggle-item__content';


    // Main toggle function
    _toggle = function() {
        $('.' + btnClass).on('click touchstart mousedown', function(e) {
            e.preventDefault();
        }).on('touchend mouseup', function() {
            var $btn = $(this),
                $target = $($btn.data('target')),
                $targetContent = $target.find('.' + itemContentClass),
                targetContentHeight = $targetContent.height(),
                currentTargetIsActive = $target.hasClass(itemClassActive),
                hideOthers = $btn.data('hide-others');

            // Check if custom animation duration has been set.
            animationDuration = ($btn.data('duration') !== undefined) ? $btn.data('duration') : defaultAnimationDuration;


            if(currentTargetIsActive) {
                // Target is active, so hide it
               _hide($btn, $target);

            } else {

                // Check if others have to be cleared.
                if(hideOthers){
                    var ownTarget = $btn.data('target');
                    var currentLevel = $btn.data('level');

                    $.each($('.'+ btnClass +'[data-level="' + currentLevel + '"]'), function(index, value){
                        if(ownTarget !== $(value).data('target')){
                            var $value = $(value),
                                smTarget = $value.data('target');

                            if($value.hasClass(btnClassActive)){
                                // Clear others
                                _hideFast($value, $(smTarget));
                            }
                        }
                    });
                }

                // Update target
                _show($btn, $target, $targetContent, targetContentHeight);
            }
        });
    };


    // Show an item
    _show = function($btn, $target, $targetContent, height) {
        $btn.addClass(btnClassActive);

        $target.velocity({
            height: height
        }, {
            duration: animationDuration,
            complete: function() {
                $target.css('height', 'auto');
                $target.addClass(itemClassActive);
            }
        });
    };


    // Hide an item
    _hide = function($btn, $target) {
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


    // Quickly hide another open item on the same level when hide-others is true.
    _hideFast = function($btn, $target) {
        $btn.removeClass(btnClassActive);

        $target.css('height', 0);
        $target.removeClass(itemClassActive);
    };


    // Init
    init = function() {
        _toggle();
    }();
};
