# Pixel aspect ratio helper for Zeplin
## A bookmarklet to help working on Zeplin for displays with non square pixel aspect ratio.

[Zeplin](http://zeplin.io) helps the collaborations between designers and developers but – at now – it doesn’t support non square [pixel aspect ratio (PAR)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=16&cad=rja&uact=8&ved=2ahUKEwju2evk2bjhAhUWwAIHHY-XAzgQFjAPegQIBBAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPixel_aspect_ratio&usg=AOvVaw2uBdzUfwVSXke0BpvuInKs) used often on industrial screens.
If you need to read horizontal measures distorted by a specific pixel aspect ratio you can use this [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet).

![size](https://github.com/teoteo/pixelAspectRatio4Zeplin/size.gif)
![distances](https://github.com/teoteo/pixelAspectRatio4Zeplin/distance.gif)

##How to:

1. Identify the pixel pitch of destination display;
2. copy this piece of JavaScript in a text editor (this is ready for a pixel aspect ratio of 0.93) and set the variables pixePithH and pixePithV
```javascript
javascript:(function(){
	pixePithH=0.1926;
	pixePithV=0.1790;
	document.body.appendChild(document.createElement('script')).src='https://raw.githubusercontent.com/teoteo/pixelAspectRatio4Zeplin/master/zeplinpar.js';
})();
```
3. add the bookmarklet creating a bookmar using the modified JavaScript as address;
4. open your Zeplin screen or component and click on the bookmarklet to activare it.

Thanks to @andretti1977 for his help