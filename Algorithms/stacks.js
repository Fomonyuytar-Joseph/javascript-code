function stack(array){
    this.array=[];
    if(array){
        this.array=array;
    }
    stack.prototype.getBuffer=function(){
        return this.array.slice()
    }
    stack.prototype.isEmpty=function(){
        return this.array.length==0;
    }
    stack.prototype.peek=function(){
        return this.array[this.array.length-1];
    }
    stack.prototype.push=function(value){
        return this.array.push(value);
    }
    stack.prototype.pop=function(){
        return this.array.pop();
    }
}
function stackSearch(stack, element) {
    var bufferArray = stack.getBuffer();
    var bufferStack = new Stack(bufferArray); // copy into buffer
    while(!bufferStack.isEmpty()){
    if(bufferStack.pop()==element){
    return true;
    }
    }
    return false;
}
//instance of the stack class
var stack1 = new stack();
console.log(stack1);
stack1.push(10);
console.log(stack1.peek());
stack1.push(5);
console.log(stack1.peek());
console.log(stack1.getBuffer());
console.log(stack1.pop());