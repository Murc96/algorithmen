class ListNode<T> {
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

    append(value: T) {
        const newNode = new ListNode(value);
        if (this.length === 0) {
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

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (poppedNode) {
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
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;
        this.head = temp.next;
        temp.next = null;

        if (this.head?.prev) {
            this.head.prev = null;
        }

        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return temp;
    }

    unshift(value: T) {
        const newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let temp = this.head;

            this.head = newNode;
            this.head.next = temp;
            temp.prev = this.head;
        }

        this.length++;

        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let current: ListNode<T> | null;


        if (index <= this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                if (current) {
                    current = current.next;
                }
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                if (current) {
                    current = current.prev;
                }
            }
        }

        return current;
    }

    set(value: T, index: number) {
        let currentNode: ListNode<T> | null | undefined = this.get(index);

        if (currentNode != undefined) {
            currentNode.value = value;
        } else {
            return false;
        }
        return true;
    }

    insert(value: T, index: number) {
        if (index < 0 || index > this.length) {
            return false
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

            prevNode!.next = newNode;

            newNode.next = followingNode as ListNode<T>;
            newNode.prev = prevNode as ListNode<T>;
            this.length++;
        }

        return true;
    }

    remove(index: number) {
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

            prevNode!.next = nextNode as ListNode<T>;
            nextNode!.prev = prevNode as ListNode<T>;
            this.length--;
        }


        return delNode!.value;
    }

}


const myList = new DoublyLinkedList<number>();

myList.append(2);
myList.append(15);
myList.append(233);
myList.append(102);
myList.append(25);
myList.append(15);

myList.remove(1);

console.log(myList);
