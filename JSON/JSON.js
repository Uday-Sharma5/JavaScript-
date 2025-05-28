var b={
w:0,
setWattage:function(wattage)
{
this.w=wattage;
},
getWattage:function()
{
return this.w;
}
};

b.setWattage(240);
console.log(b.getWattage());