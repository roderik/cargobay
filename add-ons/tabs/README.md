## Cargo Bay Tabs

### General
- Tabs
- jQuery and Vanilla-js version


### Dependencies
- [jQuery](http://jquery.com/) (for jQuery version)


### Initialise
```javascript
cargobay.tabs();
```

### Usage
This add-on is intended for quickly implementing tab functionality to transition through panes of local content.

The class **js-tab-link** is used as a javascript hook to identify tabs. These tabs also use the **data-target** attribute to identify the respective pane it opens. Its value can be any css selector pointing to this **tab-pane**. Link tabs can optionally use the **href** attribute as an alternative for the **data-target** attribute.

```html
<nav role="navigation">
    <button data-target="#tabA" class="js-tab-link tab-link--active">Tab A</button>
    <button data-target="#tabB" class="js-tab-link">Tab B</button>
    <button data-target="#tabC" class="js-tab-link">Tab C</button>
</nav>
<div>
    <div class="tab-pane tab-pane--active" id="tabA">
        TabA
    </div>
    <div class="tab-pane" id="tabB">
        TabB
    </div>
    <div class="tab-pane" id="tabC">
        TabC
    </div>
</div>
```

### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE9 (IE10 for vanilla version) and up
