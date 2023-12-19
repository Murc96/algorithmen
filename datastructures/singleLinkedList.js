"use strict";
class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const listNodeValue = new ListNode(value);
        if (this.head === null) {
            this.head = listNodeValue;
            this.tail = this.head;
        }
        else {
            this.tail.next = listNodeValue;
            this.tail = listNodeValue;
        }
        this.length++;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let currentItem = this.head;
        let preview = null;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            length--;
            return currentItem;
        }
        while (currentItem.next) {
            preview = currentItem;
            currentItem = currentItem === null || currentItem === void 0 ? void 0 : currentItem.next;
        }
        this.tail = preview;
        this.tail.next = null;
        this.length--;
        return currentItem;
    }
}
const myList = new SinglyLinkedList();
myList.append(10);
myList.append(5);
myList.append(1);
myList.append(16);
myList.append(99);
myList.append(2);
console.log(myList);
/* const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head); */ 
//# sourceMappingURL=singleLinkedList.js.map