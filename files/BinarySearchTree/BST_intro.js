class Node{
    constructor(value){
        this.value= value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root =null
    }

    insert(val){
        var newNode= new Node(val)
        if(this.root===null) {
            this.root=newNode
            return this;
        }else{
            var current= this.root;
            while(true){
                if(val === current.value) return undefined
                if(val< current.value){
                    if(current.left===null){
                        current.left= newNode
                        return this
                    }else{
                        current= current.left
                    }
                }else if(val> current.value){
                    if(current.right ===null){
                        current.right = newNode
                        return this
                    }else{
                        current= current.right
                    }
                }
            }
            
        }
        
    }

    find(value){
        if(this.root===null) return false
        var current = this.root
        var found = false
        while(current && !found){
            if(value === current.value){
                return true
            }else{
                if(value < current.value){
                    current=current.left
                }else{
                    current=current.right
                }
            }
        }
        return false
    }
}

var tree = new BST()
tree.root= new Node(10)
tree.insert(15)
tree.insert(7)
tree.insert(9)
tree.insert(3)
tree.insert(1)

