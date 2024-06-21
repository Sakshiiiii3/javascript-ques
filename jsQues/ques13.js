let arr = [1,2,3,4,5,6];
let target = 5;
let start = 0;
let end = arr.length;
while(Math.floor(start)<=Math.floor(end)){
    let mid =Math.floor(start + (end-start)/2);
    if(arr[mid]==target){
     console.log(mid);
     break;
} else if(arr[mid]>target){
    end=mid-1;
}else{
    start = mid+1;
}
}

