class Node {
    constructor(value) {
        this.value = value
        this.left = this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node;
            return;
        } else {
            let queue = [];
            queue.push(this.root)
            while (queue.length) {
                const current = queue.shift();
                if (current.left == null) {
                    current.left = node;
                    return
                } else {
                    queue.push(current.left)
                }
                if(current.right == null) {
                    current.right = node
                    return;
                } else {
                    queue.push(current.right)
                }
            }
        }
    }
}

const bt = new BinaryTree()
bt.insert(10)
bt.insert(20)
bt.insert(30)
bt.insert(4)
bt.insert(14)
bt.insert(15)

console.log(JSON.stringify(bt, null, 2))