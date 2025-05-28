function reduceToMax(intialOrLastGenratedValue,currentValue,index,arr)
{
console.log("reduceToMax got called with : "+intialOrLastGenratedValue,currentValue,index);
if(currentValue>intialOrLastGenratedValue)
{
return currentValue;
}
else
{
return intialOrLastGenratedValue;
}
}

var x=[10,20,87,4598,654,6498,-45,1];
var largest=x.reduceRight(reduceToMax); //works similarly to reduce, but it processes the array from right to left (i.e., from the last element to the first).
console.log(largest);