var v=new Map();
v.set(101,"Rakesh");
v.set(102,"ULLU");
v.set(103,"RAJUU");
v.set(104,"Chota Bheem");
v.set(105,"OILIVA");
console.log(v);
console.log(v.has(105)); // Has is used to check if value has or not(TRUE)
console.log(v.has(104));//True
console.log(v.has(1000));//False beacuse it was not found in v Map;