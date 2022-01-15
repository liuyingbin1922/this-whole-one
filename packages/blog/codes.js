var nextPermutation = function(nums) {
    nums.sort((a , b) => a - b)
    // 递归  汇总所有的顺序
    this.fullpermutate =  function(str) {
        var result = [];
        if (str.length > 1) {
        for (var m = 0; m < str.length; m++) {
            //拿到当前的元素
            var left = str[m];
            //除当前元素的其他元素组合
            var rest = str.slice(0, m) + str.slice(m + 1, str.length);
            //上一次递归返回的全xw排列
            var preResult = this.fullpermutate(rest);
            //组合在一起
            for (var i = 0; i < preResult.length; i++) {
                var tmp = left + preResult[i]
                result.push(tmp);
            }
        }
        } else if (str.length == 1) {
            result.push(str);
        }
        return result;
    } 
    let str = ''
    nums.forEach(item => {
        str += item
    })
    const res = []
    const result = fullpermutate(str)
    for (let i = 0;i < result.length;i++){
        const arr = result[i].split('')
        const _arr = []
        arr.forEach(
            _item => {
                _arr.push(Number(_item))
            }
        )
        res.push(_arr)
    }
    for (let i = 0;i < res.length;i++){
        if(JSON.stringify(res[i]) === JSON.stringify( nums)) {
            if(i + 1 < res.length) {
                return res[i+1]
            }else {
                return res[0]
            }
        }
    }
};

console.log(nextPermutation([1,2,3]))
