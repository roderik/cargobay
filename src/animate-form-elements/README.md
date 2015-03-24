## Cargo Bay Animate Form Elements

### General
- Animates the labels of input fields on focus
- JQuery and vanilla-js version


### Dependencies
- jQuery for the jQuery version


### Initialise
```javascript
cargobay.animateFormElements.init();
```


### Usage
This element ads an animation on form labels when focusing input elements. The animation itself is entirely handled by css.
The class **'.js-form__input'** is used as the javascript-hook.
This should be placed on the input element and prevents the animation rolling back when a field is filled in so label and value don't overlap.

```html
<div class="form__input-group">
    <input type="text" class="form__input js-form__input">
    <label class="form__label">Your Full Name</label>
</div>
```

### Available scss variables
```scss
// Colors
$background-color:     $black;
$border-color:         $black;
```


### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE9 and up