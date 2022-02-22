## 数据结构在前端领域的应用系列之 二叉树在react reconcile 过程的应用

![](https://img.alicdn.com/imgextra/i1/O1CN01AUnmtL1wN9yIRgAwQ_!!6000000006295-2-tps-458-275.png)


### 背景

谈到数据结构，众所周知他的地位对于写程序来说是非常重要的，良好的数据结构的设计可以帮助开发者写出更好的代码，这是编程大佬们的共识。
所以我们不应该怀疑这个共识，而是应该加深对此概念的理解，学会在业务和基建中学会应用良好的数据结构。

这一系列文章，笔者会站在前端的角度，和大家一起共勉数据结构是如何在前端领域中应用的，比如说react是如何应用二叉树执行reconcile 过程的，等等。这一章节，
笔者就带领大家看一下react reconcile 过程是如何应用二叉树的。

### reconcile

首先我们看一下reconcile【协调】的过程：

![](https://img.alicdn.com/imgextra/i1/O1CN01JQC1JX1SSiIwyi6k4_!!6000000002246-49-tps-4681-2076.webp)


![](https://img.alicdn.com/imgextra/i1/O1CN01pxD8Ae1isOMU1BCHx_!!6000000004468-49-tps-5506-2104.webp)


![](https://img.alicdn.com/imgextra/i2/O1CN015tg3Qk1rmHcL0Koj2_!!6000000005673-49-tps-5822-2195.webp)

![](https://img.alicdn.com/imgextra/i2/O1CN012Hpibd1sywB9hspge_!!6000000005836-49-tps-5756-2259.webp)


reconcile 的过程是协调fiber tree的过程，字面的意思是说让fiber tree变得更加协调，fiber tree的本质其实类似于一棵二叉树，所以整个的协调过程就是二叉树的调整过程。不过和通常的二叉树不一样的地方在于，fiber tree 是通过child 和 sibling 连接孩子节点和兄弟节点的。

fiber tree 协调的过程，存在两棵树，一棵是 current fiber tree , 另一棵是workingInprogress fiber tree. 整个协调的过程发生在workingInProgress fiber tree 中。

在整个协调的过程，主要干了三件事情，第一件事情是在fiber tree中找到fiber node , 第二件事情是在标记有副作用的fiber node , 最后收集带有副作用的node。
为了更好的解释这个过程，这里笔者画了遍历图来描述reconcile的过程：


回过头来我们在看一下二叉树的中序遍历过程：

```js
function inorder(root) {
    if(root === null) {
        return
    }
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}
```

使用递归的方式遍历二叉树的左节点、节点的值、右节点。所以我们看一下二叉树的遍历过程是不是和react的 reconcile 过程一样的呢，只不过react的 reconcile 增加了对节点的副作用的处理。

回顾二叉树中序遍历的过程，见下图：

![](https://img.alicdn.com/imgextra/i3/O1CN01jRxxdI1YQJvdIjLuR_!!6000000003053-49-tps-2375-1125.webp)

总体的流程上和reconcile的过程一致。

### 写在最后

后面会一直更新数据结构在前端领域中的应用的文章，会在一些文章中深挖数据结构的知识点，并更细致全面的讲解应用实践，若有业务同样也涉及到应用数据结构的话，笔者也会发文来讲解在业务场景下的某些数据结构的应用。

