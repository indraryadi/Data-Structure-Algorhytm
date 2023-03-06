// import {Node} from './node.mjs'
class Node{
    constructor(element){
        this.element=element
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    add(element){
        let node = new Node(element)

        // current is the temp 
        let current

        if(this.head==null){
            // node become head
            this.head=node
        }else{
            // if node is not null 
            // set the current as head 
            current=this.head

            // while there are next value on the current (current node), change the current with next value
            while(current.next){
                current=current.next
            }

            // it will get the last node which doesn't have next node, set current next (node.next) into new Node (element)
            current.next=node
        }
        // increase the value of size after add new node
        this.size++
    }

    insertAt(element,index){
        if(index<0 || index>this.size){
            return console.log("Please enter a valid index")
        }else{
            var node = new Node(element)
            var curr,prev

            curr=this.head

            if(index==0){
                node.next=this.head
                this.head=node
            }else{
                curr=this.head
                var it=0

                while(it<index){
                    it++
                    prev=curr
                    curr=curr.next
                }

                node.next = curr
                prev.next = node
            }
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            return console.log("Please insert a valid index")
        }else{
            let curr,prev,it=0
            curr=this.head
            prev=curr

            if(index===0){
                // set the head into next head value
                this.head=curr.next
            }else{
                while(it<index){
                    it++
                    prev=curr
                    curr=curr.next
                }
                prev.next=curr.next
            }
            this.size--

            return curr.element
        }
    }

    removeElement(element){
        let current=this.head
        let prev=null

        while(current != null){
            if(current.element === element){
                if(prev==null){
                    this.head = current.next
                }else{
                    prev.next=current.next
                }
                this.size--
                return current.element
            }
            prev=current
            current=current.next
        }
        return -1
    }

    indexOf(element){
        let count=0
        let current=this.head

        while(current != null){
            if(current.element === element){
                return count
            }
            count ++
            current=current.next
        }
        return -1
    }

    isEmpty(){
        return this.size == 0
    }

    sizeOfList(){
        console.log(this.size)
    }

    printList(){
        let curr=this.head
        let str=""
        while (curr){
            str += curr.element +"->"
            curr=curr.next
        }
        console.log(str)
    }
}