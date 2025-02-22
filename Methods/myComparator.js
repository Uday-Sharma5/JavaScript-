function myComparator(i,j)
{
if(i==j) return 0; // 
if(i<j) return -1;
if(i>j) return 1;
}

var x=[100,500,897,2,54];
var y=x.sort(myComparator);// WE GIVE A FUNCTION NAMED MY COMPARATOR TO SORT.
console.log(y);