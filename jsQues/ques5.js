//merge

let arr1 = [1,23,3,4,5];
let arr2 = [1,23,3,4,5];
let nums =[];
for(let i=0 ; i<arr1.length+arr2.length;i++){
    if(i<arr1.length){
        nums[i]=arr1[i];
    }
    else{
        nums[i] = arr2[i-arr1.length];
    }
}
console.log(nums);

//sort after merge
for(let i=0; i<nums.length-1;i++){
    for(let j=1; j<nums.length;j++){
         if(nums[j]<nums[j-1]){
            swap(nums,j,j-1);
         }
    }
}console.log(nums);
function swap(arr, f ,s){
     var temp = arr[f];
     arr[f]= arr[s];
     arr[s] = temp;
}

//reverse the sorted array
j=nums.length-1;
for(let i=0; i<nums.length/2;i++){
     let temp  = nums[j];
     nums[j]= nums[i];
     nums[i]=temp;
     j--;
}
console.log(nums);