"use strict";
class QueueNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        let newNode = new QueueNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) {
            return undefined;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
let myQueue = new Queue();
myQueue.enqueue(89);
myQueue.enqueue(116);
myQueue.enqueue(13);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(33);
myQueue.dequeue();
console.log(myQueue);
