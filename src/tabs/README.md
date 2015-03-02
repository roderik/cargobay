## Cargo Bay Tabs

### General
- Tabs snippet
- jQuery and vanilla js version

### Dependencies
- [jQuery](http://jquery.com/) (for jQuery version)

### Initialise
```javascript
cargobay.tabs.init();
```

### Usage

This snippet is intended for quickly implementing tab functionality to transition through panes of local content.

The class **js-tab** is used as a javascript hook to identify tabs. These tabs also use the **data-target** attribute to identify the respective pane it opens. Its value can be any css selector pointing to this **tab-pane**. Link tabs can optionally use the **href** attribute as an alternative for the **data-target** attribute.

```html
<div class="container">
	<h1>Cargo Bay Tabs</h1>

    <h2>Buttons</h2>
    <nav>
        <button data-target="#tabA" class="js-tab tab--active">Tab A</button>
        <button data-target="#tabB" class="js-tab">Tab B</button>
        <button data-target="#tabC" class="js-tab">Tab C</button>
    </nav>
    <div>
        <div class="tab-pane tab-pane--active" id="tabA">
            <p>
                TabA<br>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Vestibulum id ligula porta felis euismod semper.
            </p>
        </div>

        <div class="tab-pane" id="tabB">
            <p>
                TabB<br>
                Etiam porta sem malesuada magna mollis euismod.
            </p>
        </div>

        <div class="tab-pane" id="tabC">
            <p>
                TabC<br>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec ullamcorper nulla non metus auctor fringilla.
            </p>
        </div>
    </div>

    <h2>Links</h2>
    <nav>
        <a class="js-tab tab--active" href="#tab1">Tab 1</a>
        <a class="js-tab" href="#tab2">Tab 2</a>
        <a class="js-tab" href="#tab3">Tab 3</a>
    </nav>
    <div>
        <div class="tab-pane tab-pane--active" id="tab1">
            <p>
                Tab1<br>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Vestibulum id ligula porta felis euismod semper.
            </p>
        </div>

        <div class="tab-pane" id="tab2">
            <p>
                Tab2<br>
                Etiam porta sem malesuada magna mollis euismod.
            </p>
        </div>

        <div class="tab-pane" id="tab3">
            <p>
                Tab3<br>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec ullamcorper nulla non metus auctor fringilla.
            </p>
        </div>
    </div>
</div>
```

### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE9 (IE10 for vanilla version) and up
