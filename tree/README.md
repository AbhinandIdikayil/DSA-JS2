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
