var hr=require("./hr");
var d1=new hr.Designation(100,"Clerk");
var d2=new hr.Designation(1001,"Security");
var d3=new hr.Designation(1004,"Manager");
var DM=new hr.DesignationManager();
DM.add(d1);
DM.add(d2);
var designation=DM.getAll();
for(var e=0;e<designation.length;e++)
{
console.log(designation[e].code,designation[e].title);
}