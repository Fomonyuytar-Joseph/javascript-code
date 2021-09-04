 function DoublyLinkedListNode(data){
     this.data=data;
     this.next=null;
     this.prev=null;
 }
 
 function DoublyLinkedList(){
     this.head=null;
     this.tail=null;
     this.size=0;

 }
 DoublyLinkedList.prototype.isEmpty=function(){
     return this.size==0;
 }

 DoublyLinkedList.prototype.addAtfront=function(value){

    if(this.head==null){
        this.head= new DoublyLinkedListNode(value);
        this.tail=this.head;

    }
    else{
        var temp = new DoublyLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
        }
        this.size++;
    }
        /*If the head of the linked list is empty, the
head and the tail are set to the new node. This is because when there is only one element,
that element is both the head and the tail. Otherwise, the temp variable is used to store the
new node. The new node’s next points to the current head, and then the current head’s
prev points to the new node. Finally, the head pointer is updated to the new node.*/
     
DoublyLinkedList.prototype.insertAtTail = function(value) {
    if (this.tail === null) { //If first node
    this.tail = new DoublyLinkedListNode(value);
    this.head = this.tail;
} else {
    var temp = new DoublyLinkedListNode(value);
    temp.prev = this.tail;
     this.tail.next = temp;
       this.tail = temp;
         }
         this.size++;
        }


   var dll1 = new DoublyLinkedList();
     dll1.insertAtHead(10); // ddl1's structure: tail: 10 head: 10
     dll1.insertAtHead(12); // ddl1's structure: tail: 10 head: 12
     dll1.insertAtHead(20); // ddl1's structure: tail: 10 head: 20  
     dll1.insertAtTail(30); // ddl1's structure: tail: 30 head: 20