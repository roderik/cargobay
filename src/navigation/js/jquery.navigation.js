/* ==========================================================================
   jQuery responsive navigation

   Initialize:
   cargobay.navigation.init();

   Support:
   Android >=2.0
   iOS >=4.0
   WP >=7.5
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.navigation = (function($, window, undefined) {

    var init, smallNavigationToggles, calcBigViewWidth, toggleNavigationState,
        $navigationHook = $('.js-navigation'),
        $navigationAvailableSpaceHook = $('.js-navigation-space-hook'),
        bigViewWidth = 0,
        availableSpace = 0;

    init = function() {
        calcBigViewWidth();
        toggleNavigationState();

        $(window).resize(toggleNavigationState);
    };

    calcBigViewWidth = function() {
        $('.js-main-navigation-level .navigation__item').each(function() {
            if ($(this).css('display') != 'none') {
                bigViewWidth += parseInt($(this).outerWidth(), 10);
            }else{
                console.log('this item is display false;');
            }
        });
    };

    toggleNavigationState = function() {
        availableSpace = $navigationAvailableSpaceHook.width() - ($navigationAvailableSpaceHook.outerWidth() - $navigationAvailableSpaceHook.width());

        if (bigViewWidth > availableSpace) {
            $navigationHook.addClass('navigation--small')
                           .addClass('js-toggle--active')
                           .removeClass('navigation--big');
        } else {
            $navigationHook.addClass('navigation--big')
                            .removeClass('js-toggle--active')
                            .removeClass('navigation--small');
        }
    };

    return {
        init: init
    };

}(jQuery, window));
