//Queue 

var queue=new Array();
queue.push(1000);
queue.push(2000);
queue.push(3000);
queue.push(4000);
queue.push(5000);
console.log("Length : "+ queue.length);

var y;
while(queue.length>0)
{
y=queue.shift();
console.log("Procssed : "+y);
}

//FIRST IN FIRST OUT or LAST IN LAST OUT
//EXAMPLE- LINE OF MOVIE TICKETS
