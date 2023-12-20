"use strict";
class ListNode {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            let prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.prev = prev;
        }
        this.length++;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const temp = this.tail;
        let prev = null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
    }
}
const myList = new DoublyLinkedList();
myList.append(2);
console.log(myList);
myList.pop();
console.log(myList);
//# sourceMappingURL=doublyLinkedList.js.map