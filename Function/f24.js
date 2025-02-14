function sam(x,y) // 100 AND 200 IS RECIVED TO x AND y PARAMETER.
{
return x+y;
}
function tom(t,p,q)
{
return t(p,q); // IN t THERE IS ADDRESS OF SAM FUNCTION SO THAT RUNS AND PASSES THE p AND q VALUES AS ARGUMENT TO x AND y
}
console.log(tom(sam,100,200)); // WE ARE PASSING sam FUNCTIONS ADDRESS AND 2 VALUES AS ARGUMENTS TO TOM.