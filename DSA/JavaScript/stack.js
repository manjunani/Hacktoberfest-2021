class Stack {
  
    constructor() {
        this.stack = [];
    }
    
    push(elem) {
        return this.stack.push(elem);
    }
    
    pop() {
        if(this.stack.length > 0) {
            return this.stack.pop();
        }
    }
  
    getItems(){
      return this.stack;
    }
   
    size(){
        return this.stack.length;
    }
 
    clear(){
        this.stack = [];
    }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(10);
myStack.push(5);
console.log(myStack.getItems());

myStack.pop();
console.log(myStack.getItems());

console.log(myStack.size());

myStack.clear();
console.log(myStack.size());
