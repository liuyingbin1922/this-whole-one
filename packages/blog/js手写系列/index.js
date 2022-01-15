function myNew(func , ...args) {
    // 判断是否是函数 
    if(typeof func !== 'function') {
        throw ('参数必须是函数')
    }
    const _obj = {}
    _obj.__proto__ = Object.create(func.prototype)
    let result = func.apply( _obj , ...args)
     // apply 的作用是使用obj的方法 ， 赋值给_obj； 
    const isObejct = typeof result === 'object' && result !== null;
    const isFunction = typeof result === 'function'
    return isObejct || isFunction ? result : _obj
}

function func() {
    this.name = 'yingbin'
}

console.log(myNew(func))


const shallowCopy = (obj) => {
    const tartget = {}
    for (let item in obj) {
        tartget[item] = obj[item]
    }
    console.log(tartget)
    return tartget
}


const obj = {
    "name":"yingbin",
    "age":"24"
}

Object.freeze(obj)
obj.name = "shaojinying"

// 浅拷贝： 数组拷贝 / 对象拷贝

const checkedType = (target) => { 
    // vue 源码也使用到这个用法；
    console.log('checkType:' , Object.prototype.toString.call(target));
    return Object.prototype.toString.call(target).slice(8, -1);
}


const _shellowCopy = (target) => {
    let result;
    // 如果目标是对象，那么设置成对象
    if (checkedType(target) === 'Object') {
        result = {};
    } else if (checkedType(target) === 'Array') { // 如果目标是数组，那么设置成数组
        result = [];
    }

    for (let i in target) {
        if(target.hasOwnProperty(i)) {
            result[i] = target[i]
        }
    }
    console.log('result:' , result)

    return result
}



checkedType(obj)

shallowCopy(obj)
_shellowCopy(obj)



function cloneDeep  (target, map = new Map()) {
    if(typeof target === 'object' && target !== null ) {
        const isArray = Array.isArray(target) 
        let obj
        if(isArray) {
            obj = []
        }else {
            obj = {}
        }

        const keys = Object.keys(target)
        for (let item in keys) {
            if(map.get(item)) {
                obj.item = target.item
            }
            obj.item = target.item
            
        }

        return obj
    }else {
        return target
    }
}


function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}


// weakMap 是弱引用； GC 的时候方便回收；标记清除的方式；
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);

        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = clone(target[key], map);
        });

        return cloneTarget;
    } else {
        return target;
    }
}

const obj = {
    "name":'yingbin',
    "array":[2,23]
}



console.log(clone(obj))


function _forEach (array,handler) {
    let index = -1
    while(++index < array.length) {
        handler(array[index] , index)
    }   
    return array
}

function clone_deep(target , map = new Map()){

    if(typeof target === 'object' && target !== null) {

        const isArray = Array.isArray(target)
        const cloneObj = isArray ? [] : {}

        if(map.get(target)) {
            return map.get(target)
        }

        map.set(target , cloneObj)
        const keys = isArray ? undefined : Object.keys(target)
        _forEach(keys || target , (value , key) => {
            if(keys){
                key = value // 对象 的情况；
            }
            cloneObj[key] = clone_deep(target[key] , map)
        })
        return cloneObj
    }else {
        return target
    }
}


console.log(clone_deep(obj))




Function.prototype.myCall = function (context = globalThis) {
    context.fn = this;
    const otherArgs = Array.from(arguments).slice(1)
    context.fn(otherArgs)
    let result = context.fn()
    delete context.fn
    return result
}

let a  = 1

const fn = function (val) {
    this.a = val
    console.log(this.a)
}

fn.myCall(fn , 3)


Function.prototype.myapply = function(context = globalThis , arr) {
    context.fn = this
    let result 

    if(arr) {
        result = context.fn(arr)
    }else {
        result = context.fn()
    }

    delete context.fn

    return result
}


fn.myapply(fn , [223])
