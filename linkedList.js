class Node {
  constructor(data) {
    this.node = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }

  remove(data) {
    if (!this.head) return;
    if (this.head.data == data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return;
    }
    let current = this.head;
    while (current.next && current.next.data != data) {
      current = current.next;
    }
    if (current.next) {
      if (current.next == this.tail) {
        this.tail = current;
      }
      current.next = current.next.next;
    }
  }

  find(data) {
    let current = this.head;
    while (current && current.node != data) {
      current = current.next;
    }

    return current ? current : null;
  }
}

const list = new LinkedList();
list.append(1);
list.append(10);
list.append(100);
console.log(list.find(1003));
