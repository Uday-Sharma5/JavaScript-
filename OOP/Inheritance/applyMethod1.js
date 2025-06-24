function Box(h, l) {
  this.height = h;
  this.length = l;
}

function Rectangle() {
  Box.apply(this, arguments); // passes height and length to Box
  this.breadth = 50;
}

var R = new Rectangle(10, 20);
console.log(R);
