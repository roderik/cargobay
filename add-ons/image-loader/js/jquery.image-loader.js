/* ==========================================================================
   Toggle

   Initialize:
   cargobay.imageLoader();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   ========================================================================== */

var cargobay = cargobay || {};

cargobay.imageLoader = function(undefined) {

    var init, _imageLoader;

    var $imageWrapper = $('.js-image-loader__wrapper'),
        $image = $('.js-image-loader__image'),
        imageWidth = $image.outerWidth(),
        imageHeight = $image.outerHeight();

    _imageLoader = function() {
        console.log(imageWidth);
        console.log(imageHeight);
    };

    // Init
    init = function() {
        _imageLoader();
    }();
};
