//If the programmer of the derived class doesn't like some features of the base class, they can override those features by redefining them in the derived class.

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
console.log("have a tea for 20Rs/-");
}
}

let Jb=new JungleBook();
Jb.start();
Jb.reelOne();
Jb.interval();
Jb.reelTwo();
Jb.end();