## Cargobay ScrollTo

### General
- Allows you to scroll to a target element you picked up to
- 3 options attributes with default parameters
- Scroll to top by default


## Required includes
- **Javascript**
    - cargobay.general.min.js
    - cargobay.scroll-to.min.js


### Initialise
```javascript
cargobay.general();
cargobay.scrollTo();
```

### Usage
The class **.js-scroll-to** is used as javascript hook to identify a scrollTo button.

With the **data-duration** attribute, you can select a scroll animation duration in ms, **500 by default**.

The **data-scroll-to** attribute is used to select the Id of the element you want to scroll to, **Scroll to top by default**.

With the **data-scroll-parent** attribute, you can select a scrollable element, other than the Body, **Body by default**.

```html
<a href="#" data-duration="2000" data-scroll-to="#idelement" class="js-scroll-to">Scroll to element</a>
```



### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE10 and up
