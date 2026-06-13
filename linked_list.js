
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head
        this.head = node
        this.size++;
    }

    shift() {
        this.head = this.head.next
        this.size__
    }

    pop() {
        let current = this.head
        let prev = null;
        while (current.next) {
            prev = current
            current = current.next
        }
        prev.next = null
        this.size--;
    }
    print() {
        let value = ''
        let curr = this.head
        while (curr) {
            value += curr.value + ' '
            curr = curr.next
        }
        console.log(value)
    }
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next;
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    isCircular() {
        let slow = this.head
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow == fast) {
                return true
            }
        }
        return false
    }

    reverse2() {
        let previous = null
        let curr = this.head
        while (curr) {
            let next = curr.next;
            curr.next = previous
            previous = curr
            curr = next
        }
        this.head = previous
    }

    removeByValue(value){
        if(this.head.value == value){
            this.head = this.head.next
        } else {
            let prev = this.head;
            let curr = this.head.next
            while(prev.next.value !== value && prev.next){
                prev = prev.next
            }
            if(prev.next){
                prev.next = prev.next.next
                this.size--;
            }
        }
    }

    removeMiddle() {
        let prev = null;
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next
    }
}

const ll = new LinkedList()
ll.append(10)
ll.append(12)
ll.prepend(1)
ll.reverse(2)
ll.removeByValue(10)
console.log(ll.head)