## Cargo Bay Float Label Form

### General
- Animates the labels of input fields on focus
- JQuery version


### Dependencies
- [jQuery](http://jquery.com/) (for jQuery version)
- Placeholder fallback for IE9


### Initialise
```javascript
cargobay.floatLabelForm.init();
```


### Usage
This component handles an animation on the labels of input fields when the user starts typing in the field.
The class **'.js-form__field'** is used as the javascript-hook, which should be placed on the input element.

```html
<div class="form__group">
    <label class="form__label">Your First Name</label>
    <input type="text" class="form__input js-form__field" placeholder="First Name">
</div>
```


### Available scss variables
```scss
// Colors
$labelActive: $blue;
$labelFocus: $black;
```


### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE10 and up (IE9 with placeholder fallback)
