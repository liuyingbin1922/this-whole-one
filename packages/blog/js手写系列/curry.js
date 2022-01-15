/**
 * 函数curry的实现
 */


function curry() {
    const args = [...arguments]
    function fn(){
        args.push(...arguments)
        return fn
    }
    fn.toString = function () {
        return args.reduce((sum  , cur) => sum + cur)
    }
    return fn
}


console.log(curry(1)(2)(3).toString())


/**
 * copy 版本
 * @returns 
 */

function _curry () {
    const args = [...arguments]
    function fn() {
        const _args = [...arguments]
        args.push(args)
        return fn
    }
    fn.toString = function () {
        return args.reduce((sum ,cur) => sum + cur)
    }
    return fn
}