// NOW PROGRAMMER WANTS interval OF BASE CLASS RUNS AND AFTER THAT DERIVED CLASS interval ALSO RUNS.

class Movie
{
start()
{
console.log("welcome");
}
interval()
{
console.log("Have a Coffe for Rs-50/-");
}
end()
{
console.log("Thank You, Come Again");
}
}

class JungleBook extends Movie
{
reelOne()
{
console.log("Mowgli enters the jungle");
}
reelTwo()
{
console.log("Bagheera saves mowgli");
}
interval()
{
super.interval() // WE CAN ACCESS THE MEMBER OF BASE CLASS BY USING super KEYWORD.
// You override a method in the child class.But still want to call the original method from the parent class within the overridden method.
console.log("AND have a tea for 20Rs/-");
}
}

let Jb=new JungleBook();
Jb.start();
Jb.reelOne();
Jb.interval();
Jb.reelTwo();
Jb.end()