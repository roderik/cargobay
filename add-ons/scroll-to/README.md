## Cargo Bay Scroll-to

### General
- Scroll-to snippet
- jQuery and vanilla-js version


### Dependencies
- [jQuery](http://jquery.com/) (for jQuery version)
- [Velocity.js](http://julian.com/research/velocity/)


### Initialise
```javascript
cargobay.scrollTo();
```


### Usage
The class **'.js-scroll-to'** is used as the javascript-hook. Place this on a link-tag and on click there will be a scroll animation to the element defined in the href-attribute.

With the **data-offset** attribute, you can set the desired offset from the target to scroll to.

With the **data-animation-duration** attribute, you can set the desired duration of the scroll animation (defaults to 300ms).

```html
<a href="#chapter-two" data-offset="20" data-animation-duration="300" class="js-scroll-to" >Scroll to #chapter-two please</a>
```


### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE9 and up
