//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username="lufy";
let password="1234luffy";
let input_username="lufy";
let input_password="12334fujd";
if(username==input_username){
  if(password==input_password){
    console.log("user can login");
  }
  else{
    console.log("password incorrect: user can't login");
  }
}
else{
  console.log("username not found: user can't login");
}