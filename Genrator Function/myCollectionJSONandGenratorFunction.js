var m={
collection:[],
add:function(num){
this.collection.push(num);
},
iterator:function*(){
var index=0;
while(index<this.collection.length)
{
yield this.collection[index];
index++;
}
}
};

m.add(40);
m.add(50);
m.add(100);
m.add(500);
var k=m.iterator();
for(var i of k)
{
console.log(i);
}