function Queue(array){
    this.array=[];
    if(array){
        this.array=array;
    }
    Queue.prototype.getBuffer=function(){
        return this.array.slice()
    }
    Queue.prototype.isEmpty=function(){
        return this.array.length==0;
    }
    Queue.prototype.peek=function(){
        return this.array[0];
    }
    Queue.prototype.enqueue = function(value){
        return this.array.push(value);
        }
        Queue.prototype.dequeue = function() {
            return this.array.shift();
        }

}
function queueSearch(queue, element){
    var bufferArray = queue.getBuffer();
    var bufferQueue = new Queue(bufferArray);
    while(!bufferQueue.isEmpty()){
    if(bufferQueue.dequeue()==element){
    return true;
    }
    }
    return false;
    }
//instance of the queue class
var queue1 = new Queue();
console.log(queue1); // { array: [] }
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
console.log(queue1);

queue1.dequeue();
console.log(queue1); // {array: [2,3]}

