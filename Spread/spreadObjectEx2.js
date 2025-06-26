let a={
x:10,
y:20
};

let b={
p:500,
q:1000
};

let c={
u:70,
y:100
};

let d={...a,...b,...c} //Object d inherihit from a,b,c object by using spread.
console.log(d);