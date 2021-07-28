
//the function get the klargest element of any size of array
const kElement=(list,index)=>{
   list.sort((a,b)=>{
       if(a>b){
           return -1;
       } else if(b>a){
           return 1;

       } else {
           return 0;
       }//reverses the array from biggest to smallest,I could use reverse() but it has a limitation
   });
        console.log(list[index-1]);//get the kth biggest term of the sorted array
   



};
kElement([3,5,2,4,6,8],3)
//output 5
kElement([111,2341000,12345,78940,45678,12367,3247,23,97655],5);
//12367

