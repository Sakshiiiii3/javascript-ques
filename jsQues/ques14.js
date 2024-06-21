let num = 16;
let div =2;
while(num>0){
    if(num%div==0){
   console.log(div);
   num = Math.floor(num/div);
    }else{
        div++;
    }
}