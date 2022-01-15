/**
 * @description 二分查找 ； LC 704
 */

 var search = function(nums, target) {
    // binary search 
    let left = 0 , right = nums.length - 1;
    while(left <= right) {
        let mid = (left + right) >> 1;
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] < target) {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1
};

/**
 * @description LC 15 : 三数之和
 * @param {*} nums 
 * @returns 
 */
 var threeSum = function(nums) {
    let res = []
    const len = nums.length
    if(nums === null || len < 3) {
        return res
    }
    nums.sort((a , b) => a -b)
    for (let i = 0;i < nums.length;i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i - 1]) continue
        let L = i + 1
        let R = len - 1
        while( L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if(sum === 0){
                res.push([nums[i] , nums[L] , nums[R]])
                while( L < R && nums[L] === nums[L+1]) L++
                while(L < R && nums[R] === nums[R-1]) R--
                L++
                R--
            }
            else if (sum < 0) L++
            else if(sum > 0) R--
        }
    }

    return res
};



/**
 * @description 16. 最接近的三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {

    let len = nums.length
    nums.sort((a , b) => a - b)
    let res = nums[0] + nums[1] + nums[nums.length - 1]
    for (let i = 0;i < nums.length;i++) {
        let left = i + 1
        let right = len - 1
        const n1 = nums[i]
        while(left < right) {
            const n2 = nums[left] 
            const n3 = nums[right]
            const sum = n1 + n2 + n3
            if(sum > target) {
                right--
            }else {
                left++
            }
            if(Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
        }
    }
    return res
};

/**
 * @description 单词搜索
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 var exist = function(board, word) {
    const w = board.length
    const h = board[0].length
    const used = new Array(w)
    for (let i = 0;i < w;i++) {
        used[i] = new Array(h)
    }

    const find = (row , col , i) => {
        if(i === word.length) {
            return true
        }
        if(row < 0 || row >= w || col < 0 || col >= h) {
            return false
        }
        if(used[row][col] || board[row][col] !== word[i]) {
            return false
        }

        used[row][col] = true

        const findResult = find(row + 1 , col , i+1) || find(row - 1 , col , i+1) || find(row , col + 1 , i+1) || find(row , col - 1 , i+1)

        if(findResult) {
            return true
        }
        used[row][col] = false
        return false
    }

    for (let i = 0;i < w;i++) {
        for(let j = 0;j < h;j++) {
            if(board[i][j] === word[0] && find(i , j , 0)){
                return true
            }
        }
    }

    return false
};

/**
 * @description LC 从四周向内部推进
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    // 四周收缩的方式
    if(matrix === []) return []
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    const res = []
    while(left < right && top < bottom){
        for (let i = left ;i < right;i++) res.push(matrix[top][i]) // 右边
        for (let i = top;i < bottom;i++ ) res.push(matrix[i][right]) // 
        for (let i = right; i > left; i--) res.push(matrix[bottom][i])// 下层
        for (let i = bottom;i > top;i--) res.push(matrix[i][left])
        left++
        top++
        bottom--
        right--
    }

    if(top == bottom) {
        for (let i = left;i <= right;i++) {
            res.push(matrix[top][i])
        }
    }else if(left == right){
        for (let i = top;i <= bottom;i++) {
            res.push(matrix[i][left])
        }
    }
    return res
    
};

/**
 * @description 二维数组去重
 * 
 */

 var tidy = function(arr) {
    var i = 0,
        j = arr.length,
        cache = {},
        key, result = [];
    for (; i < j; i++) {
        key = arr[i][0];
        key = typeof(key) + key;
        if (!cache[key]) {
            cache[key] = 1;
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(tidy([[2,2,2] , [2,2,2]]))