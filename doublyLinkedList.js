class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // create new node
        let newNode = new Node(val);
        // if first node, set head and tail
        if (this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // else, set prev of node and next of tail
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        // set new node to tail
        this.tail = newNode;
        // increment length
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        // get tail
        let oldTail = this.tail
        if (this.length === 1) {
           this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.tail = this.tail.prev;
        }
        // return tail
        return oldTail;
    }

    unshift(val) {

    }

    shift() {

    }

    insert(index, val) {

    }

    remove(index) {

    }


}
