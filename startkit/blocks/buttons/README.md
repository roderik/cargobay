## Cargo Bay Buttons

### General
- Basic styling for buttons


### HTML
The class **btn** can be added to a variety of elements. It also has various types and a block state.

Basic button:

```html
<a href="#" class="btn">Link button</a>
<button type="button" class="btn">Button button</button>
```

Types:

```html
<button type="button" class="btn btn--primary">Primary button</button>
<button type="button" class="btn btn--secondary">Secondary button</button>
```

Block:

```html
<button type="button" class="btn btn--block">Block button</button>
```

### Available SCSS variables

```html
$btn-margin:                        0 !default;
$btn-padding:                       .7em 1.5em !default;

$btn-font-size:                     1rem !default;
$btn-lineheight:                    1 !default;

$btn-border:                        1px solid #333 !default;
$btn-background:                    #fff !default;
$btn-background--hover:             #fff !default;

$btn-color:                         #333 !default;
$btn-color--hover:                  #333 !default;

$btn--primary-border:               1px solid #2C4865 !default;
$btn--primary-background:           #2C4865 !default;
$btn--primary-color:                #fff !default;
$btn--primary-background--hover:    #2C4865 !default;
$btn--primary-color--hover:         #fff !default;

$btn--secondary-border:             1px solid #815EF4 !default;
$btn--secondary-background:         #815EF4 !default;
$btn--secondary-color:              #fff !default;
$btn--secondary-background--hover:  #815EF4 !default;
$btn--secondary-color--hover:       #fff !default;
```


### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE9 (IE10 for vanilla version) and up
