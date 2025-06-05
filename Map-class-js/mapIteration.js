var v=new Map();
v.set(101,"Dubai");
v.set(102,"USA");
v.set(103,"Russia");
v.set(104,"Japan");
v.set(105,"Austrila");
console.log(v);
v.forEach(function(value,key,map)
{
console.log(value);
console.log(key);
console.log(map);
});