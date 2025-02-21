function ReportGenrator()
{
this.title="FINAL REPORT";
this.getReport=function()
{
console.log("setting up a reporter function " + this.title);
var abcd= this;
return function(){
console.log(abcd.title);
console.log("SOME DATA");
};
};
}

var rg=new ReportGenrator();
var reporter=rg.getReport();

