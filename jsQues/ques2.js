let arr = [1,23,3,4,5];
for(let i=0; i<arr.length-1;i++){
    for(let j=1; j<arr.length;j++){
         if(arr[j]<arr[j-1]){
            swap(arr,j,j-1);
         }
    }
}console.log(arr);
function swap(arr, f ,s){
     var temp = arr[f];
     arr[f]= arr[s];
     arr[s] = temp;
}