/* ==========================================================================
   Tabs

   Initialize:
   cargobay.tabs.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE10 and up
   ========================================================================== */


var cargobay = cargobay || {};

cargobay.tabs = (function(window, undefined) {

    var init, activateTabs, updatePanes;

    // Config
    var tabClass = 'js-tab',
        tabClassActive = 'tab--active',
        paneClassActive = 'tab-pane--active';


    // Init
    init = function() {
        activateTabs();
    };

    // Add multiple listeners
    addMultiEventistener = function(el, s, fn) {
        var evts = s.split(' ');

        for (var i=0, iLen=evts.length; i<iLen; i++) {
            el.addEventListener(evts[i], fn, false);
        }
    };

    // Main tabs function
    activateTabs = function() {
        [].forEach.call(document.querySelectorAll('.' + tabClass), function(tab) {
            addMultiEventistener(tab, 'click touchstart mousedown', function(e){
                e.preventDefault();
            });

            addMultiEventistener(tab, 'touchend mouseup', function(e){
                var target = tab.getAttribute('data-target') ? document.querySelectorAll(tab.getAttribute('data-target'))[0] : document.querySelectorAll(tab.getAttribute('href'))[0],
                    currentTargetIsActive = target.classList.contains(tabClassActive);

                if(currentTargetIsActive) {
                    // Target is active, so return
                    return false;

                } else {

                    // Update tabs
                    tab.parentNode.querySelectorAll('.' + tabClassActive)[0].classList.remove(tabClassActive);
                    tab.classList.add(tabClassActive);
                    
                    // Update panes
                    updatePanes(target);
                }
            });
        });
    };

    // Show target pane
    updatePanes = function(target) {
        target.parentNode.querySelectorAll('.' + paneClassActive)[0].classList.remove(paneClassActive);
        target.classList.add(paneClassActive);
    };

    return {
        init: init
    };

}(window));