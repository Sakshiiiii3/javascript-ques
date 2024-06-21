let num = 145;
let numCopy = num;
let ans = 0;
while(numCopy>0){
  let val = Math.floor(numCopy%10);
  let prod = 1;
  while(val>0){
    prod*=val;
    val--;
  }ans+=prod;
    numCopy= Math.floor(numCopy/10);
}
console.log(ans);
if(ans == num) console.log(true);
else console.log(false); 