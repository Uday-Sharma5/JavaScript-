function bulb(w)
{
this.w=w;
this.setwattage=function(w)
{
this.w=w
}
this.getwattage=function()
{
return this.w;
}
bulb.protoype.getbrand=function(){    
// In this, a blueprint object (the prototype) exists which all instances point to.
// We add the getBrand method to the prototype so that memory is used efficiently,
// since the method is shared instead of being created separately for each object.

return "bulb with wattage"+this.w+"is brand of philis"
}
}


var b=new bulb(50);
console.log(b.getbrand()); //code get runs but in object there is nothing about the brand.
console.log(b);
console.log(bulb.prototype)