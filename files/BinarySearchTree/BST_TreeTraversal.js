class Node{
    constructor(value){
        this.value= value
        this.left=null
        this.right=null
    }
}

class TreeTraversal{
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
    
    BFS(){
        var data=[];
        var queue=[]
        var node = this.root
        queue.push(node.value)
        while(queue.length){ //while queue contains info
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
        
    }

    DFSPreOrder(){
        var data=[];

        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse.right
        }
        traverse(this.root)
        return data
    }

    DFSPostOrder(){
        var data=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)      
        }
        traverse(this.root)
        return data
    }

    DFSInOrder(){
        var data=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}