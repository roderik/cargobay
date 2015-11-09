## Cargobay Videolink

### General
- Support for Youtube, Vimeo and Dailymotion
- Replaces image with video (lazy-load video's)



### Required includes
- **Javascript**
    - cargobay.videolink.min.js
- **Styles**
    - cargobay.videolink.min.scss



### Initialise
```javascript
cargobay.videolink();
```



### Usage
The class **.js-videolink-play-link** is used as javascript hook to identify a video link.

With the **data-video-provider** attribute, you can identify where the video is hosted, and what kind of embed code should be used.
Available values are " *youtube* " and " *vimeo* "

The **data-video-id** attribute is used by the javascript to load the requested video.

```html
<div class="videolink">
    <a href="//www.youtube.com/embed/C9OfBcjyxKY" target="_blank" class="js-videolink-play-link videolink__video-link" data-video-provider="youtube" data-video-id="C9OfBcjyxKY" data-make-fluid="true">
        <img src="img/videolink.jpg" alt="videolink-image" class="videolink__video-link__image" />
    </a>
    <div class="js-videolink-container videolink__video-container"></div>
</div>
```



### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE10 and up
