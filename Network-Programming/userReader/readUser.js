const fs=require('fs')
var userJSONString=fs.readFileSync("users.data","utf-8");
var users=JSON.parse(userJSONString).users;
console.log(users[0].username)
