function quickSort(arr, left=0, right= arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr,left,pivotIndex-1)
        //right
        quickSort(arr,pivotIndex+1,right)
    }
}

function pivot(arr, start=0, end=arr.length+1){
    const swap= (arr,idx1,idx2)=> {
        [arr[idx1],arr[idx2]]= [arr[idx2],arr[idx1]]
    }
    var pivot= arr[start];
    var swapIdx = start

    for(var i = start + 1; i < end; i++){
        if(pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

pivot([4,8,2,1,5,7,6,3])

pivot=4
swapidx= 1
i=1
