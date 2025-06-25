//ES6 Feature: Class Declaration
class Movie
{
    //Regular method inside a class
    start()
    {
        console.log("WELCOME");
    }

    interval()
    {
        console.log("INTERVAL - Have Coffe for Rs-50/-");
    }

    end()
    {
        console.log("Thank You-Come again");
    }
}

//ES6 Feature: Class Inheritance using 'extends'
class JungleBook extends Movie
{
    //Custom method of the child class
    reelOne()
    {
        console.log("Mowgli enters the jungle");
    }

    reelTwo()
    {
        console.log("Bhageera saves Mowgli");
    }
}

//ES6 Feature: Object creation using 'new' keyword with class
let Jb = new JungleBook();

//Method calls from both parent and child class (inheritance in action)
Jb.start();     // Inherited from Movie
Jb.reelOne();   // Defined in JungleBook
Jb.interval();  // Inherited from Movie
Jb.reelTwo();   // Defined in JungleBook
Jb.end();       // Inherited from Movie
