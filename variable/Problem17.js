//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let sum=0;
let limit=100;
count=0;
for(let start=1;start<=limit;start++){
  if(start%2==0){
    sum=sum+start;
    count++;
  }
  
}console.log(sum/count);