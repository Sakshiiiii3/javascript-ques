let num=153;
let numCopy = num;

let ans = 0;
let count=0;
while(numCopy>0){
   count++;
   numCopy=Math.floor(numCopy/10);
   
}

numCopy = num;
while(numCopy>0){
    let temp =  Math.floor(numCopy%10);
    let out=1;
    for(let i=0; i<count;i++){
         out*=temp;
    }
    ans+=out;
    numCopy=Math.floor(numCopy/10);
}
 console.log(ans);
 if(ans == num) console.log(true);
 else console.log(false); 