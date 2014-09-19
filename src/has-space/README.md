## Cargo Bay Has-space

### General
- Calculates if items in a given container have enough space to stand next to eachother.
- JQuery version


### Dependencies
- jQuery


### Initialise
```javascript
cargobay.hasSpace.init();
```


### Usage
The class **'.js-has-space'** is used as the javascript-hook for the container.
The class **'.js-has-space__item'** is used as the javascript-hook for the items that are in the container.

With the attribute **data-space-hook-target="your_class_or_id_here"** you can hook on to an element that will be used to calculcate the available space.

The classes **'.has-space--space'** and **'.has-space--no-space'** are used to define the state. This class is set on the container you defined with the class **'.js-has-space'**.


```html
<nav role="navigation" data-space-hook-target=".js-has-space__space-hook--nav-1" class="js-has-space js-has-space__space-hook--nav-1">
    <a href="#" class="js-has-space__item">Item</a>
    <a href="#" class="js-has-space__item">Item</a>
    <a href="#" class="js-has-space__item">Item</a>
</nav>
```


### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE9 and up
