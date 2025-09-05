const events=require("events");
class BulbEvent
{
constructor(oldWattage,newWattage,bulb)
{
this._oldWattage=oldWattage;
this._newWattage=newWattage;
this._bulb=bulb;
}
get oldWattage()
{
return this._oldWattage;
}
get newWattage()
{
return this._newWattage;
}
get bulb()
{
return this._bulb;
}
}


class Bulb extends events.EventEmitter
{
constructor()
{
super();
this._wattage=0;
}
set wattage(value)
{
console.log("Setter got called");
if(this._wattage==value) return;
let oldWattage=this._wattage;
this._wattage=value;
var bulbEvent=new BulbEvent(oldWattage,this._wattage,this);
super.emit("wattage changed",bulbEvent);
}
get wattage()
{
console.log("Getter got Called");
return this._wattage;
}
}

var b1=new Bulb();
var b2=new Bulb();
function wattageChangeHandler(BulbEvent)
{
if(BulbEvent.bulb==b1)
{
console.log(`Bulb1: wattage has changed from ${BulbEvent.oldWattage} to ${BulbEvent.newWattage}`);
}

if(BulbEvent.bulb==b2)
{
console.log(`Bulb2: wattage has changed from ${BulbEvent.oldWattage} to ${BulbEvent.newWattage}`);
}
}
b1.on("wattage changed",wattageChangeHandler);
b2.on("wattage changed",wattageChangeHandler);
b1.wattage=60;
console.log(b1.wattage);
b2.wattage=1000;
console.log(b2.wattage);


