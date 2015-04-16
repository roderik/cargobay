/* ==========================================================================
   Tabs

   Initialize:
   cargobay.tabs();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.tabs = function(undefined) {

    var init, _updatePanes;

    // Config
    var tabClass = 'js-tab-link',
        tabClassActive = 'tab-link--active',
        paneClassActive = 'tab-pane--active';


    // Show target pane
    _updatePanes = function($target) {
        $target.siblings().removeClass(paneClassActive);
        $target.addClass(paneClassActive);
    };


    // Init
    init = function() {
        $('.' + tabClass).on('click touchstart mousedown', function(e) {
            e.preventDefault();
        }).on('touchend mouseup', function() {
            var $btn = $(this),
                dataTarget = $btn.data('target'),
                $target = dataTarget ? $(dataTarget) : $($btn.attr('href')),
                currentTargetIsActive = $target.hasClass(tabClassActive);

            if (!currentTargetIsActive) {
                // Update tabs
                $btn.siblings('.' + tabClassActive).removeClass(tabClassActive);
                $btn.addClass(tabClassActive);

                // Update panes
                _updatePanes($target);
            }
        });
    }();
};
