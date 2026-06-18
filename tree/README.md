# Tree

## 1. What is a Tree?

A tree is a hierarchical data structure made of nodes connected by edges.  
A tree with `N` nodes always has `N - 1` edges.

### Example

```text
        A
      /   \
     B     C
    / \
   D   E
```

## 2. Tree Terminology

Using the tree below:

```text
        A
      /   \
     B     C
    / \
   D   E
```

### Node

Each element in a tree.

`A, B, C, D, E`

### Edge

Connection between nodes.

`A-B`, `A-C`, `B-D`, `B-E`

### Root Node

Topmost node.

`A`

There is only one root.

### Parent Node

A node that has children.

`A` is parent of `B` and `C`  
`B` is parent of `D` and `E`

### Child Node

Direct descendant.

`B` and `C` are children of `A`

### Siblings

Nodes having the same parent.

`B` and `C`  
`D` and `E`

### Leaf Node

Node with no children.

`D`, `E`, `C`

Leaf nodes have degree `0`.

### Internal Node

Node having at least one child.

`A`, `B`

## 3. Degree

One of the most asked interview concepts.

Degree = number of children of a node.

### Example

```text
        A
      /   \
     B     C
    / \
   D   E
```

| Node | Degree |
|------|--------|
| A    | 2      |
| B    | 2      |
| C    | 0      |
| D    | 0      |
| E    | 0      |

Tree degree = maximum degree of any node.

Here:

Tree degree = `2`

## 4. Level

Level tells how far a node is from the root.

```text
        A        Level 0
      /   \
     B     C     Level 1
    / \
   D   E         Level 2
```

| Node | Level |
|------|-------|
| A    | 0     |
| B, C | 1     |
| D, E | 2     |

Some books start from `1`.

In interviews:

Root level = `0`

is common.

## 5. Depth

Depth = number of edges from root to node.

```text
        A
      /   \
     B     C
    / \
   D   E
```

Depth of:

`A = 0`  
`B = 1`  
`C = 1`  
`D = 2`  
`E = 2`

Formula:

Depth = edges from root to node

## 6. Height

This confuses everyone initially.

Height = longest path from a node down to a leaf.

### Example

```text
        A
      /   \
     B     C
    / \
   D   E
```

Height:

`D = 0`  
`E = 0`  
`C = 0`  
`B = 1`  
`A = 2`

Think:

Height goes down  
Depth goes up

## 7. Subtree

A node and all its descendants.

Subtree of `B`:

```text
      B
    /   \
   D     E
```

## 8. Ancestors

Nodes above a node.

For `E`:

`A`  
`B`

are ancestors.

## 9. Descendants

Nodes below a node.

For `B`:

`D`  
`E`

are descendants.

## Binary Tree

Now the real topic starts.

### What is a Binary Tree?

A binary tree is a tree where each node can have at most two children:

- left child
- right child

### Example

```text
         10
        /  \
       5    15
      / \
     2   7
```

Valid because:

- Every node has `<= 2` children

## 10. Types of Traversals

There are 2 major categories:

```text
Traversal
|-- DFS (Depth First Search)
|   |-- Preorder
|   |-- Inorder
|   `-- Postorder
|
`-- BFS (Breadth First Search)
    `-- Level Order
```

Traversal means visiting every node in a tree exactly once in a specific order.

### DFS (Depth First Search)

DFS goes as deep as possible before coming back up.

It is usually implemented with:

- recursion
- a stack

DFS is best when you want to explore one full branch before moving to the next branch.

#### 1. Preorder

Order:

`Root -> Left -> Right`

For this tree:

```text
         10
        /  \
       5    15
      / \
     2   7
```

Preorder traversal:

`10, 5, 2, 7, 15`

How it works:

- visit the root first
- then go left subtree
- then go right subtree

#### 2. Inorder

Order:

`Left -> Root -> Right`

For this tree:

```text
         10
        /  \
       5    15
      / \
     2   7
```

Inorder traversal:

`2, 5, 7, 10, 15`

How it works:

- go all the way to the left
- visit the root
- then visit the right subtree

This traversal is very important in Binary Search Trees because it gives sorted values.

#### 3. Postorder

Order:

`Left -> Right -> Root`

For this tree:

```text
         10
        /  \
       5    15
      / \
     2   7
```

Postorder traversal:

`2, 7, 5, 15, 10`

How it works:

- visit left subtree first
- then right subtree
- visit root last

This is useful when you want to delete a tree or process children before the parent.

### BFS (Breadth First Search)

BFS visits nodes level by level.

It is usually implemented with a:

- queue

BFS is best when you want to explore all nodes at the current depth before moving deeper.

#### Level Order

Order:

`Level 0 -> Level 1 -> Level 2 ...`

For this tree:

```text
         10
        /  \
       5    15
      / \
     2   7
```

Level order traversal:

`10, 5, 15, 2, 7`

How it works:

- visit the root
- add its children to a queue
- remove nodes from the queue one by one
- visit their children next

### DFS vs BFS

| Traversal | Style | Data Structure | Example Order |
|-----------|-------|----------------|---------------|
| Preorder  | DFS   | Stack/Recursion | 10, 5, 2, 7, 15 |
| Inorder   | DFS   | Stack/Recursion | 2, 5, 7, 10, 15 |
| Postorder | DFS   | Stack/Recursion | 2, 7, 5, 15, 10 |
| Level Order | BFS | Queue | 10, 5, 15, 2, 7 |
