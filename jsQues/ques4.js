let arr = [1,23,3,4,5];
let  nums=[];
let add= 2;
nums[2]= 2;
for(let i=0; i<=arr.length;i++){
    if(i<2){
        nums[i] = arr[i];
    }
    
    else if(i>2){
        nums[i] = arr[i-1];
    }
}
console.log(nums);

