let Rectangle={
height:100,
length:20
};
let Box={
...Rectangle,
breadth:2000
};
console.log(Box); //Object rectangle is spreded in Box Object
let Box2=Box;  // The address of Box object is assigned to Box2
Box2.height=500; // If we change the Property of Box2 Named object then the property of Box Named object is also changed beacuse the address of box and box2 is same.
console.log(Box);
console.log(Box2);

let Box3={...Box2}; //Spreaded the object Box2 in Box3
Box3.height=50000; //so if we change the hieght property

console.log(Box3); //"Box3 has all the properties of Box2 because a new object named Box3 is created."

