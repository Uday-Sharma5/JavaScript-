let Bulb={
_wattage:0,
set Wattage(w)
{
console.log("Setter got called ");
if(w>=0&&w<=240)
{
this._wattage=w;
}
else
{
this._wattage=60;
}
},
get Wattage()
{
console.log("Getter got called");
return this._wattage;
}
};
Bulb.Wattage=100;
console.log(Bulb.Wattage);

