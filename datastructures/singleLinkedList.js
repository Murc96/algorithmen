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
            this.length--;
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
    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = temp.next;
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
        }
        this.length++;
        return this;
    }
    get(index) {
        let currentNode = this.head;
        let count = 0;
        if (index < 0 || index > this.length) {
            return undefined;
        }
        while (count !== index) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
            count++;
        }
        return currentNode;
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
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        let delNode = this.get(index);
        while (this.head.next) {
        }
        if (index === 0) {
            this.shift();
        }
        if (index === this.length) {
            this.pop();
        }
        if (index > 0 && index < this.length) {
            let prevNode = this.get(index - 1);
            let nextNode = this.get(index + 1);
            prevNode.next = nextNode;
            this.length--;
        }
        return delNode.value;
    }
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
        this.tail.next = null;
        return this;
    }
}
const myList = new SinglyLinkedList();
myList.append(10);
myList.append(5);
myList.append(1);
myList.append(2);
myList.pop();
console.log(myList);
myList.reverse();
console.log(myList);
/* const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head); */ 
