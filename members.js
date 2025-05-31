function Bulb(w)
{
var wattage=w;   // Private Member
this.getWattage=function()  //getWattage is a priviledge Member
{
return wattage;
}
Bulb.prototype.getBrand=function(){   //getBran is public member
return "Bulb with wattage as : "+this.getWattage()+"is philips"; // PUBLIC MEMEBER THAT WANTS TO ACCESS THE PRIVATE MEMBER,THEY CAN ACCES THROUGH THE PRIVILEDGE MEMBER.   
}
}

var b1=new Bulb(50);
var b2=new Bulb(100);
console.log("Wattage is : ",b1.getWattage());
console.log("Wattage is : ",b2.getWattage());
console.log(b1.getBrand());
console.log(b2.getBrand());
