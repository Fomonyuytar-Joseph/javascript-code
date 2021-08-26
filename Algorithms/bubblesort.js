function swap(array,index1,index2){
    var temp=array[index1];//swaps two elements in an array
    array[index1]=array[index2];
    array[index2]=temp;
}

function bubbleSort(array){//Bubble sorting is the simplest sorting algorithm. It simply iterates over the entire
    //array and swaps elements if one is bigger than the other,
    for(var i=0,arrayLength=array.length;i<arrayLength;i++){// i starts before j so when i=1,j=0 that has the comparism starts
        for(var j=0;j<=i;j++){
            if(array[i]<array[j]){
                swap(array,i,j);
            }
        }
    }
    return array;
}
console.log(bubbleSort([6,1,2,3,4,5]));
