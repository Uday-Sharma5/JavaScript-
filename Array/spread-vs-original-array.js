var u=[100,200,300,400,500];
var h=(...u);//all the elements of array u is spreaded element into h, which means all the  is extracted from u.
console.log(m);
conosle.log(h);
h[0]=255;//the value is not changed in original array because h is diffrent object that does not have address of u.
h[2]=20000;
console.log(h);
console.log(u);  


