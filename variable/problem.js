let x=10;
let y=20;
let z="30";
let v="40";
console.log(x+y);
console.log(y+z);
console.log(z+v);
console.log(typeof(x+y));
console.log(typeof(y+z));
console.log(typeof(z+v));
console.log(typeof(x+y),x+y);


let item_price=1000;
let money_you_have=500;

if(item_price<=money_you_have){
  console.log("i bought the item");}
else{
  console.log("i don't have money");
}


light="orange";
if(light=="red"){
  console.log("STOP");
}
else if(light=="orange"){
  console.log("GET READY");
}
else if(light=="green"){
  console.log("GO");
}
else{
  console.log("THERE IS A ERROR");
}
let phone,range;
if((phone=="redmi") && (range<=10,000)){
  console.log("buy the phone");
}
else{
  console.log("don't buy");
}

let toothpaste;
(toothpaste="colgate" || "pepsodent" || "patanjali" || "closeup") ? console.log("bring the toothpaste ") : console.log("come back") ;
let goku_sub,goku_marks,passmarks;
(goku_sub=="english" && goku_marks>=passmarks) ? console.log("passed the exam") : console.log("didn't pass") ;

let male_age,female_age;

(male_age>=21 && female_age>=18) ? console.log("can marry") : console.log("report to police") ;

let gander,age;

(gender="male" && age>=21) ? console.log("can marry") : console.log("can't marry") ;

(gender="female" && age>=18) ? console.log("can marry") : console.log("can't marry") ;

//if the gender can get marry.
((gender=="male" && age>=21 ) || (gender=="female" && age>=18)) ? console.log(gender , "can marry") : console.log("can't marry") ;






("luffy"=="zoro"=="sanj") ? console.log("all the names are same") : (("luffy"=="zoro") || ("zoro"=="sanj") || ("sanj"=="luffy")) ? ("luffy"=="zoro") :console.log("luffy & zoro") ? ("luffy"=="luffy") :console.log("luffy & sanj"); :console.log("sanj & zoro"); : console.log("all are different");

if("luffy"=="zoro"=="sanj"){
  console.log("all the names are same");
}
else if(("luffy"=="zoro") || ("zoro"=="sanj") || ("sanj"=="luffy")){
  if("luffy"=="zoro"){
    console.log("luffy & zoro");
  }
  else if("sanj"=="zoro"){
    console.log("sanj & zoro");
  }
  else{
    console.log("luffy & sanj");
  }
}


let number="eq";
if(number*0==0){
  if(number%2==0){
   console.log("Even");
 }
else{
   console.log("Odd");
}
  console.log("nume"*0);
}
else{
  console.log("NaN");
}

else{
  console.log("all are different");
}


number=0;
while(number%2==0;number<5){
  console.log(number);
  number++;
}

let sum=0;
let i=1
while(i<=5){
  {
  
  console.log(sum=sum+i);
  i++;
  }
            
}



let sum=0;
let i=1
while(i<=5){
  
  
  sum=sum+i;
  i++;
  
      
} console.log(sum);  


for (let i=1;i<=10;i++){
  console.log(i);
}




//for (let i = 1; i <= 5; i++) {
 // bag = bag + i + "*";
  //console.log(i + "*");

//}
//console.log(bag);


//let product=1;
//for (let i = 1; i <= 5; i++) {
 //  product=product*i;
//}console.log(product);

// let sum=0;
// for(let i=1;i<=20;i++){
//   if(i%2==0 && i%5==0){
//     sum=sum+i;
//   }
// }  console.log(sum);



// let i=1
// while(i<=10){

//   console.log(i);
//   i--;
// }

// for(let i=1;i<=10;i++){
//   if(i==5 || i==6 || i==7){
//    // break;
//     continue;
//   }
  
//   console.log(i);
  
// }

// let name=["jaggu" , " raju" , "bheem" , "chutki"];

//  console.log(name[0]);
//  console.log(name[1]);
//  console.log(name[2]);
//  console.log(name[3]);



// let  a=[1,2,3,"hello","h","b"];

// for(i=0;i<a.length;i++){
//   console.log(a[i]);
//   console.log(a.length[typeof(a[i])]);
// }


//print an arry to replace all the negative element to 0
// let a =[1,-2,-4,-5,-8];
// for(let i=0;i<a.length;i++){
//   if(a[i]<0){
//      a[i]=0;
//   }
// }
//   console.log(a);
// //reverse an array
// let b=[1,2,3,4,5];
// let r=b.reverse();
// console.log(r);






let count1=0;
let count2=0;
let a=[1,2,3,4,5];
for(i=0;i<a.length;i++){ 
if(a[i]%2==0){
  count1++;
  
}
else{
  count2++;
}
}console.log("even:" ,count1);console.log("odd:" ,count2);




//add all the even number and all the odd number and find which ne is greater ::odd or even((((HOMEWORK))))

let count1=0;
let count2=0;
let sum1=0;
let sum2=0;
let a=[1,2,3,4,5,6];
for(i=0;i<a.length;i++){
  if(a[i]%2==0){
  sum1=sum1+a[i]
  count1++;
}
else{
  sum2=sum2+a[i];
  count2++;
}
}
(count1>count2) ? console.log("Even") : console.log("Odd");


let count1=0;
let count2=0;
let sum1=0;
let sum2=0;
let a=[1,2,3,4,5,6];
for(i=0;i<a.length;i++){
  if(a[i]%2==0){
  sum1=sum1+a[i]
  count1++;
}
else{
  sum2=sum2+a[i];
  count2++;
}
}
console.log(sum1," ",sum2);

(sum1>sum2) ? console.log("Even") : console.log("Odd");



// let b="school";
// let bag="";

// for(i=b.length-1;i>=0;i--){
//   bag =bag + b[i];
 
// }
//  console.log(bag);

// let b=  "go%.a$."
// //% h
// //$  n
// //. remove
// for(i=0;i<b.length;i++){
//  b.replace("%","h");
//   b.replace("&", "n");
 
// }console.log(b);


for(let month=1;month<=12;month++){
  let bag=" ";
  
    if(month==2){
      for(let day=1;day<=28;day++){
        console.log(day);
      }
    }
  else if(month==4 || month==6 || month==8 || month==10{
      for(let day=1;day<=30;day++){
        console.log(day);
      }
  })
    bag=bag + "*";
    
  }  
  console.log(bag);
}
