let a = {
  name: "neeraj",
  some(n) {
    console.log(`Hello ${this.name}, ${n}`);
  }
};

let b = {
  name: "uday"
};

let boundFunc = a.some.bind(b, "Sharma");
boundFunc();

//.bind() creates a new function with:

//A permanent this context (i.e., it locks this to a specific object)

//Optional preset arguments (like pre-filling parameters)

//It does NOT call the function — it just returns a new one that you can call later.
