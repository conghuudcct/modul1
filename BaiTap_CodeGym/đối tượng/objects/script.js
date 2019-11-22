/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 50;
    console.log('ok: ' + this.left);
  }

}
// const MOVERIGHT = 39.
// MOVEDOWN = 40,
//   MOVELEFT = 37,
//   MOVEUP = 38;
// function move(e) {
//   switch (e.keyCode) {
//     case MOVERIGHT:
//     case 68:
//       img1.direction = 3;
//       break;
//     case MOVEDOWN:
//       img1.direction = 4;
//       break;
//     case MOVELEFT:
//       img1.direction = 1;
//       break;
//     case MOVEUP:
//       img1.direction = 2;
//       break;

//   }

  let hero = new Hero('temo.png', 50, 50, 200);

  function start() {
    if (hero.left < window.innerWidth - hero.size) {
      hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
  }

  start();