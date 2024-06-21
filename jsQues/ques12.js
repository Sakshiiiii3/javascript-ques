let val = "sakshi";
let ans = ""
const set = new Set();
for(let i=0; i<val.length;i++){
     if(!set.has(val.charAt(i))){
        ans+=val.charAt(i);
        set.add(val.charAt(i));
     }
}
console.log(ans);