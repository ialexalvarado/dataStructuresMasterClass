// piece of data - val
//reference to the next node - next

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head= null
        this.tail=null
        this.length=0;
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next= newNode;
            this.tail= newNode
        }
        this.length++
        return this
    }

    traverse(){
        var current= this.head;
        while(current){
            console.log(current.val)
            current = current.next
        }
    }

    pop(){
        if(!this.head) return undefined;
        var current= this.head;
        var newTail= current;
        while(current.next){
            newTail=current
            current= current.next
        }
        this.tail= newTail;
        this.tail.next =null
        this.length--;
        if(this.length === 0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined
        let current= this.head
        let newHead= this.current.next
        this.head= newHead
        this.length--;
        if(this.length === 0){
            this.head=null;
            this.tail=null;
        }
        return current
        
    }

    unshift(val){
        var newNode= new Node(val)
        if(!this.head) {
            this.head = this.newNode
            this.tail= this.head
        }else{
            newNode.next = this.head
            this.head = newNode 
        }
        this.length++;
        return this
    }

    get(index){
        if(index<0 || index>= this.length) return null;
        let counter=0
        var current= this.head
        while(counter!==index){
            current= current.next
            counter++
        }
        return current
    }

    set(index, val){
        let current = this.get(index)
        if(current === null) return false
        current.val=val
        return true
    }

    insert(index, val){
        if(index<0 || index> this.length) return false;
        if(index=== this.length) return !!this.push(val) //doble ! means to return a boolean expresion instead a var info
        if(index==0) return !!this.unshift(val)
        var prev= this.get(index-1);
        var newNode= new Node(val)
        var temp=prev.next
        prev.next= newNode
        newNode.next= temp
        this.length++
        return true
    }
    remove(index){
        if(index<0 || index> this.length) return undefined;
        if(index=== this.length-1) return this.pop() //doble ! means to return a boolean expresion instead a var info
        if(index==0) return this.shift()
        var previousNode = this.get(index-1)
        var removed = previousNode.next
        preiviousNode.next=removed.next
        this.length--;
        return removed
    }

    reverse(){
        var node= this.head;
        this.head = this.tail
        this.tail=node
        var next;
        var prev=null;
        let i=0
        while(i<this.length){
            next= node.next
            node.next = prev
            prev= node
            node =next
            i++
        }
        return this
    }
}

var list= new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('!')