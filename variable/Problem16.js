//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit
let sum=0;
let limit=9;
for(i=0;i<=limit;i++){
  if(i%3==0){
    sum=sum+i;
  }
  
}console.log(sum);