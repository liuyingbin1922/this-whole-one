function myNew(func , ...args) {
    // 判断是否是函数 
    if(typeof func !== 'function') {
        throw ('参数必须是函数')
    }
    const _obj = {}
    
    _obj.__proto__ = Object.create(func.prototype) // 原型链绑定；
  
    let result = func.call( _obj , ...args)
    
     // apply 的作用是使用func的方法 ， 赋值给_obj； 
    const isObejct = typeof result === 'object' && result !== null;
    const isFunction = typeof result === 'function'
    return isObejct || isFunction ? result : _obj
}

function func() {
    this.name = 'yingbin'
}

console.log(myNew(func))

