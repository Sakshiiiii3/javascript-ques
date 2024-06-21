let arr = [1,23,3,4,5];
j=arr.length-1;
for(let i=0; i<arr.length/2;i++){
     let temp  = arr[j];
     arr[j]= arr[i];
     arr[i]=temp;
     j--;
}
console.log(arr);