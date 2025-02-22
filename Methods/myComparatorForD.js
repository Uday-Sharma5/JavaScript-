function myComparator(i,j)
{
if(i==j) return 0;
if(i<j) return 1; //FOR DECENDING ORDER
if(i>j) return -1; //FOR DECENDING ORDER
}

var x=[454,4878,658,2,47,65];
var y=x.sort(myComparator);
console.log(x); //IT CHANGE THE ORIGINAL ARRAY ALSO
console.log(y);