// 第一次手动清理垃圾以确保为最新状态，观察内存情况
global.gc();
console.log(`第一次垃圾回收，当前内存使用情况：${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`);
const wm = new WeakMap();

let key = {};
// 给 WeakMap实例 赋值一个 占领内存足够大的 键值对
wm.set(key, new Array(114514 * 19));
// 手动清理一下垃圾 观察内存占用情况
global.gc();
console.log(`第二次垃圾回收，当前内存使用情况：${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`);

// 此时把 key键 的引用进行断开，并观察内存占用情况
key = null;
// key = new Array();  
// 这种改变引用地址写法也可以引起 弱映射，因为引用地址不再是同块内存地址 WeakMap内对应的value也会被垃圾回收

global.gc();
console.log(`第三次垃圾回收，当前内存使用情况：${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`);