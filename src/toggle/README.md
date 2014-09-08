## Cargo Bay Toggle

### General
- Toggle snippit

### Dependencies
- [jQuery](http://jquery.com/)
- [Velocity.js](http://julian.com/research/velocity/)


### Initialize
```javascript
cargobay.toggle.init();
```

### Usage

This snippet is intended to quickly toggle the state of a component. (For example the opening/closing of a menu.)

The class **js-toggle-button** is used as a javascript hook to identify the control button. This button also uses the **data-target** attribute to identify the element that it should control. Its value can be any css selector pointing to the **toggle-item**.
The **toggle-item** should be a wrapper for the **toggle-item__content** component.

Inside the button you can optionally have a set of icons to illustrate the state of  the item you are hiding/showing. You can toggle these by applying the **toggle-btn__icon--show** (visible by default) and **toggle-btn__icon--hide** (shown when toggled) classes.

```html
<div class="container js-navigation-space-hook">
    <h1>Cargo Bay Toggle - jQuery</h1>

    <div class="js-toggle-container">
        <button id="" class="js-toggle-btn toggle-button toggle-button-demo" data-target="#main-navigation--tabs">
            Toggle Me!
            <span class="icon--chevron-down toggle-btn__icon--show"></span>
            <span class="icon--chevron-up toggle-btn__icon--hide"></span>
        </button>

        <div id="main-navigation--tabs" class="toggle-item toggle-item-demo" id="">
            <div class="toggle-item__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magni inventore nisi enim numquam, accusamus tempore voluptates possimus amet quod aspernatur ea, nulla, sapiente non facere quidem laudantium illo ipsam dolor aliquam dignissimos? Ad non, itaque blanditiis cum impedit, porro dolor nobis. Cupiditate debitis beatae labore, suscipit, dolorem nam omnis?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magni inventore nisi enim numquam, accusamus tempore voluptates possimus amet quod aspernatur ea, nulla, sapiente non facere quidem laudantium illo ipsam dolor aliquam dignissimos? Ad non, itaque blanditiis cum impedit, porro dolor nobis. Cupiditate debitis beatae labore, suscipit, dolorem nam omnis?
                </p>
            </div>
        </div>
    </div>
</div>
```

### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE9 and up
