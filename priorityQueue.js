class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.items.shift().element;
  }
  peek() {
    return this.items[0].element;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Ahmad", 2);
priorityQueue.enqueue("Rami", 1);
priorityQueue.enqueue("Mohammad", 3);
priorityQueue.enqueue("Hassan", 4);
console.log(priorityQueue.isEmpty());
console.log(priorityQueue.size());
console.log(priorityQueue.peek());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.peek());
console.log(priorityQueue.size());
