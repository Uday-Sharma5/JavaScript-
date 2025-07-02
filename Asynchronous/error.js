var h=process.argv[2];

/*var h = process.argv[2];
process.argv is an array containing the command-line arguments.
process.argv[0] is the path to the Node.js executable.
process.argv[1] is the path to your JavaScript file.
process.argv[2] is the first user-supplied argument.
So this line stores that first argument in the variable h.
*/

if(h=="good") var b=20;
/* if the value of h is equals to string "good" then only the b is decalres and the value is assigned.
*/
// but if the value of h is not "good" and it genrates error. b is not defined. 

console.log(b);