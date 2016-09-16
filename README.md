<snippet>
  <content>
# LICONS
In this theme you will find 108 LICONS (Line Animated Icons). The theme is based on Google's material design colors.
There are 72 monochromatic Icons(6 dozens) and 36 multi-COLORED Icons(3 dozens). You can easily find them on each ICONS SET section.

## Installation
You have just to unzip the download pack.

##HTML Structure

Here is the "wineglass" svg icon on index.html.


In index.html you can find the svg ICONS. You can edit the fill-color, stroke-color and stroke-width via html file.

But it's much easier using CSS! Take a look below.


##CSS STRACTURE

Making stylish changes for monochromatic icons

You can see the wineglass icon.

In index.html you can find every svg icon and edit the fill-color, stroke-color and stroke-width.

Although, it is more easier for you to do this with CSS! You just have to pick the desired svg icon using the id. Here is an example. Add the following code at the bottom of the licons.css file:

```css
 #wineglass *{
    fill: violet;
    stroke: limegreen;
    stroke-width: 15px;
}
```


Making stylish changes for multi-colored icons

You can change the attributes of any icon using custom css for each svg (or making the changes directly on html code). In case you want to use css for this, you have to add an id in every element(path,circle,polygon) you want to edit. eg.

```css
#ribbon1 path:nth-child(3){
    fill: violet;
    stroke: limegreen;
    stroke-width: 15px;
}
 ```

You can add any CSS property you like. Let's say you want to change the size of an svg icon. Just pick the id of an icon and do the following:

```css
#wineglass{
    width:75px;
    background-color:red;
}
```

So, to ensure that your new styles are applied, make sure that there isn't a style lower in the CSS file that is being applied after yours. So place your style at the bottom of the licons.css file.

##JAVASCRIPT STRACTURE

Making time changes

Every svg icon has a unique id and it is related with a Javascript code-line.

Here is an example for wineglass icon
```javascript 
    /*---------------------------ICONS SET 1----------------------------*/
    //First(1) row
    new Vivus('wineglass', { forceRender:true});
```
The forceRender attribute is used for IE svg animation support.

In case you want to change the animation duration you can add the duration attribute
```javascript   
    /*---------------------------ICONS SET 1----------------------------*/
    //First(1) row
    new Vivus('wineglass', { forceRender:true, duration: 450 });
```    
The duration attribute is responsible for the time of the animation(change this to whatever you want!).

##PICKING AN ICON

In order to use LICONS to your own project you need to

pick the desired html svg ICON element from index.html
add the desired js line code of the element you choose in your js file
```javascript
$(function() {
new Vivus('wineglass', { forceRender:true});
});
```
add to your html file the vivus.js file like this
```html
<script src="js/vivus.min.js"></script>
```
It's up to you to add custom CSS!

##SOURCES AND CREDITS

CSS files
- https://daneden.github.io/animate.css/ animate.css MIT License

Icons 
- http://ionicons.com/ Ionicons MIT License

Javascript files
- https://maxwellito.github.io/vivus/ vivus.js MIT License
- http://mynameismatthieu.com/WOW/ wow.js MIT License
- https://jquery.com/ jQuery

Others
- http://getbootstrap.com/

</content>
</snippet>
