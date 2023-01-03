//Problem 1 : Given a string count the number of words in that string


let str="masai school yahoo";
let space=0;
for(i=0;i<str.length;i++){
  if(str[i]==" "){
    space++;
  }
}console.log("Words:", space+1);