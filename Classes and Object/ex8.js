function Bulb()
{
this.w=0;
console.log(this);
this.setWattage=function(wattage)
{
console.log(wattage);
this.w=wattage;
}
this.getWattage=function(wattage)
{
console.log(this);
return this.w;
}
}

var b=new Bulb();
b.setWattage(50);
console.log(b.getWattage());