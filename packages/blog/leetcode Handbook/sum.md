# 数组求和专题

## 背景

在刷leetcode 专题的过程中，对于数组系列，数组求和问题经常以两数之和、三数之和、四数之和的方式出现，所以为了更好的掌握此专题的内容，特此写一篇专栏文章来记录此专题。

## 试题

### 两数之和

- 两数之和比较的简单，是一道easy题；

- [LC:1](https://leetcode-cn.com/problems/two-sum/)

```js

/**@description: 本人的解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const res = []
    for (let i = 0 ;i < nums.length;i++) {
        if(nums.indexOf(target - nums[i]) !== -1 &&nums.indexOf(target - nums[i]) !== i ) {
            res.push(i)
            res.push(nums.indexOf(target - nums[i]))
            break
        }
    }
    return res
};
```

虽然是一道简单的题，但是需要参考高赞的解法 , 使用hash表的方式求解，hash 表采用空间换时间的手法。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    map = new Map()
    for(let i = 0; i < nums.length; i++) {
        x = target - nums[i]
        if(map.has(x)) {
            return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
}; 

```

### 三数之和

- 三数之和问题中得到的答案必须不能是重复的元素，所以在求解的过程中需要去重。另外，三数之和需要两重for循环，不过内层的for循环可以使用while循环代替。

- [LC:15](https://leetcode-cn.com/problems/3sum/)

- 代码：

```js

/**
 * @param {number[]} nums
 * @return {number[][]}
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
```

初级选手的解法通常是直接两层for循环 + 最后的去重。直接暴力；



### 四数之和

- 四数之和需要沿用三数之和的思路，最外层使用两层for循环，内层使用while循环并添加去重的处理。

- [LC:18](https://leetcode-cn.com/problems/4sum/)

- 代码：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    const len = nums.length;
    if(len < 4) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for(let i = 0; i < len - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < len - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = len - 1;
            while(l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if(sum < target) { l++; continue}
                if(sum > target) { r--; continue}
                res.push([nums[i], nums[j], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[++l]);
                while(l < r && nums[r] === nums[--r]);
            }
        } 
    }
    return res;
};

```

