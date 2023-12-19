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

    pop(){
        if(!this.head){
            return undefined;
        }

        let currentItem = this.head;
        let preview: ListNode | null = null;

        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            length--;
            return currentItem;
        }

        while(currentItem!.next){
            preview = currentItem;
            currentItem = currentItem?.next!;
        }

        this.tail = preview;
        this.tail!.next = null;
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