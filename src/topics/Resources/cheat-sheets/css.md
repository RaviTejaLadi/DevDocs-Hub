# 🎨 CSS Cheat Sheet

## Table of Contents

1. [ CSS Syntax](#css-syntax)
2. [ CSS Selectors](#css-selectors)
   - [ Basic Selectors](#basic-selectors)
   - [ Combinator Selectors](#combinator-selectors)
   - [ Attribute Selectors](#attribute-selectors)
   - [ Pseudo-classes](#pseudo-classes)
   - [ Pseudo-elements](#pseudo-elements)
3. [ Text Properties](#text-properties)
4. [ Background Properties](#background-properties)
5. [ Box Model Properties](#box-model-properties)
   - [ Dimensions](#dimensions)
   - [ Margin](#margin)
   - [ Padding](#padding)
   - [ Border](#border)
6. [ Layout Properties](#layout-properties)
   - [ Display](#display)
   - [ Position](#position)
   - [ Float and Clear](#float-and-clear)
   - [ Overflow](#overflow)
7. [ Flexbox Properties](#flexbox-properties)
   - [ Container Properties](#container-properties)
   - [ Item Properties](#item-properties)
8. [ Grid Properties](#grid-properties)
   - [ Container Properties](#container-properties-1)
   - [ Item Properties](#item-properties-1)
9. [ Animation and Transition](#-animation-and-transition-properties)
   - [ Transitions](#transitions)
   - [ Animations](#animations)
   - [ Transform Properties](#transform-properties)
10. [ Visual Effects](#visual-effects)
    - [ Shadows](#shadows)
    - [ Opacity and Visibility](#opacity-and-visibility)
    - [ Filters](#filters)
11. [ List Properties](#list-properties)
12. [ Table Properties](#table-properties)
13. [ Units of Measurement](#units-of-measurement)
    - [ Length Units](#length-units)
    - [ Color Units](#color-units)
14. [ Media Queries](#media-queries)
    - [ Syntax](#syntax)
    - [ Common Media Features](#common-media-features)
    - [ Breakpoint Examples](#breakpoint-examples)
15. [ CSS Functions](#css-functions)
    - [ Calculation Functions](#calculation-functions)
    - [ Color Functions](#color-functions)
    - [ Gradient Functions](#gradient-functions)

## CSS Syntax

| Component   | Description             | Example                               |
| ----------- | ----------------------- | ------------------------------------- |
| Selector    | Element to style        | `h1`, `.class`, `#id`                 |
| Property    | Style attribute         | `color`, `font-size`, `margin`        |
| Value       | Property setting        | `red`, `16px`, `10px`                 |
| Declaration | Property-value pair     | `color: red;`                         |
| Rule        | Selector + declarations | `h1 { color: red; font-size: 24px; }` |

## CSS Selectors

### Basic Selectors

| Selector        | Description        | Example                              | Targets                           |
| --------------- | ------------------ | ------------------------------------ | --------------------------------- |
| `*`             | Universal selector | `* { margin: 0; }`                   | All elements                      |
| `element`       | Type selector      | `p { color: blue; }`                 | All `<p>` elements                |
| `.class`        | Class selector     | `.highlight { background: yellow; }` | Elements with class="highlight"   |
| `#id`           | ID selector        | `#header { width: 100%; }`           | Element with id="header"          |
| `element.class` | Element with class | `p.intro { font-weight: bold; }`     | `<p>` elements with class="intro" |

### Combinator Selectors

| Selector | Description      | Example                         | Targets                          |
| -------- | ---------------- | ------------------------------- | -------------------------------- |
| `A B`    | Descendant       | `div p { color: red; }`         | All `<p>` inside `<div>`         |
| `A > B`  | Child            | `ul > li { list-style: none; }` | Direct `<li>` children of `<ul>` |
| `A + B`  | Adjacent sibling | `h1 + p { margin-top: 0; }`     | `<p>` immediately after `<h1>`   |
| `A ~ B`  | General sibling  | `h1 ~ p { color: gray; }`       | All `<p>` siblings after `<h1>`  |

### Attribute Selectors

| Selector          | Description   | Example                                    |
| ----------------- | ------------- | ------------------------------------------ | ------ | ------------------------------- |
| `[attr]`          | Has attribute | `[title] { cursor: help; }`                |
| `[attr="value"]`  | Exact match   | `[type="text"] { border: 1px solid; }`     |
| `[attr^="value"]` | Starts with   | `[href^="https"] { color: green; }`        |
| `[attr$="value"]` | Ends with     | `[href$=".pdf"] { color: red; }`           |
| `[attr*="value"]` | Contains      | `[class*="btn"] { padding: 10px; }`        |
| `[attr~="value"]` | Word match    | `[class~="active"] { font-weight: bold; }` |
| `[attr            | ="value"]`    | Starts with word                           | `[lang | ="en"] { font-family: Arial; }` |

### Pseudo-classes

| Selector          | Description           | Example                                          |
| ----------------- | --------------------- | ------------------------------------------------ |
| `:hover`          | Mouse over            | `a:hover { color: red; }`                        |
| `:focus`          | Element focused       | `input:focus { outline: 2px solid blue; }`       |
| `:active`         | Element being clicked | `button:active { transform: scale(0.98); }`      |
| `:visited`        | Visited link          | `a:visited { color: purple; }`                   |
| `:link`           | Unvisited link        | `a:link { color: blue; }`                        |
| `:first-child`    | First child           | `li:first-child { font-weight: bold; }`          |
| `:last-child`     | Last child            | `li:last-child { border-bottom: none; }`         |
| `:nth-child(n)`   | Nth child             | `tr:nth-child(even) { background: #f0f0f0; }`    |
| `:nth-of-type(n)` | Nth of type           | `h2:nth-of-type(2) { color: red; }`              |
| `:first-of-type`  | First of type         | `img:first-of-type { float: left; }`             |
| `:last-of-type`   | Last of type          | `p:last-of-type { margin-bottom: 0; }`           |
| `:only-child`     | Only child            | `li:only-child { text-align: center; }`          |
| `:empty`          | Empty element         | `div:empty { display: none; }`                   |
| `:not(selector)`  | Not matching          | `input:not([type="hidden"]) { display: block; }` |
| `:enabled`        | Enabled form element  | `input:enabled { background: white; }`           |
| `:disabled`       | Disabled form element | `input:disabled { background: #ccc; }`           |
| `:checked`        | Checked input         | `input:checked { accent-color: green; }`         |
| `:required`       | Required input        | `input:required { border-color: red; }`          |
| `:valid`          | Valid input           | `input:valid { border-color: green; }`           |
| `:invalid`        | Invalid input         | `input:invalid { border-color: red; }`           |

### Pseudo-elements

| Selector         | Description           | Example                                |
| ---------------- | --------------------- | -------------------------------------- |
| `::before`       | Insert before content | `p::before { content: "→ "; }`         |
| `::after`        | Insert after content  | `p::after { content: " ←"; }`          |
| `::first-line`   | First line of text    | `p::first-line { font-weight: bold; }` |
| `::first-letter` | First letter          | `p::first-letter { font-size: 2em; }`  |
| `::selection`    | Selected text         | `::selection { background: yellow; }`  |
| `::placeholder`  | Input placeholder     | `::placeholder { color: #999; }`       |

## Text Properties

| Property          | Description          | Values                                          | Example                                                    |
| ----------------- | -------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `color`           | Text color           | Color values                                    | `color: red;` `color: #ff0000;` `color: rgb(255,0,0);`     |
| `font-family`     | Font typeface        | Font names                                      | `font-family: Arial, sans-serif;`                          |
| `font-size`       | Font size            | Length values                                   | `font-size: 16px;` `font-size: 1.2em;` `font-size: large;` |
| `font-weight`     | Font thickness       | `normal`, `bold`, `100-900`                     | `font-weight: bold;` `font-weight: 600;`                   |
| `font-style`      | Font style           | `normal`, `italic`, `oblique`                   | `font-style: italic;`                                      |
| `font-variant`    | Font variant         | `normal`, `small-caps`                          | `font-variant: small-caps;`                                |
| `line-height`     | Line spacing         | Number, length, %                               | `line-height: 1.5;` `line-height: 24px;`                   |
| `text-align`      | Horizontal alignment | `left`, `right`, `center`, `justify`            | `text-align: center;`                                      |
| `text-decoration` | Text decoration      | `none`, `underline`, `overline`, `line-through` | `text-decoration: underline;`                              |
| `text-transform`  | Text case            | `none`, `uppercase`, `lowercase`, `capitalize`  | `text-transform: uppercase;`                               |
| `text-indent`     | First line indent    | Length values                                   | `text-indent: 2em;`                                        |
| `letter-spacing`  | Character spacing    | Length values                                   | `letter-spacing: 2px;`                                     |
| `word-spacing`    | Word spacing         | Length values                                   | `word-spacing: 4px;`                                       |
| `white-space`     | Whitespace handling  | `normal`, `nowrap`, `pre`, `pre-wrap`           | `white-space: nowrap;`                                     |
| `text-overflow`   | Overflow handling    | `clip`, `ellipsis`                              | `text-overflow: ellipsis;`                                 |
| `text-shadow`     | Text shadow          | `x y blur color`                                | `text-shadow: 2px 2px 4px rgba(0,0,0,0.5);`                |

## Background Properties

| Property                | Description      | Values                                        | Example                                            |
| ----------------------- | ---------------- | --------------------------------------------- | -------------------------------------------------- |
| `background-color`      | Background color | Color values                                  | `background-color: #f0f0f0;`                       |
| `background-image`      | Background image | `url()`, `none`                               | `background-image: url('image.jpg');`              |
| `background-repeat`     | Image repetition | `repeat`, `no-repeat`, `repeat-x`, `repeat-y` | `background-repeat: no-repeat;`                    |
| `background-position`   | Image position   | Position values                               | `background-position: center top;`                 |
| `background-size`       | Image size       | `auto`, `cover`, `contain`, lengths           | `background-size: cover;`                          |
| `background-attachment` | Image attachment | `scroll`, `fixed`, `local`                    | `background-attachment: fixed;`                    |
| `background-origin`     | Position origin  | `border-box`, `padding-box`, `content-box`    | `background-origin: content-box;`                  |
| `background-clip`       | Clipping area    | `border-box`, `padding-box`, `content-box`    | `background-clip: padding-box;`                    |
| `background`            | Shorthand        | Combined values                               | `background: #fff url('bg.jpg') no-repeat center;` |

## Box Model Properties

### Dimensions

| Property     | Description    | Values                      | Example                           |
| ------------ | -------------- | --------------------------- | --------------------------------- |
| `width`      | Element width  | Length, %, `auto`           | `width: 300px;` `width: 50%;`     |
| `height`     | Element height | Length, %, `auto`           | `height: 200px;` `height: 100vh;` |
| `min-width`  | Minimum width  | Length, %                   | `min-width: 200px;`               |
| `max-width`  | Maximum width  | Length, %, `none`           | `max-width: 800px;`               |
| `min-height` | Minimum height | Length, %                   | `min-height: 100px;`              |
| `max-height` | Maximum height | Length, %, `none`           | `max-height: 400px;`              |
| `box-sizing` | Box model      | `content-box`, `border-box` | `box-sizing: border-box;`         |

### Margin

| Property        | Description   | Values            | Example                              |
| --------------- | ------------- | ----------------- | ------------------------------------ |
| `margin`        | All margins   | Length, %, `auto` | `margin: 10px;` `margin: 10px 20px;` |
| `margin-top`    | Top margin    | Length, %, `auto` | `margin-top: 10px;`                  |
| `margin-right`  | Right margin  | Length, %, `auto` | `margin-right: 20px;`                |
| `margin-bottom` | Bottom margin | Length, %, `auto` | `margin-bottom: 10px;`               |
| `margin-left`   | Left margin   | Length, %, `auto` | `margin-left: 20px;`                 |

### Padding

| Property         | Description    | Values    | Example                                |
| ---------------- | -------------- | --------- | -------------------------------------- |
| `padding`        | All padding    | Length, % | `padding: 15px;` `padding: 10px 20px;` |
| `padding-top`    | Top padding    | Length, % | `padding-top: 10px;`                   |
| `padding-right`  | Right padding  | Length, % | `padding-right: 15px;`                 |
| `padding-bottom` | Bottom padding | Length, % | `padding-bottom: 10px;`                |
| `padding-left`   | Left padding   | Length, % | `padding-left: 15px;`                  |

### Border

| Property          | Description     | Values                              | Example                                       |
| ----------------- | --------------- | ----------------------------------- | --------------------------------------------- |
| `border`          | All borders     | `width style color`                 | `border: 2px solid #000;`                     |
| `border-width`    | Border width    | Length                              | `border-width: 3px;` `border-width: 1px 2px;` |
| `border-style`    | Border style    | `solid`, `dotted`, `dashed`, `none` | `border-style: dashed;`                       |
| `border-color`    | Border color    | Color values                        | `border-color: red;`                          |
| `border-top`      | Top border      | `width style color`                 | `border-top: 1px solid #ccc;`                 |
| `border-right`    | Right border    | `width style color`                 | `border-right: 2px dotted blue;`              |
| `border-bottom`   | Bottom border   | `width style color`                 | `border-bottom: 3px double green;`            |
| `border-left`     | Left border     | `width style color`                 | `border-left: 1px dashed red;`                |
| `border-radius`   | Rounded corners | Length, %                           | `border-radius: 10px;` `border-radius: 50%;`  |
| `border-collapse` | Table borders   | `separate`, `collapse`              | `border-collapse: collapse;`                  |

## Layout Properties

### Display

| Property  | Value          | Description                  | Example                  |
| --------- | -------------- | ---------------------------- | ------------------------ |
| `display` | `block`        | Block-level element          | `display: block;`        |
| `display` | `inline`       | Inline element               | `display: inline;`       |
| `display` | `inline-block` | Inline with block properties | `display: inline-block;` |
| `display` | `none`         | Hide element                 | `display: none;`         |
| `display` | `flex`         | Flexbox container            | `display: flex;`         |
| `display` | `grid`         | Grid container               | `display: grid;`         |
| `display` | `table`        | Table display                | `display: table;`        |
| `display` | `table-cell`   | Table cell display           | `display: table-cell;`   |

### Position

| Property   | Value      | Description                 | Example                                |
| ---------- | ---------- | --------------------------- | -------------------------------------- |
| `position` | `static`   | Default positioning         | `position: static;`                    |
| `position` | `relative` | Relative to normal position | `position: relative; top: 10px;`       |
| `position` | `absolute` | Absolute positioning        | `position: absolute; top: 0; left: 0;` |
| `position` | `fixed`    | Fixed to viewport           | `position: fixed; top: 0; right: 0;`   |
| `position` | `sticky`   | Sticky positioning          | `position: sticky; top: 0;`            |
| `top`      |            | Distance from top           | `top: 20px;` `top: 10%;`               |
| `right`    |            | Distance from right         | `right: 0;`                            |
| `bottom`   |            | Distance from bottom        | `bottom: 10px;`                        |
| `left`     |            | Distance from left          | `left: 50px;`                          |
| `z-index`  |            | Stacking order              | `z-index: 100;`                        |

### Float and Clear

| Property | Values                          | Description   | Example        |
| -------- | ------------------------------- | ------------- | -------------- |
| `float`  | `left`, `right`, `none`         | Float element | `float: left;` |
| `clear`  | `left`, `right`, `both`, `none` | Clear floats  | `clear: both;` |

### Overflow

| Property     | Values                                | Description         | Example               |
| ------------ | ------------------------------------- | ------------------- | --------------------- |
| `overflow`   | `visible`, `hidden`, `scroll`, `auto` | Content overflow    | `overflow: hidden;`   |
| `overflow-x` | `visible`, `hidden`, `scroll`, `auto` | Horizontal overflow | `overflow-x: scroll;` |
| `overflow-y` | `visible`, `hidden`, `scroll`, `auto` | Vertical overflow   | `overflow-y: auto;`   |

## Flexbox Properties

### Container Properties

| Property          | Values                                                                              | Description          | Example                         |
| ----------------- | ----------------------------------------------------------------------------------- | -------------------- | ------------------------------- |
| `display`         | `flex`, `inline-flex`                                                               | Enable flexbox       | `display: flex;`                |
| `flex-direction`  | `row`, `column`, `row-reverse`, `column-reverse`                                    | Main axis direction  | `flex-direction: column;`       |
| `flex-wrap`       | `nowrap`, `wrap`, `wrap-reverse`                                                    | Item wrapping        | `flex-wrap: wrap;`              |
| `flex-flow`       | Direction + wrap                                                                    | Shorthand            | `flex-flow: row wrap;`          |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` | Main axis alignment  | `justify-content: center;`      |
| `align-items`     | `stretch`, `flex-start`, `flex-end`, `center`, `baseline`                           | Cross axis alignment | `align-items: center;`          |
| `align-content`   | `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`      | Multi-line alignment | `align-content: space-between;` |
| `gap`             | Length                                                                              | Gap between items    | `gap: 20px;`                    |

### Item Properties

| Property      | Values                                                            | Description          | Example                 |
| ------------- | ----------------------------------------------------------------- | -------------------- | ----------------------- |
| `flex-grow`   | Number                                                            | Growth factor        | `flex-grow: 1;`         |
| `flex-shrink` | Number                                                            | Shrink factor        | `flex-shrink: 0;`       |
| `flex-basis`  | Length, %, `auto`                                                 | Initial size         | `flex-basis: 200px;`    |
| `flex`        | grow shrink basis                                                 | Shorthand            | `flex: 1 0 auto;`       |
| `align-self`  | `auto`, `stretch`, `flex-start`, `flex-end`, `center`, `baseline` | Individual alignment | `align-self: flex-end;` |
| `order`       | Number                                                            | Display order        | `order: 2;`             |

## Grid Properties

### Container Properties

| Property                | Values                                                                               | Description             | Example                                                |
| ----------------------- | ------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------------------------ |
| `display`               | `grid`, `inline-grid`                                                                | Enable grid             | `display: grid;`                                       |
| `grid-template-columns` | Track sizes                                                                          | Column tracks           | `grid-template-columns: 1fr 2fr 1fr;`                  |
| `grid-template-rows`    | Track sizes                                                                          | Row tracks              | `grid-template-rows: 100px auto 50px;`                 |
| `grid-template-areas`   | Area names                                                                           | Named areas             | `grid-template-areas: "header header" "main sidebar";` |
| `grid-template`         | Combined template                                                                    | Shorthand               | `grid-template: "header" 60px "main" 1fr / 1fr;`       |
| `gap`                   | Length                                                                               | Gap between tracks      | `gap: 20px;`                                           |
| `row-gap`               | Length                                                                               | Gap between rows        | `row-gap: 10px;`                                       |
| `column-gap`            | Length                                                                               | Gap between columns     | `column-gap: 15px;`                                    |
| `justify-items`         | `start`, `end`, `center`, `stretch`                                                  | Item alignment (inline) | `justify-items: center;`                               |
| `align-items`           | `start`, `end`, `center`, `stretch`                                                  | Item alignment (block)  | `align-items: center;`                                 |
| `justify-content`       | `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, `space-evenly` | Grid alignment (inline) | `justify-content: center;`                             |
| `align-content`         | `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, `space-evenly` | Grid alignment (block)  | `align-content: center;`                               |

### Item Properties

| Property            | Values                                           | Description             | Example                 |
| ------------------- | ------------------------------------------------ | ----------------------- | ----------------------- |
| `grid-column-start` | Line number/name                                 | Column start            | `grid-column-start: 2;` |
| `grid-column-end`   | Line number/name                                 | Column end              | `grid-column-end: 4;`   |
| `grid-column`       | start / end                                      | Column shorthand        | `grid-column: 1 / 3;`   |
| `grid-row-start`    | Line number/name                                 | Row start               | `grid-row-start: 1;`    |
| `grid-row-end`      | Line number/name                                 | Row end                 | `grid-row-end: span 2;` |
| `grid-row`          | start / end                                      | Row shorthand           | `grid-row: 2 / 4;`      |
| `grid-area`         | name / row-start / col-start / row-end / col-end | Area placement          | `grid-area: header;`    |
| `justify-self`      | `start`, `end`, `center`, `stretch`              | Self alignment (inline) | `justify-self: center;` |
| `align-self`        | `start`, `end`, `center`, `stretch`              | Self alignment (block)  | `align-self: end;`      |

## Animation and Transition Properties

### Transitions

| Property                     | Values          | Description              | Example                                    |
| ---------------------------- | --------------- | ------------------------ | ------------------------------------------ |
| `transition-property`        | Property names  | Properties to transition | `transition-property: color, background;`  |
| `transition-duration`        | Time            | Transition duration      | `transition-duration: 0.3s;`               |
| `transition-timing-function` | Timing function | Easing function          | `transition-timing-function: ease-in-out;` |
| `transition-delay`           | Time            | Delay before transition  | `transition-delay: 0.1s;`                  |
| `transition`                 | Combined        | Shorthand                | `transition: all 0.3s ease-in-out;`        |

### Animations

| Property                    | Values                                  | Description            | Example                                       |
| --------------------------- | --------------------------------------- | ---------------------- | --------------------------------------------- |
| `animation-name`            | Keyframe name                           | Animation name         | `animation-name: slideIn;`                    |
| `animation-duration`        | Time                                    | Animation duration     | `animation-duration: 2s;`                     |
| `animation-timing-function` | Timing function                         | Easing function        | `animation-timing-function: linear;`          |
| `animation-delay`           | Time                                    | Delay before animation | `animation-delay: 0.5s;`                      |
| `animation-iteration-count` | Number, `infinite`                      | Repeat count           | `animation-iteration-count: 3;`               |
| `animation-direction`       | `normal`, `reverse`, `alternate`        | Animation direction    | `animation-direction: alternate;`             |
| `animation-fill-mode`       | `none`, `forwards`, `backwards`, `both` | Fill mode              | `animation-fill-mode: forwards;`              |
| `animation-play-state`      | `running`, `paused`                     | Play state             | `animation-play-state: paused;`               |
| `animation`                 | Combined                                | Shorthand              | `animation: slideIn 2s ease-in-out infinite;` |

### Transform Properties

| Property           | Function          | Description        | Example                              |
| ------------------ | ----------------- | ------------------ | ------------------------------------ |
| `transform`        | `translate(x, y)` | Move element       | `transform: translate(50px, 100px);` |
| `transform`        | `translateX(x)`   | Move horizontally  | `transform: translateX(50px);`       |
| `transform`        | `translateY(y)`   | Move vertically    | `transform: translateY(100px);`      |
| `transform`        | `scale(x, y)`     | Scale element      | `transform: scale(1.5, 2);`          |
| `transform`        | `scaleX(x)`       | Scale horizontally | `transform: scaleX(2);`              |
| `transform`        | `scaleY(y)`       | Scale vertically   | `transform: scaleY(0.5);`            |
| `transform`        | `rotate(angle)`   | Rotate element     | `transform: rotate(45deg);`          |
| `transform`        | `skew(x, y)`      | Skew element       | `transform: skew(20deg, 10deg);`     |
| `transform-origin` | Position          | Transform origin   | `transform-origin: top left;`        |

## Visual Effects

### Shadows

| Property      | Values                  | Description    | Example                                     |
| ------------- | ----------------------- | -------------- | ------------------------------------------- |
| `box-shadow`  | `x y blur spread color` | Element shadow | `box-shadow: 2px 2px 10px rgba(0,0,0,0.3);` |
| `text-shadow` | `x y blur color`        | Text shadow    | `text-shadow: 1px 1px 2px #000;`            |

### Opacity and Visibility

| Property     | Values              | Description          | Example               |
| ------------ | ------------------- | -------------------- | --------------------- |
| `opacity`    | 0-1                 | Element transparency | `opacity: 0.7;`       |
| `visibility` | `visible`, `hidden` | Element visibility   | `visibility: hidden;` |

### Filters

| Property | Function          | Description  | Example                      |
| -------- | ----------------- | ------------ | ---------------------------- |
| `filter` | `blur(px)`        | Blur effect  | `filter: blur(5px);`         |
| `filter` | `brightness(%)`   | Brightness   | `filter: brightness(150%);`  |
| `filter` | `contrast(%)`     | Contrast     | `filter: contrast(200%);`    |
| `filter` | `grayscale(%)`    | Grayscale    | `filter: grayscale(100%);`   |
| `filter` | `sepia(%)`        | Sepia tone   | `filter: sepia(50%);`        |
| `filter` | `saturate(%)`     | Saturation   | `filter: saturate(200%);`    |
| `filter` | `hue-rotate(deg)` | Hue rotation | `filter: hue-rotate(90deg);` |

## List Properties

| Property              | Values                                        | Description         | Example                                |
| --------------------- | --------------------------------------------- | ------------------- | -------------------------------------- |
| `list-style-type`     | `disc`, `circle`, `square`, `decimal`, `none` | List marker type    | `list-style-type: square;`             |
| `list-style-position` | `inside`, `outside`                           | Marker position     | `list-style-position: inside;`         |
| `list-style-image`    | `url()`, `none`                               | Custom marker image | `list-style-image: url('bullet.png');` |
| `list-style`          | Combined                                      | Shorthand           | `list-style: square inside;`           |

## Table Properties

| Property          | Values                 | Description        | Example                      |
| ----------------- | ---------------------- | ------------------ | ---------------------------- |
| `border-collapse` | `separate`, `collapse` | Border model       | `border-collapse: collapse;` |
| `border-spacing`  | Length                 | Cell spacing       | `border-spacing: 2px;`       |
| `table-layout`    | `auto`, `fixed`        | Layout algorithm   | `table-layout: fixed;`       |
| `caption-side`    | `top`, `bottom`        | Caption position   | `caption-side: bottom;`      |
| `empty-cells`     | `show`, `hide`         | Empty cell borders | `empty-cells: hide;`         |

## Units of Measurement

### Length Units

| Unit   | Description                | Example              | Relative to       |
| ------ | -------------------------- | -------------------- | ----------------- |
| `px`   | Pixels                     | `font-size: 16px;`   | Screen resolution |
| `em`   | Element's font size        | `margin: 1.5em;`     | Parent element    |
| `rem`  | Root element's font size   | `padding: 2rem;`     | Root element      |
| `%`    | Percentage                 | `width: 50%;`        | Parent element    |
| `vw`   | Viewport width             | `width: 100vw;`      | Viewport          |
| `vh`   | Viewport height            | `height: 100vh;`     | Viewport          |
| `vmin` | Smaller viewport dimension | `font-size: 4vmin;`  | Viewport          |
| `vmax` | Larger viewport dimension  | `font-size: 4vmax;`  | Viewport          |
| `cm`   | Centimeters                | `margin: 2cm;`       | Absolute          |
| `mm`   | Millimeters                | `border: 1mm solid;` | Absolute          |
| `in`   | Inches                     | `width: 3in;`        | Absolute          |
| `pt`   | Points                     | `font-size: 12pt;`   | Absolute          |
| `pc`   | Picas                      | `margin: 1pc;`       | Absolute          |

### Color Units

| Format       | Description                             | Example                           |
| ------------ | --------------------------------------- | --------------------------------- |
| Named colors | Predefined names                        | `color: red;` `color: lightblue;` |
| Hexadecimal  | #RRGGBB or #RGB                         | `color: #ff0000;` `color: #f00;`  |
| RGB          | rgb(red, green, blue)                   | `color: rgb(255, 0, 0);`          |
| RGBA         | rgba(red, green, blue, alpha)           | `color: rgba(255, 0, 0, 0.5);`    |
| HSL          | hsl(hue, saturation, lightness)         | `color: hsl(0, 100%, 50%);`       |
| HSLA         | hsla(hue, saturation, lightness, alpha) | `color: hsla(0, 100%, 50%, 0.5);` |

## Media Queries

### Syntax

| Component  | Description           | Example                                    |
| ---------- | --------------------- | ------------------------------------------ |
| `@media`   | Media rule            | `@media screen and (max-width: 768px) { }` |
| Media type | Screen, print, etc.   | `screen`, `print`, `all`                   |
| Feature    | Device characteristic | `width`, `height`, `orientation`           |
| Operator   | Logical operator      | `and`, `or`, `not`                         |

### Common Media Features

| Feature        | Description        | Example                           |
| -------------- | ------------------ | --------------------------------- |
| `width`        | Viewport width     | `@media (width: 800px)`           |
| `min-width`    | Minimum width      | `@media (min-width: 768px)`       |
| `max-width`    | Maximum width      | `@media (max-width: 1200px)`      |
| `height`       | Viewport height    | `@media (height: 600px)`          |
| `min-height`   | Minimum height     | `@media (min-height: 400px)`      |
| `max-height`   | Maximum height     | `@media (max-height: 800px)`      |
| `orientation`  | Screen orientation | `@media (orientation: landscape)` |
| `aspect-ratio` | Width/height ratio | `@media (aspect-ratio: 16/9)`     |
| `resolution`   | Device resolution  | `@media (min-resolution: 200px)`  |

### Breakpoint Examples

| Breakpoint    | Media Query                                         | Target              |
| ------------- | --------------------------------------------------- | ------------------- |
| Mobile        | `@media (max-width: 767px)`                         | Small screens       |
| Tablet        | `@media (min-width: 768px) and (max-width: 1023px)` | Medium screens      |
| Desktop       | `@media (min-width: 1024px)`                        | Large screens       |
| Large Desktop | `@media (min-width: 1200px)`                        | Extra large screens |

## CSS Functions

### Calculation Functions

| Function  | Description               | Example                              |
| --------- | ------------------------- | ------------------------------------ |
| `calc()`  | Mathematical calculation  | `width: calc(100% - 20px);`          |
| `min()`   | Minimum value             | `width: min(100%, 500px);`           |
| `max()`   | Maximum value             | `width: max(300px, 50%);`            |
| `clamp()` | Clamp between min and max | `font-size: clamp(16px, 4vw, 24px);` |

### Color Functions

| Function | Description    | Example                           |
| -------- | -------------- | --------------------------------- |
| `rgb()`  | RGB color      | `color: rgb(255, 0, 0);`          |
| `rgba()` | RGB with alpha | `color: rgba(255, 0, 0, 0.5);`    |
| `hsl()`  | HSL color      | `color: hsl(0, 100%, 50%);`       |
| `hsla()` | HSL with alpha | `color: hsla(0, 100%, 50%, 0.5);` |

### Gradient Functions

| Function         | Description                                                                       | Example                                                                                  |
| ---------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Linear**       | Gradient changes at a constant rate. Simple straight-line interpolation.          | `linear-gradient(red, blue)` creates a smooth fade from red to blue.                     |
| **Radial**       | Gradient radiates outward from a central point in a circular or elliptical shape. | `radial-gradient(circle, red, blue)` starts red at the center, fading to blue.           |
| **Conic**        | Gradient rotates around a center point, creating a pie-chart-like effect.         | `conic-gradient(red, yellow, green)` sweeps through colors like a color wheel.           |
| **Repeating**    | Repeats a gradient pattern until filling the space.                               | `repeating-linear-gradient(45deg, red, red 10px, blue 10px, blue 20px)` creates stripes. |
| **Custom Stops** | Allows precise control over color transition points.                              | `linear-gradient(red 0%, yellow 50%, green 100%)` places yellow at the midpoint.         |

**[⬆ Back to Top](#table-of-contents)**
