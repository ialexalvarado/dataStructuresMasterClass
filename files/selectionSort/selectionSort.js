function selectionSort(arr){

    const swap= (arr,idx1,idx2)=> {
        [arr[idx1],arr[idx2]]= [arr[idx2],arr[idx1]]
    }

    for(var i=0; i<arr.length;i++){
        var lowest=i;
        for(var j =i+1;j< arr.length;j++){
            console.log(i,j)
            if(arr[j] <arr[lowest]){
                lowest=j
            }
        }
        console.log(arr)
        console.log('swaping to:')
        if(i!== lowest) swap(arr,i,lowest)
        console.log(arr)
        console.log('-----------')
    }
    return arr
}

selectionSort([34,22,10,19,17])