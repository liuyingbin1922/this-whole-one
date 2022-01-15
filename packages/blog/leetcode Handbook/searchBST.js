/**
 * @description 二叉搜索树相关概念
 */



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @description leetcode 701
 * @description 二叉搜索树的插入操作
 */

var insertIntoBST = function(root, val) {
    const insert = (root , val) => {
        if(root === null) {
            const node = new TreeNode(val)
            return node
        }
        if(root.val > val) {
            root.left = insert(root.left , val)
        } else if(root.val < val) {
            root.right = insert(root.right , val)
        }
        return root
    }
    return insert(root , val)
};


/**
 * @description 删除二叉搜索树某个节点 
 * leetcode 450
 * 这里的关键点是在于删除指定的节点的时候，如果该节点左右子树都存在的话，那么就需要将删除的节点的子树作为右节点的左子树添加到子树上。
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    if(root === null) {
        return root 
    }
    if(root.val === key) {
        if(!root.left){
            return root.right
        }else if(!root.right) {
            return root.left
        }else {
            let cur = root.right
            while(cur.left) {
                cur = cur.left
            }
            cur.left = root.left
            root = root.right
            delete root
            return root
        }
    }
    if(root.val > key){
        root.left = deleteNode(root.left , key)
    }
    if(root.val < key) {
        root.right = deleteNode(root.right , key)
    }
    return root
};



/**
 * @description 判断是否是二叉搜索树
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const queue = []
    const dfs = (root) => {
        if(root === null){
            return
        }
        dfs(root.left)
        queue.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    // 判断是否是单调序列
    for (let i = 0;i < queue.length;i++){
        for (let j = i + 1;j < queue.length;j++){
            if(queue[j] <= queue[i]){
                return false
            }
        }
    }
    return true
};

