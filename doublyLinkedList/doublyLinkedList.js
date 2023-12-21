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
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else if (poppedNode) {
            const newTail = poppedNode.prev;
            if (newTail) {
                newTail.next = null;
            }
            this.tail = newTail;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        var _a;
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        if ((_a = this.head) === null || _a === void 0 ? void 0 : _a.prev) {
            this.head.prev = null;
        }
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    unshift(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            temp.prev = this.head;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let current;
        if (index <= this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                if (current) {
                    current = current.next;
                }
            }
        }
        else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                if (current) {
                    current = current.prev;
                }
            }
        }
        return current;
    }
    set(value, index) {
        let currentNode = this.get(index);
        if (currentNode != undefined) {
            currentNode.value = value;
        }
        else {
            return false;
        }
        return true;
    }
    insert(value, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
        }
        if (index === this.length) {
            this.append(value);
        }
        if (index > 0 && index < this.length) {
            let prevNode = this.get(index - 1);
            let followingNode = this.get(index);
            let newNode = new ListNode(value);
            prevNode.next = newNode;
            newNode.next = followingNode;
            newNode.prev = prevNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        let delNode = this.get(index);
        if (index === 0) {
            this.shift();
        }
        if (index === this.length - 1) {
            this.pop();
        }
        if (index > 0 && index < this.length) {
            let prevNode = this.get(index - 1);
            let nextNode = this.get(index + 1);
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            this.length--;
        }
        return delNode.value;
    }
}
const myList = new DoublyLinkedList();
myList.append(2);
myList.append(15);
myList.append(233);
myList.append(102);
myList.append(25);
myList.append(15);
myList.remove(1);
console.log(myList);
//# sourceMappingURL=doublyLinkedList.js.map