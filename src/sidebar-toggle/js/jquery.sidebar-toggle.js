/* ==========================================================================
   Sidebar Toggle

   Initialize:
   cargobay.sidebarToggle.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */


var cargobay = cargobay || {};

cargobay.sidebarToggle = (function($, window, undefined) {

    var activeSidebarClass = 'sidebar-toggle__sidebar--active';

    var toggle;


    toggle = function() {
        $('.js-sidebar-toggle__toggle-btn').on('click', function(e) {
            e.preventDefault();

            var $btn = $(this),
                $container = $($btn.data('container')),
                $content = $($btn.data('content')),
                $sidebar = $($btn.data('sidebar')),
                position = $btn.data('position'),
                preventOverflow = $btn.data('prevent-overflow'),
                duration = $btn.data('duration');


            // Set direction variables
            var aniSidebarOpen = {},
                aniSidebarClose = {},
                aniContainerOpen = {},
                aniContainerClose = {};

            var sidebarWidth, sidebarHeight;

            if(position === 'left') {
                sidebarWidth = $sidebar.outerWidth();

                aniSidebarOpen.translateX = ['0', '-100%'];
                aniSidebarClose.translateX = ['-100%', '0'];

                aniContainerOpen.translateX = [sidebarWidth, '0'];
                aniContainerClose.translateX = ['0', sidebarWidth];
            }
            if(position === 'right') {
                sidebarWidth = $sidebar.outerWidth();

                aniSidebarOpen.translateX = ['0', '100%'];
                aniSidebarClose.translateX = ['100%', '0'];

                aniContainerOpen.translateX = ['-' + sidebarWidth, '0'];
                aniContainerClose.translateX = ['0', '-' + sidebarWidth];
            }
            if(position === 'top') {
                sidebarHeight = $sidebar.outerHeight();

                aniSidebarOpen.translateY = ['0', '-100%'];
                aniSidebarClose.translateY = ['-100%', '0'];

                aniContainerOpen.translateY = [sidebarHeight, '0'];
                aniContainerClose.translateY = ['0', sidebarHeight];
            }
            if(position === 'bottom') {
                sidebarHeight = $sidebar.outerHeight();

                aniSidebarOpen.translateY = ['0', '100%'];
                aniSidebarClose.translateY = ['100%', '0'];

                aniContainerOpen.translateY = ['-' + sidebarHeight, '0'];
                aniContainerClose.translateY = ['0', '-' + sidebarHeight];
            }


            // Animate toggle
            if(!$sidebar.hasClass(activeSidebarClass)) {
                $sidebar.addClass(activeSidebarClass);

                $sidebar.velocity(aniSidebarOpen, {
                    duration: duration,
                    easing: 'ease'
                });

                $content.velocity(aniContainerOpen, {
                    duration: duration,
                    easing: 'ease'
                });

                if(preventOverflow) {
                    $('.sidebar-toggle-container').addClass('sidebar-toggle-container--prevent-overflow');
                }
            } else {
                $sidebar.removeClass(activeSidebarClass);

                $sidebar.velocity(aniSidebarClose, {
                    duration: duration,
                    easing: 'ease'
                });

                $content.velocity(aniContainerClose, {
                    duration: duration,
                    easing: 'ease'
                });

                if(preventOverflow) {
                    $('.sidebar-toggle-container').removeClass('sidebar-toggle-container--prevent-overflow');
                }
            }
        });
    };


    return {
        init: toggle
    };

}(jQuery, window));
