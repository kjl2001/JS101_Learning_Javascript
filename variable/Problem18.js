//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.
let array = ["a","b","c","d"];
let bag="";
for(i=1;i<array.length;i++){
  bag = bag + i +"." + array[i] + " ";
}  console.log(bag);