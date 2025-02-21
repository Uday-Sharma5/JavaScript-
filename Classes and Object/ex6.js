function ReportGenerator()
{
this.title="Financial Report for year 2024";
this.getReporter=function()
{
return function(){
console.log(this.title); // WHEN WE ARE WRITING this IN INNNER FUNCTION SO IT IS RELATED ONLY INNER FUNCTION NOT THE OUTER FUNCTION THATS WHY this.price IS WRONG
console.log("some reporting data")
}
}
}

var rg=new ReportGenerator();
var reporter=rg.getReporter();
reporter();