# 从vue-template-compiler 谈前端编译

## 随感

> 快到年底了，杭州的冬天好像阴天居多，不喜欢阴天，因为没有清晨的暖阳，总是暗暗的。最近这段时间写文章的频率在减少了，当然也有偷懒的原因，不过空余时间主要的精力是放在了自己要出的书上，预计最快的话，年前可以和大家见面，主要是面向初级Vue 开发者的书籍。

## 缘起

佛家讲：缘起性空。写文章也是，总有某些事情触发了这个缘分，让我想起写文章的冲动，有点像乔布斯在斯坦福大学的那个演讲，说到的connecting dots。这份缘，来自本人排查物料应用实际项目时候出现的情况，最后排查的结果是vue-template-compiler 版本过低，无法编译作用域插槽，我又想看看vue-template-compiler 源码，一来二去，就建立了这份缘。

## 内容

### vue-template-compiler总览

因为开发环境看的Vue工程中，特别是vue 2 程序，都是基本使用webpack 作为打包工具的，众所周知，webpack 处理非js 文件是借助loader实现的，处理vue 文件则是借助vue-loader的，在vue-loader的官网中，有对vue-loader && vue-template-compiler 这样的描述：

```

每个 vue 包的新版本发布时，一个相应版本的 vue-template-compiler 也会随之发布。编译器的版本必须和基本的 vue 包保持同步，这样 vue-loader 就会生成兼容运行时的代码。这意味着你每次升级项目中的 vue 包时，也应该匹配升级 vue-template-compiler

```

也即是说 ， vue-loader 转换vue 文件的能力是借助vue-template-compiler 实现的。工程上，安装vue-loader 和 vue-template-compiler 往往是需要匹配正确的版本的。

在vue 2.x 的版本中，因为vue工程采用的是monorepo架构，vue-template-compiler 是集成在vue 工程内部的。包括
`vue-server-render` , `vue-template-compiler` , `weex-template-compiler` 和 `weex-vue-framework`。这些都是Vue 2.x 中发挥重要作用的包。

继续看vue-template-compiler , 当我们在分析一个包的时候，首先第一步需要分析package.json文件，认清楚这个包的入口在哪里，在浏览器环境使用哪一个入口文件，在node 环境中又是使用的哪一个文件等等。

我们看`vue-template-compiler` 的package结构【截取部分信息】：

```json
{
  "main": "index.js",
  "unpkg": "browser.js",
  "jsdelivr": "browser.js",
  "browser": "browser.js",
  "types": "types/index.d.ts",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/vue.git"
  },
  "keywords": [
    "vue",
    "compiler"
  ],
  "author": "Evan You"
}
```

这里browser 字段是浏览器环境中使用的文件。main 字段是当前包的入口文件，当然还有module字段，它是在node 环境下使用的入口文件说明。找到入口文件之后，接下来我们去分析源码：

vue-template-compiler 在末尾导出下面的函数：

```js
  exports.parseComponent = parseComponent;
  exports.compile = compile;
  exports.compileToFunctions = compileToFunctions;
  exports.ssrCompile = compile$1;
  exports.ssrCompileToFunctions = compileToFunctions$1;
  exports.generateCodeFrame = generateCodeFrame;
```

也就是说，vue-template-compiler 总共提供了这些函数供vue 使用：`parseComponent` , `compile` , ` compileToFunctions` , `ssrCompile` , `ssrCompileToFunctions` 和 `generateCodeFrame` 函数。找到了暴露的函数，接下来，我们顺藤摸瓜，看一下这些函数的实现方式，采用这样的形式就能阅读好vue-template-compiler 代码；

下面的内容我们来看函数的实现细节，挑parseComponent函数讲解。


### parseComponent 函数

parseComponent的函数签名这样描述：

> Parse a single-file component (*.vue) file into an SFC Descriptor Object

是将一个单文件组件转换为SFC 对象：

```js
var sfc = {
    template: null,
    script: null,
    styles: [],
    customBlocks: [],
    errors: []
};
```

parseComponent 函数是如何封装sfc 对象的呢？

我们看一下styles的合并:

```js

if (tag === 'style') {
    sfc.styles.push(currentBlock);
} else {
    sfc[tag] = currentBlock;
}

```

在styles数组中添加currentBlock对象, currentBlock 定义为：

```js
currentBlock = {
    type: tag,
    content: '',
    start: end,
    attrs: attrs.reduce(function (cumulated, ref) {
        var name = ref.name;
        var value = ref.value;

        cumulated[name] = value || true;
        return cumulated
    }, {})
};
```

currentBlock 对象中包含的attrs属性 ， 使用name / value 属性结合的方式。parseComponent函数最后使用parseHTML函数 ， parseHTML函数是接收template并parse为
包含上述属性的sfc对象 ， 

parseHTML函数的内容比较多， 我们看一下重点的代码部分：

```js
// 处理startTag
function parseStartTag


// 处理endTag
function parseEndTag
```

也就是说parseHTML 函数是将HTML DOM 处理成含有基本上属性的对象。举一个简单的例子，我们看将一段DOM处理的结果：

在browser.js 文件中写调用parseComponent函数的测试代码 ， 

```js
  console.log('parseComponent:' , parseComponent('<div><p>text</p> <p>content</p> </div>'))
```
, node 环境下执行 ， 结果如下：

```js

parseComponent: {
  template: null,
  script: null,
  styles: [],
  customBlocks: [
    {
      type: 'div',
      content: '<p>text</p> <p>content</p> ',
      start: 5,
      attrs: {},
      end: 32
    }
  ],
  errors: []
}

```

可以看到，customBlocks 是内容部分，承载DOM的主要内容。

### 常见的前端编译框架 

前面我们介绍了vue-template-compiler , 并讲解了其内部的parseComponent函数，当然，vue-template-compiler 的内容远不止这些，另外的其他函数则供读者去了解。就不再单独讲述。


这一部分，笔者想外拓一些，讲解一些比较出名的JS运行时编译。

`quickJS` : Fabrice 大神写的JS运行时。QuickJS是一个小型并且可嵌入的Javascript引擎，它支持ES2020规范，包括模块，异步生成器和代理器。它可选支持数学扩展，例如大整数 (BigInt)，大浮点数 (BigFloat) 以及运算符重载。

参考链接：https://github.com/quickjs-zh/QuickJS


`Kraken` , 北海，阿里巴巴淘系架构团队出品的框架，V0.9版本将quickJS作为JS引擎，更轻量，目前前端的主流框架已经基本都支持 ， 新的特性带来的渲染收益也是很有成效的，欢迎尝试。

参考链接：https://zhuanlan.zhihu.com/p/429278372

## 总结

前端编译其实内容有很多，笔者只是选取了和自己工作相关的一角来介绍，更多的前端编译领域的知识，需要前端同学更多的自己去探索和实践了。从工作中成长，我觉得是收益较高的学习方式。


