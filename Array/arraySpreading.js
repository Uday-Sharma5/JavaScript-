function abcd(a,b,c,d)
{
console.log(a,b,c,d);
}
var m=[100,200,300,400];
abcd(...m);//by using spread syntax we spread all the elements of the array in function abcd parameters