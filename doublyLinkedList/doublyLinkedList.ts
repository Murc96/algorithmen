class ListNode <T> {
    prev: ListNode<T> | null = null;
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class DoublyLinkedList<T> {
    head: ListNode<T> | null = null;
    tail: ListNode<T> | null = null;
    length: number = 0;

    append(value: T){
        const newNode = new ListNode(value);
        if (this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            let prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
            this.tail!.prev = prev;
        }

        this.length++;
    }

    pop(){
        if(this.length === 0){
            return undefined;
        }

        const temp = this.tail;
        let prev: ListNode<T> | null = null;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }


        this.length--;
    }
    
}


const myList = new DoublyLinkedList<number>();

myList.append(2);


console.log(myList);

myList.pop();

console.log(myList);