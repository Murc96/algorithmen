class ListNode {
    value:number;
    next:ListNode | null = null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: ListNode | null = null;
    tail: ListNode | null = null;
    length: number = 0;

    append(value:number) {
        const listNodeValue = new ListNode(value);
        if(this.head === null){
            this.head = listNodeValue;
            this.tail = this.head;
        } 
        else {
            this.tail!.next = listNodeValue;
            this.tail = listNodeValue;
        }
        this.length++
    }
}

const myList = new SinglyLinkedList();
myList.append(5);
myList.append(10);
myList.append(22);

console.log(myList);

/* const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head); */