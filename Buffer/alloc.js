var b=Buffer.alloc(10); //10 bytes get allocated by in b.
console.log(b);
b[0]=52; // value of byte gets an hexadecimal value of the number 
b[1]=60;
b[2]=45;
console.log(b);
console.log(b[2]); // extracted the element from an array