//Problem 1: Print the Calendar date in the below format

for(i=1;i<=12;i++){
  
    if(i==2){
      for(j=1;j<=28;j++){
        console.log(i+"-"+j);
      }
    }
    else if(i==4 || i==6 || i==9 || i==11){
      for(j=1;j<=30;j++){
       console.log(i+"-"+j);
    }}
    else {
      for(j=1;j<=31;j++){
       console.log(i+"-"+j);
    }
  }
}