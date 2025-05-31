function Bulb()
{
this._wattage=0;
}

Object.defineProperty(Bulb.prototype,'wattage',{ //Object.defineProperty() is a method used to add a new property or modify an existing property on an object with more control over how that property behaves.
//obj: The object on which to define the property.
//propertyName: The name of the property to be added or modified.
//descriptor: An object that defines the property’s behavior.


get:function(){
console.log("Getter got called");
return this._wattage;
},
set:function(w){
console.log("setter got called");
this._wattage=w;
}
});

var b=new Bulb();
b.wattage=90;
console.log(b.wattage);