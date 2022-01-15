## leetcode handbook

### 内容


> 记录刷的一些重点的算法题目，并按照合理的分类进行划分


#### 二叉搜索树

- 定义：
    左子树的节点的值永远小于根节点，右子树节点的值永远大于根节点的值，这就是二叉搜索树的定义。

- 用法：
    二叉搜索树其实是保证了顺序的 ， 所以在中序遍历的时候，得到的就是有序序列。
    leetcode 关于二叉搜索树的题目 ，大概有这么一些：

    1. 查看二叉搜索树的某个节点，存在的话， 返回以该节点为根的子树
    2. 验证该二叉树是不是二叉搜索树，解题思路比较的简单，直接使用迭代的方式遍历该二叉树，如果是单调递增序列，那就可以判断是二叉搜索树。【leetcode 98】



#### 数组相关

- 背景：

    业务侧，数组相关API的用法需要了解；算法侧呢 ，则需要多练习，熟悉LC基本的算法题解。

- 内容：

    二分查找：核心是定义left , right , mid 三个变量，利用left / right 值的变化来查找target。

    三数之和： 利用while循环判断是否三数之和为0即可。

- 试题：

    [LC704](https://leetcode-cn.com/problems/binary-search/) , 直接使用二分查找解答即可，属于基础题。

    [LC15：三数之和](https://leetcode-cn.com/problems/3sum/) , 二数之和的进阶版本。

    [LC16:最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest/) , 微调三数之和

    [LC79:单词搜索](https://leetcode-cn.com/problems/word-search/) , 设置单词的状态，遍历单词进行对应的状态变更。

    [LC54:螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/) , 从四周向内部跟进

    [数组求和专题](./sum.md)

### 参考内容

1. 代码随想录