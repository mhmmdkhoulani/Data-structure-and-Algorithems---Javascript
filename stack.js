class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(4);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
