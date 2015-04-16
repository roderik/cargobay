/* ==========================================================================
   Tabs

   Initialize:
   cargobay.tabs();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE10 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.tabs = function(undefined) {

    var init, _updatePanes, _addMultiEventistener;

    // Config
    var tabClass = 'js-tab-link',
        tabClassActive = 'tab-link--active',
        paneClassActive = 'tab-pane--active';


    // Show target pane
    _updatePanes = function(target) {
        target.parentNode.querySelectorAll('.' + paneClassActive)[0].classList.remove(paneClassActive);
        target.classList.add(paneClassActive);
    };


    // Add multiple listeners
    _addMultiEventistener = function(el, s, fn) {
        var evts = s.split(' ');

        for (var i=0, iLen=evts.length; i<iLen; i++) {
            el.addEventListener(evts[i], fn, false);
        }
    };


    // Init
    init = function() {
        [].forEach.call(document.querySelectorAll('.' + tabClass), function(tab) {
            _addMultiEventistener(tab, 'click touchstart mousedown', function(e) {
                e.preventDefault();
            });

            _addMultiEventistener(tab, 'touchend mouseup', function(e) {
                var dataTarget = tab.getAttribute('data-target'),
                    target = dataTarget ? document.querySelectorAll(dataTarget)[0] : document.querySelectorAll(tab.getAttribute('href'))[0],
                    currentTargetIsActive = target.classList.contains(tabClassActive);

                if (!currentTargetIsActive) {
                    // Update tabs
                    tab.parentNode.querySelectorAll('.' + tabClassActive)[0].classList.remove(tabClassActive);
                    tab.classList.add(tabClassActive);

                    // Update panes
                    _updatePanes(target);
                }
            });
        });
    }();
};
