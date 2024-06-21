let arr = [1,23,3,4,5];
let remove = 3; //index(mtlb remove 4)
for(let i=0; i<arr.length;i++){
    if(remove==i){
      arr[i]=arr[i+1];
    }
}arr.splice(-1,1);
console.log(arr);