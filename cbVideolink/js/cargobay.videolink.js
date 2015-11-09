/* ==========================================================================
   Videolink

   Initialize:
   cargobay.videolink();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE10 and up
   ========================================================================== */

    var cargobay = cargobay || {};

    cargobay.videolink = function(undefined) {

    // Set global variables
    var init, _createTemplate, _videolink;

    _createTemplate = function(provider, id) {
        var template, url;

        switch(provider) {
            case 'youtube':
                url = '//www.youtube.com/embed/' + id + '?title=0&amp;byline=0&amp;portrait=0;&amp;badge=0&amp;autoplay=1';
            break;

            case 'vimeo':
                url = '//player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autoplay=1';
            break;

            case 'dailymotion':
                url = '//www.dailymotion.com/embed/video/' + id + '?autoplay=1';
            break;

            default:
                url = '';
            break;
        }

        if (url !== '') {
            template = document.createElement('iframe');
            template.setAttribute('src', url);
            template.setAttribute('webkitallowfullscreen', 'true');
            template.setAttribute('mozallowfullscreen', 'true');
            template.setAttribute('allowfullscreen', 'true');
            template.frameBorder = 0;
            template.style.width = 100 + '%';
            template.style.height = 100 + '%';
        } else {
            template = '<p>Sorry, this provider is not supported yet.</p>';
        }

        return template;
    };

    // Main videolink function
    _videolink = function() {

        [].forEach.call(document.querySelectorAll('.js-videolink-play-link'), function(el) {

            el.addEventListener('click', function(e) {

                e.preventDefault();

                // Get the data from the link to use on the iFrame and init variables
                var provider = el.getAttribute('data-video-provider'),
                id = el.getAttribute('data-video-id'),
                videoContainer = el.parentNode.getElementsByClassName('js-videolink-container')[0],
                template = _createTemplate(provider, id);

                // Append the iframe to the video container
                el.parentNode.querySelector('.videolink__video-link').classList.add('videolink__video-link--hidden');
                videoContainer.appendChild(template);

            }, false);

        });

    };

    init = (function() {
        _videolink();
    })();
};
