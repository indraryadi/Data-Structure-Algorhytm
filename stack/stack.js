class Stack{
    constructor(){
        this.items=[]
    }

    push(element){
       this.items.push(element) 
    }

    pop(){
        if(this.items.length == 0){
            return "Underflow"
        }
        return this.items.pop()
    }

    // return top item of the stack
    peek(){
        return this.items[this.items.length -1]
    }

    isEmpty(){
        return this.items.length == 0
    }

    getStack(){
        let data=""
        for(let i=0;i<this.items.length;i++){
            data+=`${this.items[i]}|`
        }
        return data
    }
}
