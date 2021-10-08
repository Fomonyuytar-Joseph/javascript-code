const intersects=(setA,setB)=>{
  var difference = new Set(setA);
    for(var elem of setB){
        if(setA.has(elem)){
            difference.delete(elem)
        }
    }
    return Array.from(difference)

}
var setA=new Set([1,2,3,4]);
var setB=new Set([2,3]);
console.log(intersects(setA,setB))