/*var h=process.argv[2];
if(h=="good") b=50;
console.log(b);

if h is not equals to 'good' then it genrates error, to handle this error, we use execptional handeling/errorHandling
*/



var a=process.argv[2];
try{
if(a=="good") b=20;
console.log(b);
}catch(error)                  // catch automatically recives error 
{
console.log(error.message); //it prints the error message
}