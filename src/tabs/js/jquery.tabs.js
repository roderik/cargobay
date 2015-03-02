/* ==========================================================================
   Toggle

   Initialize:
   cargobay.tabs.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */


var cargobay = cargobay || {};

cargobay.tabs = (function($, window, undefined) {

    var init, activateTabs, updatePanes;

    // Config
    var defaultAnimationDuration = 150,
        animationDuration = 0,
        tabClass = 'js-tab',
        tabClassActive = 'tab--active',
        paneClassActive = 'tab-pane--active';


    // Init
    init = function() {
        activateTabs();
    };


    // Main tabs function
    activateTabs = function() {
        $('.' + tabClass).on('click touchstart mousedown', function(e) {
            e.preventDefault();
        }).on('touchend mouseup', function() {
            var $this = $(this),
                $target = $this.data('target') ? $($this.data('target')) : $($this.attr('href')),
                currentTargetIsActive = $target.hasClass(tabClassActive);

            // Check if custom animation duration has been set.
            animationDuration = ($this.data('duration') !== undefined) ? $this.data('duration') : defaultAnimationDuration;


            if(currentTargetIsActive) {
                // Target is active, so return
                return false;

            } else {
                // Update tabs
                $this.siblings(tabClassActive).removeClass(tabClassActive);
                $this.addClass(tabClassActive);

                // Update panes
                updatePanes($target);
            }
        });
    };

    // Show target pane
    updatePanes = function($target) {
        $target.siblings().removeClass(paneClassActive);
        $target.addClass(paneClassActive);
    };

    return {
        init: init
    };

}(jQuery, window));