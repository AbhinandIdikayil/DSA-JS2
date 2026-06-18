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
                if (current.right == null) {
                    current.right = node
                    return;
                } else {
                    queue.push(current.right)
                }
            }
        }
    }

    inOrder() {
        const helper = (node, pos) => {
            if (node == null) {
                return null
            }
            helper(node.left,
                `left node of ${node.value} is`

            )
            console.log(
                pos || 'root node is:',
                node.value);
            helper(node.right,
                `right node of ${node.value} is`
            )
        }
        helper(this.root)
    }

    postOrder() {
        const helper = (node, pos) => {
            if (node == null) {
                return null
            }
            helper(node.left, `left node of ${node.value} is:`)
            helper(node.right, `right node of ${node.value} is:`)
            console.log(pos || 'root node is:', node.value)
        }
        helper(this.root)
    }

    preOrder() {
        const helper = (node, pos) => {
            if (node == null) {
                return null
            }
            console.log(pos || 'root node is:', node.value)
            helper(node.left, `left node of ${node.value} is:`)
            helper(node.right, `right node of ${node.value} is:`)
        }
        helper(this.root)
    }

    levelOrder() {
        const queue = []
        queue.push(this.root);
        while (queue.length) {
            const node = queue.shift()
            console.log(node.value)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
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
bt.inOrder()
console.log('----')
bt.postOrder()
console.log('----')
bt.preOrder()
console.log('----')
bt.levelOrder()
