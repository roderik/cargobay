/* ==========================================================================
   Sidebar Toggle

   Initialize:
   cargobay.sidebarToggle.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE10 and up
   ========================================================================== */


var cargobay = cargobay || {};

cargobay.sidebarToggle = (function(window, undefined) {

    var activeSidebarClass = 'sidebar-toggle__sidebar--active';

    var toggle;


    toggle = function() {
        [].forEach.call( document.querySelectorAll('.js-sidebar-toggle__toggle-btn'), function(btn) {
            addMultiEventistener(btn, 'click touchstart mousedown', function(e) {
                e.preventDefault();
            });

            addMultiEventistener(btn, 'touchend mouseup', function(e) {
                var btn = this,
                    container = btn.getAttribute('data-container'),
                    content = btn.getAttribute('data-content'),
                    sidebar = btn.getAttribute('data-sidebar'),
                    position = btn.getAttribute('data-position'),
                    preventOverflow = btn.getAttribute('data-prevent-overflow'),
                    duration = btn.getAttribute('data-duration');
            });
        });
    };


    return {
        init: toggle
    };

}(window));
