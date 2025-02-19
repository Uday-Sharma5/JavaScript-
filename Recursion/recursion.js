function sam(k)
{
if(k==4) return;
sam(k+1);
console.log(k);
}
sam(1);