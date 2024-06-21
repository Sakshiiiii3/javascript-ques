let arr = [1,23,3,4,5,1,23,3,4,5];
let nums=[];
j=0;
const set = new Set();
for(let i=0;i<arr.length;i++){
    if(!set.has(arr[i])){
        nums[j]=arr[i];
        j++;
        set.add(arr[i]);
    }
}
console.log(nums);