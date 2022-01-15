/**
 * bind: 返回一个函数 ， 但是必须需要手动执行；
 * @param {*} context 
 * @returns 
 */

Function.prototype.myBind = function(context = globalThis) {
    const fn = this // 首先是获取this指向；
    const otherArg = Array.from(arguments).slice(1)

    const result = () => {
        const resultArg = [...arguments].slice(1)
        if(this instanceof result) {
            fn.apply(this , otherArg.concat(resultArg))
        }else{
            fn.apply(context , otherArg.concat(resultArg))
        }
    }

    result.prototype = Object.create(fn.prototype) // 原型链绑定

    return result
}


this.a = 1;

const fn = function() {
  this.a = 22332;
  console.log(this.a);
}

fn.myBind(fn);
fn();