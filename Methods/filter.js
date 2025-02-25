var x=[10,20,30445,42,55460,555,8,54,987,2];
function abcd(n)
{
return n<50; 
}

var y=x.filter(abcd);  //I WANT ALL THOSE NUMBER WHICH ARE LESS THAN 50, SO I CREATED A FILTER I GAV FUNCTION TO THE FILTER FUNCTION.
console.log(x);
console.log(y);