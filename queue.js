class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue("Ahmad");
queue.enqueue("Rami");
queue.enqueue("Mohammad");
console.log(queue.peek());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
