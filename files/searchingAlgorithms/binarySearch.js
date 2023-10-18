function binarySearch(arr,n){
    let left=0;
    let right=arr.length-1
    let middle= Math.floor(arr.length/2)
    while(arr[middle]!== n && left <=right){
       if(n < arr[middle]){
        right =middle - 1
       }else{
        left = middle + 1
       }
       middle= Math.floor((left+right)/2)
    }
    if(arr[middle]===n) {
        return middle
    }else{
        return -1
    }
    
}