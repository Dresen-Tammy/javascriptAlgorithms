// piece of data - val
// reference to next node - next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // create new node using value passed in
        var newNode = new Node(val);
        // if no head, set head and tail to be new node
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        // else, set new property on the tail to be the new node 
        // and set the tail to be new node
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increment length
        this.length += 1;
        // return list
        return this;
    }

    pop() {
        // if list has no nodes, return undefined
        if (!this.head) {
            return undefined;
        }
        // find head of list
        let current = this.head;
        // save tail of list for return
        let newTail = current;

        // traverse list to find second to last node
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // set second to last node as new tail by setting next to null and tail to node
        newTail.next = null;
        this.tail = newTail;
        // decrement length
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return old tail
        return current;
    }

    shift() {
        // if no head, return undefined
        if (!this.head) return undefined;
        // save current head
        const current = this.head;
        // set new head
        this.head = current.next;
        // decrement length
        this.length--;
        // return current
        if (!this.head) this.tail = null;
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
        return list;
    }

    get(index) {
        if (index >= this.length || index < 0) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let current = this.get(index);
        if (!current) return false;
        current.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let newNode = new Node(value);
        let previous = this.get(index -1);
        newNode.next = previous.next;
        previous.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length -1) return this.pop();
        if (index === 0) return this.shift();

        let previous = this.get(index - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return node;
    }

    reverse() {
        let prev = null;
        let next = this.head.next;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        while (node.next) {
            node.next = prev;
            prev = node;
            node = next;
            next = node.next;
        }
        node.next = prev;
        return this;
    }

    print() {
        let result = '';
        let current = this.head;
        while(current) {
            result += current.val + ', ';
            current = current.next
        }
        console.log(result);
    }
}

let list = new SinglyLinkedList();
 list.push('Hello');
 list.push('Goodbye');
 list.push('Hello again');
