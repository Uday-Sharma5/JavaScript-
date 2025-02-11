// IF ANY OR SOME ARGUMENTS IF ONLY PASSED WHEN PROGRAMS RUN IF ANY PARAMETER IS NOT REVICED THEN IT IS DECLARED AS 0.
function add(a,b,c,d)
{
if(a==undefined) a=0;
if(b==undefined) b=0;
if(c==undefined) c=0;
if(d==undefined) d=0;
z=a+b+c+d;
console.log(z);
}

add();   
add(10); 
add(10,10);
add(10,10,10); 
add(10,10,10,10); 

