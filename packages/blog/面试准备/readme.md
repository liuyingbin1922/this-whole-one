## 准备计划

- 面试的前端团队
  - web infra 
  - 快手前端商业化基建
    - **前端开发工程师/技术专家 （生产力研发）-【电商生态】 1、负责快手电商企业级生产力中台体系，包括活动营销-各类产品-服务流程等在多端（H5-小程序-Hybrid等）及容器化中的可视化搭建体系、Cloud IDE、生产力OS等基础技术平台，以及投放系统、选品系统、服务治理等业务支撑平台的规划及系统建设、落地与推广； 2、参与团队技术体系的建设，利用低代码、工程化、Serverless等技术构建基础设施及企业内部开发者生态； 3、前端稳定性建设，指标梳理及支撑系统建设、各类埋点体系、性能优化、监控、自动化测试最佳实践； 4、对标行业及社区，建设性的评估并引入新技术，促进团队共同成长：包括但不限LowcodeCode、BPM、企业级NodeJS、Hybrid、Flutter、PWA、WebAssembly等。 1、本科及以上学历，三年及以上前端开发工作经验； 2、扎实的前端基础，优秀的编码及文档习惯； 3、技术栈方面，UI方向：具备移动端开发实	际项目经验，能够根据所需快速订制自己的工程化环境，至少精通React或Vue，对于面向对象及函数式编程具备较深刻的理解及实践，熟悉Redux等数据流框架。服务端方向：对于NodeJS有较深刻的理解及丰富的实践经验，对于其常见的应用场景有明确的技术选型及应对策略；（以上UI及服务端可二选一） 4、有自己的想法，热爱互联网和新技术，具有极强的快速学习能力，对优秀开源软件的源码有过一定的研究； 5、积极阳光，有良好的团队合作精神和协调沟通能力。 【加分项】 1、有过低代码设计器、实施协作、可视化构建、组件库的设计开发经验； 2、大型前端项目设计架构经验； 3、有开源社区项目的领导经历或自己的开源项目； 4、有自己的理论著作。**
  - 蚂蚁技术体验部 
  - 有赞前端基建团队 【playground】
  - 淘系业务线
    - 用户增长
  - TikTok 短视频方向基础建设团队
    - 暂时未投递简历

- important Target:
  - 模拟题【1/1】【feishu】
  - Leetcode hot 100 [1/1]
    - 回溯问题
      - [组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/dai-ma-sui-xiang-lu-17-dian-hua-hao-ma-d-ya2x/)
      - [电话号码中的数字组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
  - week test[1/7]
  - Cv
    - open source
      - npm awesome transform-vue-js
      - github all in one
      - wechat public number[passages]
    - book
    - work in company



### review

- resource

  - [Hoc](https://zhuanlan.zhihu.com/p/126552443)

    - vue hoc
      - [vue promise](https://github.com/posva/vue-promised)
      - wrapper => get component [rehance过程]
      - 使用vue2 模版实现vue hoc;
    - react hoc

  - [原型链](https://github.com/mqyqingfeng/Blog/issues/2)

    - <img src="https://i.loli.net/2021/11/11/ivkpEdzoYLf8gUu.png" alt="司考复习时间表.jpg" style="zoom:50%;" />

  - instanceof && typeof:

    - instanceof 历史遗留bug:

      - null instanceof null: false;

      - null  的底层机器码都是000 ， 对象机器码也是000，所以会导致null是对象的情况。

      - instanceof 主要是判断某个实例是不是每个类型的实例；

      - ```js
        function new_instance_of(leftVaule, rightVaule) { 
            let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
            leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
            while (true) {
            	if (leftVaule === null) {
                    return false;	
                }
                if (leftVaule === rightProto) {
                    return true;	
                } 
                leftVaule = leftVaule.__proto__ 
            }
        }
        
        ```

      - Object.prototype.toString.call 判断类型比较合适；

    - [position 值：](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Positioning)

      - relative ， absolute ， fixed ，static ， sticky；
      - note： sticky是一个新的特性，主要用于吸顶；
      - 其实，position的出现是为了辅助盒模型，css 传统的布局，将dom 实体通过盒模型进行布局，position发挥的是控制在文档流位置的作用。

    - [dom渲染过程](https://blog.poetries.top/browser-working-principle/#javascript-%E6%98%AF%E5%A6%82%E4%BD%95%E5%BD%B1%E5%93%8D-dom-%E7%94%9F%E6%88%90%E7%9A%84)

      - Htmlparer ;    js && css 会阻塞dom 加载；defer 会等待DOMContentLoaded加载完成执行；
      - ![](https://si.geilicdn.com/img-4b3a0000017d261557a40a21134b-unadjust_744_790.png)
      - HtmlParser  : AST 过程，start Tag 和 end Tag 放到堆栈这种。push / POP 方式；

    - [重绘和重排](https://juejin.cn/post/6844904083212468238)

      - 其实这和上一节是强关联的，dom 解析的过程必然会涉及到重绘和重排；
      - 重绘和重排是在渲染的下游，是最耗时的活动
      - ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/6/170af501e710ce67~tplv-t2oaga2asx-watermark.awebp)
      - layout : 重排，是对页面的元素进行重新排列；重绘：是对页面元素进行颜色的变化；
        - table 元素少使用的原因是：一点改变会造成整个table的改变；
        - 读写分离: js 修改代码的时候，读dom 放到一起，写dom 放到一起；

    - [https](https://zhuanlan.zhihu.com/p/26682342)

      - http over ssl : ssl 是属于TCP/IP四层协议的应用层协议；
      - Ssl: ssl 会话 和 ssl 连接：

    - [Add(1)(2)(3)](https://juejin.cn/post/6844904093467541517): 

      - 函数curry：

        - ```js
          const curry = (fn, ...args) => 
              // 函数的参数个数可以直接通过函数数的.length属性来访问
              args.length >= fn.length // 这个判断很关键！！！
              // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
              ? fn(...args)
              /**
               * 传入的参数小于原始函数fn的参数个数时
               * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
              */
              : (..._args) => curry(fn, ...args, ..._args);
          ```

    - redux && vuex && mobx:

      - [redux](https://cn.redux.js.org/understanding/thinking-in-redux/three-principles):

        - 原则：
          - 单一数据源
          - state是只读的，触发state只能依靠action
          - 使用纯函数执行修改

      - [Vuex](https://vuex.vuejs.org/zh/guide/structure.html):

        - 规则：
          - 应用层级的状态应该集中到单个store中
          - 提交mutation是更改store的唯一方法，而且这个过程是同步的；
          - 异步逻辑需要放到action中

      - [Mobx](https://zh.mobx.js.org/the-gist-of-mobx.html):

        - 主旨：
          - state
          - Actions
          - Derivations

      - [Es5继承的实现](https://github.com/mqyqingfeng/Blog/issues/16)【面向对象的基本知识点】

        - 原型的方式继承：
        - 引用类型属性会被所有示例共享
        - 使用构造函数继承 ， 不会出现引用类型属性被所有示例共享的情况，原因是创建新函数，开辟一个新的内存空间。

      - [promise](https://juejin.cn/post/6844904063570542599)

        - 实现： then函数 ， resolve , reject; finally , race;
        - 实现一个promise A+ 规范的promise；自己独立实现；

      - [css 选择器](https://segmentfault.com/a/1190000013424772)

        - `简单选择器（Simple selectors）`：通过元素类型、class 或 id 匹配一个或多个元素。 [most]
        - `属性选择器（Attribute selectors）`：通过 属性 / 属性值 匹配一个或多个元素。
          - Attr: jquery 封装了属性选择器
        - `伪类（Pseudo-classes）`：匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是 DOM 树中一父节点的第一个子节点。
          - :default , 一般的，是处理样式的第一个元素
        - `伪元素（Pseudo-elements）`:匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。
          - 伪元素：::first-line , 针对文本的第一行设置样式
        - `组合器（Combinators）`：这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择 divs 的直系子节点的段落，或者直接跟在 headings 后面的段落。
          - antd vue menu 组件收缩文字内容不显示 ， 使用的就是组合选择器：
            - A + B： 设置opacity : 0 ; 作用在span上面； 含义是 A ， B有相同的父节点， 而且A 和 B 是相邻的兄弟节点
            - A ～ B：A 和 B 是兄弟节点
        - `多用选择器（Multiple selectors）`：这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个 CSS 规则下面， 以将一组声明应用于由这些选择器选择的所有元素。

      - js事件模型

        - 微任务/宏任务：

      - [白屏时间优化](https://cloud.tencent.com/developer/article/1508941)：

        - DNS 优化：
          - 缓存策略
          - 预加载策略
        - TCP链路优化
        - 服务端处理
        - 代码布局的合理性
        - 骨架屏的体验
        - 减少传输的内容，服务端开启GZIP压缩，减少cookie大小，SSR直出

      - [TCP 的三次握手四次挥手](https://coolshell.cn/articles/11564.html)

      - vue 系列【面试的重点系列， 完结】：

        - 数据响应式搭建：
          - DEP ， watcher ， Observer 的认识：
            - Observer ： 是利用Object.defineProperty , 使用setter 和 getter； getter 依赖收集，setter依赖更新；
            - watcher ：监听依赖；computed属性中，data中数据的变化，watcher可以监听到；
            - DEP：依赖管理，notify，depend
          - 深入剖析响应式原理的上中下，是很好的系列文章；mark
        - [Keep-alive](https://juejin.cn/post/6844903966170431496):
          - keep-alive: 之所以特别，是因为他不会重复渲染相同的组件
          - patch阶段【vnode -> dom】的时候，keep-alive的组件会被认为一个是vnode,
          - keep-alive : 调用的只是render函数，也就是去缓存和拿缓存的阶段，不涉及template；
          - 因此，我们很清晰的回到之前遗留下来的问题，为什么`keep-alive`需要一个`max`来限制缓存组件的数量。原因就是`keep-alive`缓存的组件数据除了包括`vnode`这一描述对象外，还保留着真实的`dom`节点,而我们知道真实节点对象是庞大的，所以大量保留缓存组件是耗费性能的。因此我们需要严格控制缓存的组件数量，而在缓存策略上也需要做优化
          - 当初次渲染的时候，再次进入keep- alive的时候，这时候做了哪些优化呢 ， 因为keep-alive是将vnode 和真实dom 都做了缓存操作：
            - keep-alive  使用了LRU 缓存策略
            - summary：
              - Keep-alive : 初次渲染发挥作用的阶段是在patch阶段，keep-alive直接调用render函数，缓存的时候将vnode / dom 同时缓存。
              - 再次渲染的时候，直接从内容中取缓存。调用update 进行节点的更新；
        - [next-tick](https://www.cnblogs.com/leiting/p/13174545.html):
          - promise:
          - mutationObserver:[定义](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
          - setImmediate:
        - [Slot](https://juejin.cn/post/6844903927129849864):
          - V-slot: 在编译成AST的时候，会携带上scopeSlots属性
          - 从我自身的角度理解，作用域插槽提供了一种方式，当你需要封装一个通用，可复用的逻辑模块，并且这个模块给外部使用者提供了一个便利，允许你在使用组件时自定义部分布局，这时候作用域插槽就派上大用场了

      - [vue3响应式原理分析](https://juejin.cn/post/6858899262596448270)

        - proxy：原生监听对象的属性的添加和删除
        - 更好的性能
        - 简历响应式原理的方式：
          - composition api[reactive]
          - options data [vue2]
          - 为了能把proxy对象和原对象建立关系，vue3.0采用了WeakMap去储存这些对象关系。WeakMaps 保持了对键名所引用的对象的弱引用，即垃圾回收机制不将该引用考虑在内。

      - [vue响应式实现的原理](https://juejin.cn/post/6844903869730799629)

        - 其中`proxy(vm, "_props", key);`为`props`做了一层代理，用户通过`vm.XXX`可以代理访问到`vm._props`上的值。针对`defineReactive`,本质上是利用`Object.defineProperty`对数据的`getter,setter`方法进行重写，具体的原理可以参考数据代理章节的内容，在这小节后半段也会有一个基本的实现。

        - 极简风格的vue响应式实现：

          - 设置响应式对象observer:
          - 首先引入一个类`Observer`,这个类的目的是将数据变成响应式对象，利用`Object.defineProperty`对数据的`getter,setter`方法进行改写。在数据读取`getter`阶段我们会进行**依赖的收集**，在数据的修改`setter`阶段，我们会进行**依赖的更新**(这两个概念的介绍放在后面)。因此在数据初始化阶段，我们会利用`Observer`这个类将数据对象修改为相应式对象，而这是所有流程的基础。
          - watcher ， observer 的实现在Vue2 中都是依赖Object.defineProperty实现的。在Object.defineProperty中修改setter和 getter。

          

### 前端工程化重要的知识系列

- [js 运行时](https://zhuanlan.zhihu.com/p/104333176)
- [node.js 底层的原理](https://zhuanlan.zhihu.com/p/430201591)
- [nodejs底层原理分析的书](https://11111-1252105172.cos.ap-shanghai.myqcloud.com/understand-nodejs%EF%BC%88%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%89%88%EF%BC%89.pdf)



### leetcode 刷题记录

- 二叉树相关的题目：

  - 二叉树的遍历
    - 前序
    - 中序
    - 后序
    - 层序
  - 二叉树的属性
  - 二叉搜索树
    - 验证二叉搜索树的最小绝对差
  - 二叉树的最近公共祖先
  - 二叉树的删除/修改操作

  - 学会二叉树的层序遍历，可以一口气打完以下十题：

    102.二叉树的层序遍历
    107.二叉树的层次遍历II
    199.二叉树的右视图
    637.二叉树的层平均值
    429.N叉树的前序遍历
    515.在每个树行中找最大值
    116.填充每个节点的下一个右侧节点指针
    117.填充每个节点的下一个右侧节点指针II
    104.二叉树的最大深度
    111.二叉树的最小深度

    

- list：

  - [[在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)    , 题解：【https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/zhi-jie-de-jie-ti-fang-shi-by-yingbin-e2nr/】

  - [DP问题](https://programmercarl.com/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)

    - dp 问题拆解出来本质还是二叉树、递归问题；

    - 首先要弄清数组和数组下标的含义：

      - 就爬楼梯问题来说 ，dp[i]表示爬第i层有dp[i] 中方法

    - 接雨水问题

      - 

    - 背包问题

      - 需要使用二位数组，dp [i] [j] = xx; 属于01 背包；i 表示 0 - i ； j 表示放进容量为j的背包； 价值总和是多少

      - ` dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);`

      - `dp[i][0] = 0`

        

    - 打家劫舍

      - 1.
      - 2.https://leetcode-cn.com/problems/house-robber-ii/solution/
      - 3.树型递归问题：
        - 二叉树的遍历和递归问题

    - [周围人身高](https://leetcode-cn.com/problems/queue-reconstruction-by-height/)

      - 这道属于贪心算法 ， 类似的还有[发分糖果](https://leetcode-cn.com/problems/candy/)
      - 455.分发饼干
        - 376.[摆动序列](https://leetcode-cn.com/problems/wiggle-subsequence/solution/)
          - 删除区间的波峰元素即可。
      - 53.最大子序和
      - 122买卖股票的最佳时机II
      - 55.跳跃游戏
      - 45.跳跃游戏II
      - [跳跃游戏三](https://leetcode-cn.com/problems/jump-game-iii/)
        - 这是一道递归求解的题目，不是贪心算法
      - 1005.K次取反后最大化的数组和
      - 134.加油站
      - 135.分发糖果
        - 首先满足最大的糖果给胃口最大的
      - 860柠檬水找零
      - 406.根据身高重建队列
      - 406.根据身高重建队列（续集）
      - 452.用最少数量的箭引爆气球
      - 435.无重叠区间
      - 763.划分字母区间
      - 56.合并区间
      - 738.单调递增的数字
      - 714.买卖股票的最佳时机含手续费
      - 968.我要监控二叉树！
      - 贪心算法总结篇！
      - 解法：
        - ![1631846754-EyGCvj-image](/Users/yingbin/Downloads/1631846754-EyGCvj-image.png)

    - 零钱兑换

  - 贪心算法求解：

    - target:  一个小时的时间解决股票买卖的问题 ， 在使用一个小时的时间输出一篇文档

  - [组合求解，利用回溯法](https://leetcode-cn.com/problems/combination-sum/)

    - [相关的题目](https://leetcode-cn.com/problems/combination-sum/solution/zu-he-zong-he-by-leetcode-solution/),其中都是涉及回溯法求解的。[代码随想录](https://leetcode-cn.com/problems/combination-sum-ii/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-ig29/)

    - [电话号码组合问题](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

      - 思路：使用回溯算法，利用map表

    - 回溯问题求解：

      - 电话号码组合

      - [子集问题](https://leetcode-cn.com/problems/subsets/)

        

### 工程化

- 模块化机制：
  - iife: 立即执行函数
  - commonjs
    - 同步加载模块
  - esm
  - amd
    - 非同步加载模块
    - define([],function())
    - Require.js
    - sea.js
- Tree-shaking:
  - Tree-shaking 是静态分析的，es6 语法的import binding是immutable的，所以支持tree-shaking;
  - commonjs 是不支持tree-shaking的
  - Side-effect 的影响，rollup对于顶层的类引入但是没有使用的情况，不做tree-shaking;
- 代码压缩的原理：
  - 将code 转换为AST， AST在转换为更小的AST , 最后在generator为code
  - ![arch](/Users/yingbin/Downloads/arch.png)
- Babel 的插件机制：https://bobi.ink/2019/10/01/babel/
  - 见上图
  - 写一个Babel插件
- webpack 工作机制：
  - 基本概念：
    - Chunk: code splitting的结果，包含多个module
    - Loader: 文件转换
    - Plugin: 插件
  - Loader 机制和 plugin机制：
    - loader： 运行时执行文件的处理
    - plugin ： 适配于生命周期钩子，回调函数中执行
  - 完整的执行流程【打包构建】：
    - 基于Tapable 生命周期的；
    - loader：
  - 执行流程：
    - 入口是compiler.js 的run方法：
    - `compile` 开始编译
    - `make` 从入口点分析模块及其依赖的模块，创建这些模块对象
    - `build-module` 构建模块
    - `after-compile` 完成构建
    - `seal` 封装构建结果
    - `emit` 把各个chunk输出到结果文件
    - `after-emit` 完成输出
    - 调用acron 转换为AST
    - webpack 的整体流程主要还是依赖于 `compilation` 和 `module` 这两个对象，但其思想远不止这么简单。最开始也说过，webpack 本质是个插件集合，并且由 `tapable` 控制各插件在 webpack 事件流上运行，至于具体的思想和细节，将会在后一篇文章中提到。同时，在业务开发中，无论是为了提升构建效率，或是减小打包文件大小，我们都可以通过编写 webpack 插件来进行流程上的控制。
- [Webpack 插件机制](https://juejin.cn/post/6844903789804126222)：
  - 插件的执行依赖Tapable这个库文件
  - **WaterfallHook** ：类似于reduce函数；
- webpack loader 机制：
  - **style-loader 返回的字符串里面又包含了2个 require，分别 require 了 addStyle 和 less-loader!style.less，由此，我们终于找到了突破口。→ loader 本质上是一个函数，输入参数是一个字符串，输出参数也是一个字符串。当然，输出的参数会被当成是 JS 代码，从而被 esprima 解析成 AST，触发进一步的依赖解析。** 这就是多引入2个模块的原因。
  - **loader 也是分为同步和异步两种的，比如 style-loader 是同步的（看源码就知道，直接 return）；而 less-loader 却是异步的，为什么呢？**  Less-loader 的render函数是异步的，所以可以看做less-loader是异步的。





### node [重点知识]

- nodejs 模块机制：
  - commonjs
- nodejs 事件处理机制：
  -    ┌───────────────────────────┐
       ┌─>│           timers          │
       │  └─────────────┬─────────────┘
       │  ┌─────────────┴─────────────┐
       │  │     pending callbacks     │
       │  └─────────────┬─────────────┘
       │  ┌─────────────┴─────────────┐
       │  │       idle, prepare       │
       │  └─────────────┬─────────────┘      ┌───────────────┐
       │  ┌─────────────┴─────────────┐      │   incoming:   │
       │  │           poll            │<─────┤  connections, │
       │  └─────────────┬─────────────┘      │   data, etc.  │
       │  ┌─────────────┴─────────────┐      └───────────────┘
       │  │           check           │
       │  └─────────────┬─────────────┘
       │  ┌─────────────┴─────────────┐
       └──┤      close callbacks      │
          └───────────────────────────┘





## playground 



### vue 炖

- 组件传值的方式：
  - props
    - template 
    - jsx
  - emit
  - eventbus
  - vuex
- composition api
  - setup
  - Life cycle changed
- vue3 新特性：
  - mutation
  - composition api
    - setup
    - ref
  - compiler 方法优化
  - 舍弃一些用法
    - V-event.sync
  - vuex   v4.0
  - Vue-router 
  - 完美支持tsx
    - defineComponent
- nextTick:
  - mutationObserver:
  - promise:
- 响应式原理：
  - vue2 :
    - Object.defineProperty
      - setter , getter
    - 数组：
      - 重写数组方法 ?
    - 属性添加：
      - ？属性遍历
  - vue3 :
    - proxy
- keep-alive：
  - 设置缓存，取缓存
- slot：
  - 作用域
  - 作为参数，传入render函数，渲染出来
- vue diff 算法 https://juejin.cn/post/6919376064833667080
  - vue2 ？
    - Target:
      - 找到节点的不同，并最大限度的复用
      - vue2 采用的是双端比较的方式， 新旧数组的从头至尾比较
  - vue3？
    - 最长递增序列
- QA:
  - 物料在旧工程，作用域插槽没有应用；
  - 报错：row is undefined;
- Practice:
  - Vue sfc 模版
    - commitlint
    - vui 组件引入



### node 

​	

- 事件模型：
  - 事件循环机制
  - 
- 



### webpack

- 运行机制
  - tapable
- loader
- plugin
- hmr
- tree-shaking
  - side effect , 无法对静态类分析【对类】
- rollup

### js 

- 原型和原型链

  - 那张图

- 继承

  - 实现方式

    - 原型链继承

      - Prototype

    - 构造函数

      - function person

    - 组合继承

      - 原型链继承和经典继承
      - Q： 为什么经典继承可以不引入副作用；函数式 

    - Object.create 实现：

      - ```js
        function createObj(o) {
            function F(){}
            F.prototype = o;
            return new F();
        }
        ```

      - createObj 同样是引用传值，会导致数据共享，副作用；

    - 寄生式继承：

      - 返回Object.create 创建的对象

- js 事件模型 和 UI 渲染模型：

  - 一些题外话
    - css link 加载会阻塞解析
  - js 事件模型：
    - 宏任务 / 微任务；事件循环模型；
    - 首先执行完成一个队列里面所有的微任务， 在执行宏任务
    - 堆里存放着一些对象。而栈中则存放着一些基础类型变量以及对象的指针
    - 执行上下文【执行栈】 -------》 作用域的概念 ---------〉 作用域链 ----------》 闭包
    - 异步事件存放到事件队列中，主线程执行完毕的时候，再去 执行事件队列中的内容
    - 异步任务又分为： 宏任务和微任务；
    - node 事件模型， node 渲染 chrome V8 作为js 解释器 ， 执行任务的时候使用node api , node api 调用libuv的api。
    - 外部输入数据-->轮询阶段(poll)-->检查阶段(check)-->关闭事件回调阶段(close callback)-->定时器检测阶段(timer)-->I/O事件回调阶段(I/O callbacks)-->闲置阶段(idle, prepare)-->轮询阶段...
    - Timer : 执行事件队列中的定时器回调； setTimeout;
    - IO callback 执行所有的回调; 
    - prepare / IDle : 内部使用的阶段
    - poll: 等待新的IO
    - check: setImmediate 回调
    - close callbacks:
    - 首先进入poll阶段， poll queue 是否有事件 /  
    - 检查是否有setImmediate 函数， 有的话，进入check阶段； 
    - 同时也会检查是否有过期的timer， 有的话 ，就直接执行timer；
    - poll 阶段执行完成之后 ，执行check阶段；
    - process.nextTick 队列是需要全部执行完成的。
  - UI 渲染：
    - DOM TREE && CSS TREE

- 作用域：

  - Babel 利用作用域实现tokenizer；
  - 利用作用域链创建对象的过程
    - 上下文执行栈：
      - 函数执行的时候，首先要创建函数执行的上下文
    - js 采用的是静态作用域 【词法作用域】
      - js 函数的作用域在声明的时候就确认了
      - 闭包的出现其实是引用了作用域链； 创建他的上下文已经不存在，但是他还是执行了，获取到了数据值；

- Promise:

  - [Promise A+ 规范实现](https://juejin.cn/post/6844904063570542599)：

    - ```js
          function Promise(fn){ 
              let state = 'pending';
              let value = null;
              const callbacks = [];
      
              this.then = function (onFulfilled){
                  return new Promise((resolve, reject)=>{
                      handle({ //桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
                          onFulfilled, 
                          resolve
                      })
                  })
              }
      
              function handle(callback){
                  if(state === 'pending'){
                      callbacks.push(callback)
                      return;
                  }
                  
                  if(state === 'fulfilled'){
                      if(!callback.onFulfilled){
                          callback.resolve(value)
                          return;
                      }
                      const ret = callback.onFulfilled(value) //处理回调
                      callback.resolve(ret) //处理下一个 promise 的resolve
                  }
              }
              function resolve(newValue){
                  const fn = ()=>{
                      if(state !== 'pending')return
      
                      state = 'fulfilled';
                      value = newValue
                      handelCb()
                  }
                  
                  setTimeout(fn,0) //基于 PromiseA+ 规范
              }
              
              function handelCb(){
                  while(callbacks.length) {
                      const fulfiledFn = callbacks.shift();
                      handle(fulfiledFn);
                  };
              }
              
              fn(resolve)
          }
      
      ```

    - Resolve && reject 

      - ```js
        Promise.resolve({name:'winty'})
        Promise.reject({name:'winty'})
        // 等价于
        new Promise(resolve => resolve({name:'winty'}))
        new Promise((resolve,reject) => reject({name:'winty'}))
        
        ```

- 强引用和弱引用

  - 弱引用要从weakMap 说起；
  - 强引用则是需要从map说起；
  - 垃圾回收：
    - 普通的垃圾回收是通过标记的方式，有标记的情况下不进行垃圾回收。没有的话，进行垃圾回收；这样有一个非常严重的问题，如果出现死循环引用，这样的话就会造成垃圾无法清除的情况出现。
    - 另一个垃圾回收的方式是标记-清除的方式：
    - 内存泄漏的情况出现：
      - 事件没有及时清除
      - nodejs 内存泄漏则会造成比较严重的问题；
      - **FinalizationRegistry**； 在GC的时候，提供一个回调函数，那么就直接可以写removeListener函数，这属于高级API。不建议使用【狗头】

- [手写系列](https://leetcode-cn.com/circle/discuss/IOjzpz/)：

  - target：

    - 准备用vitepress 搭建相关的面试文章
      - 手写系列
      - 基本算法
      - 基本数据结构

  - 手写实现继承

    - 

  - 手写实现apply / call / bind

    - 首先call:

      - ```js
        Function.prototype.myCall = function(context = globalText) {
          
        }
        ```

      - 

  - 手写实现instanceof函数

  - 手写实现 new 函数

    - new 函数是将对象的属性和值进行拷贝，最后得到一个新对象；

    - ```js
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
      ```

    - 

  - 手写实现深拷贝/浅拷贝

    - 浅拷贝：

      - Object.assign ;

      - Concat /  slice

      - ```js
        const shallowClone = (target) => {
          // 设置拷贝结果
          const result = [];
        
          // 通过 let ... in ... 遍历
          for (let prop in target) {
        
            // 如果这个属性是 target 自身的
            // 而不是通过原型链给的，那就赋值过来
            if (target.hasOwnProperty(prop)) {
              result[prop] = target[prop];
            }
          }
        
          // 返回拷贝后的结果
          return result;
        }
        ```

      - 

    - 深拷贝：

      - 手写深拷贝

        - 拷贝和赋值的区别：

          - 这里需要明白在js 中变量的存储方式；首先基础类型是存储在栈类型；引用类型是存储在堆类型；
          - 堆类型是变量的值存储的位置，对应的栈是存储地址；

        - 深拷贝需要考虑到

          - 循环引用

            - 解决的方式是通过新开辟一块存储空间，记录引用，如果有引用的话，直接使用存储空间的即可。

          - 性能优化的问题 

            - for in 循环是浪费时间最多的
            - while 是时间最小的

          - ```js
            function forEach(array, iteratee) {
                let index = -1;
                const length = array.length;
                while (++index < length) {
                    iteratee(array[index], index);
                }
                return array;
            }
            
            
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
            ```

          - 

      - 借助 `JSON.parse(JSON.stringify()) `   【有限制的深拷贝】

      - 借助第三方库 Lodash、jQuery 等。      

  - 手写实现event Emitter 【finish】 

    - 实现emit , once , off , on 方法

  - 手写函数curry:

    - 

  - 手写实现promise

    - 

  - 手写实现 mini-vue [后面的事情]

  - 手写实现 mini-webpack [后面的事情]

### css

- 手写系列：

  - 手写实现九宫格布局

  - 手写实现垂直居中布局

    - 使用flex布局

      - Flex: 属性作用在子元素上的
      - Flex-grow / flex-shrink / flex-basis；
        - grow：扩展
        - shrink：收缩
        - basis：基准
        - wrap：是否换行
        - direction：方向

    - 使用inline- block布局

    - ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>垂直居中布局</title>
          <style>
              /* body {
                  height: 600px;
              }
              .container {
                  width: 100%;
                  height: calc(100%);
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }
              .container .box {
                  width: 40px;
                  height: 40px;
                  background-color: aqua;
              } */
              .container {
        background: #777777;
        height: 400px;
        text-align: center;
        font-size: 0;
        overflow: auto;
      }
      
      .container::after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      
      .container .content {
        display: inline-block;
        vertical-align: middle;
        width: 100px;
        height: 100px;
        background: #ee5f28;
      }
      
          </style>
      </head>
      <body>
          <div class="container">
              <div class="content"></div>
          </div>
      </body>
      </html>
      ```

    - 

  - 手写实现等腰直角三角形

- 垂直水平居中布局

  - 文字、图片垂直水平布局：
    - table-cell
  - 内部块知道width && height:
    - 直接使用flex布局

- 盒子模型

- flex 布局：

  - 主轴： main ， 水平
  - 交叉轴： 垂直：
  - 作用在父级，操作子元素：
    - Align-items: 垂直轴
    - Justify-content: 主轴

  - 属性：
    - flex-wrap：
    - Flex-flow = flex-direction + flex-wrap
    - 更好的控制元素： 
      - Flex-shrink:
      - Flex-grow:  在basic基础上，进行延展 ， 1 是平分；
      - Flex-basis: 规定元素可用空间的大小
      - flex属性：flex-grow flex-shrink flex-basis

- 九宫格布局：

  - grid 布局： 

   - flex: 
   - table 布局；
   - 浮动；
   - 行内块级；

- css 模块化：

  - 常用的 postcss 使用场景有：
    - 配合 stylelint 校验 css 语法
    - 自动增加浏览器前缀 autoprefixer
    - 编译 css next 的语法

- css 间隔：

  - 使用BEM的方式

- css 选择器：

  - 选择器的优先级

- css 性能优化：

  - 合并css文件，如果页面加载10个css文件,每个文件1k，那么也要比只加载一个100k的css文件慢。

  2. 减少css嵌套，最好不要嵌套三层以上。
  3. 不要在ID选择器前面进行嵌套，ID本来就是唯一的而且权限值大，嵌套完全是浪费性能。
  4. 建立公共样式类，把相同样式提取出来作为公共类使用。
  5. 减少通配符*或者类似[hidden="true"]这类选择器的使用，挨个查找所有...这性能能好吗？
  6. 巧妙运用css的继承机制，如果父节点定义了，子节点就无需定义。
  7. 拆分出公共css文件，对于比较大的项目可以将大部分页面的公共结构样式提取出来放到单独css文件里，这样一次下载 后就放到缓存里，当然这种做法会增加请求，具体做法应以实际情况而定。
  8. 不用css表达式，表达式只是让你的代码显得更加酷炫，但是对性能的浪费可能是超乎你想象的。
  9. 少用css rest，可能会觉得重置样式是规范，但是其实其中有很多操作是不必要不友好的，有需求有兴趣，可以选择normolize.css。
  10. cssSprite，合成所有icon图片，用宽高加上background-position的背景图方式显现icon图，这样很实用，减少了http请求。
  11. 善后工作，css压缩(在线压缩工具 YUI Compressor)
  12. GZIP压缩，是一种流行的文件压缩算法。

  - 减少reflow情况出现

    - 改变窗口的大小  

      2. 改变文字的大小
      3. 添加 删除样式表
      4. 内容的改变 输入框输入内容也会
      5. 伪类的激活
      6. 操作class属性
      7. 脚本操作dom js改变css类
      8. 计算offsetWidth和offsetHeight
      9. 设置style属性
         10.改变元素的内外边距 


### html

- 白屏：

  - 网络请求的时间 + 页面渲染的时间

  - 网络请求涉及到DNS 加载  ， TCP 连接； 

  - 页面渲染涉及到DOM解析 ， CSSOM解析和JS 的作用上；

    

### project 

- 监控系统
  - Qiankun + nest + ES
- vue2 脚手架模版
  - Vue-template-compiler:
  - Vue-loader
- 文档中心
  - nest + vdr
- 物料系统
  - 多选筛选组件
  - 排行榜组件
  - 文档组件
  - Js-function && js-bridge
- 新人文档
  - 释放价值 ， 赋能
- 预渲染插件
  - Pretender-spa-plugin；
  - webpack 插件；

- 有价值的项目 ， 沉淀出自己的方法论，挑战和解决方案：

  - 物料组件：多选筛选组件：

    - 问题：应用在new-marketing 项目中报：`row is not defined`的错误，比较奇怪的是，这个物料在测试的时候是正常的，但是到了工程里面却不行了，一开始认为自己是作用域插槽写法的问题，但是自己仔细看了文档，发现自己的写法是没有问题的，于是我就找了其他的使用作用域插槽的物料，这个物料在玩家社区上某一个项目是可以完美运行的，所以只要这个项目正确运行，在比较作用域插槽写法的异同，就可以找到问题了，但是这个物料在商业化项目中也是无法正常运行的，报相同的错误，那么这基本可以断定不是物料的问题 ， 是工程配置的问题。

      又因为这个工程是Vue SFC ，基于webpack  ， 作用域插槽的概念是Vue 引入的，在Vue-loader 和 Vue-template-compiler 中处理的，所以我就去找这两个包是否在有问题。在商业化旧的项目中，发现没有引入vue-loader , 是脚手架内部内置vue-loader , 脚手架的查找方案是如果工程中没有这个loader，就使用脚手架内部的loader，脚手架内部的loader版本是13.0.4 ， 所以太老了。工程中安装最新版本vue-loader  15.9.8 和 vue-template-compiler , 运行良好；

      涉及的知识点：loader机制 ， vue-template-compiler , 了解它嘛;  详细说明vue-loader 的执行过程 ， 以及如何结合vue-template-compiler 执行功能的。 老版本的vue-template-compiler是没有对v-slot 执行逻辑的。

      - Vue-loader: webpack loader 机制 ， 其实是将非JS 文件转换为可以JS处理的文件。
      - Vue-template-compiler : template -------[compiler] ---------HTML;

  - 玩家社区项目：jsbridge

    - 场景复现：

      - 截屏触发两次分享的现象：

      - 因为是使用了jsbridge，通过jsbridge 实现截屏触发分享的操作，排查方案通过打印的方式。截屏是通过jsbridge和客户端进行通信调用截屏API实现的。截屏出现两次分享说明是请求了两次。源码里面jsbridge 是通过iframe的方式发起的，可能会出现iframe没有清除的情况，所以callback没有成功执行的时候，也需要手动清除iframe。

    - jsbridge原理:

      - 通信； jsbridge 是单独运行在js context 中的，和js 环境天然隔离。
      - jsbridge 调用native：注入API；2. 拦截URL SCHEMA ， iframe.src 发送url schema; native.调用js 的话 ， 直接使用window挂载的jsbridge即可。

    - jsbridge源码：

      - 挂载在window上面，通过立即执行函数的方式传入window对象，和js. 运行时天然隔离。

  - 预渲染插件：

    - 首先这部简简单单是一个技术侧的事情，还涉及到视觉同学对该方案的关心。
    - 方法论：首先做出demo给视觉的同学看，是否满足视觉的要求。因为不满足的话，我们的技术方案可能也得需要重新设计。现有的pretender-spa-plugin内置的rerender 其实是依赖puppeteer，这个包非常的大，这样的话，增加了大量的线上发布时间，所以需要采取轻量的技术方案来实现。使用轻量的puppeteer- core这个包进行实现；
    - 那么视觉接受的方案采用接近FMP阶段的背景色来作为FCP的内容，如何获取mounted阶段渲染的内容呢，通过vue-rerender-ssr;

  - 训练服务器：

    - 标注出现的问题，标注使用konva 来实现；

跨页面通信的方式：

- broadcast 方式：
  - Service worker 
- storage [tricky] 监听local Storage
- IndexedDB / cookie ； 读取indexDB 中的数据； 长轮询和长共享
- 可以基于服务端/ websocket ;



路由的变化：

- hash 模式：
  - 锚点；
- history 模式：
  - history 是一个堆栈；
  - pushState 将路由信息存入堆栈中； 不会导致页面的刷新；



dom 树的生成需要考虑到js 的因素：

- dom 树生成的过程中， js 会对其进行编排；
- 加载资源的时候 ，chrome 对字节流进行了预解析；
- async 和 defer 虽然都是异步的，不过还有一些差异，使用 async 标志的脚本文件一旦加载完成，会立即执行；而使用了 defer 标记的脚本文件，需要在 DOMContentLoaded 事件之前执行。
- 首先是样式资源先下载解析，因为js 文件是会依赖样式文件的，这是原因。
- 渲染引擎还有一个安全检查模块叫 XSSAuditor，是用来检测词法安全的。在分词器解析出来 Token 之后，它会检测这些模块是否安全，比如是否引用了外部脚本，是否符合 CSP 规范，是否存在跨站点请求等。如果出现不符合规范的内容，XSSAuditor 会对该脚本或者下载任务进行拦截。详细内容我们会在后面的安全模块介绍，这里就不赘述了
- CSP 规范执行加载的有效域，只有在有效预的脚本才可以执行。







[浏览器的架构](https://xie.infoq.cn/article/5d36d123bfd1c56688e125ad3)





### 简历分析

- 业务

  - 商业化业务：效果广告和品牌广告，店铺推广 / 商品精准推广 / 关键词推广 / 内容推广

  - 玩家社区业务： 棉花娃娃 ，娃柜 ，娃博；【jsbridge】

    - 技术：
      - Vue-router:
        - hash 模式是通过锚点来加载组件的，URL改变不会造成页面的刷新；

  - 文档中心

    - nestJS
    - node

  - 物料平台

    - 多选筛选列表
    - 排行榜组件
    - 外网文档发布组件
    - 技术：
      - 组件传递数据
        - 异步的逻辑是写在action中的
      - vue2 : 响应式更新
        - object.defineProperty 函数， 其实是对对象添加属性， 添加一个observer；通过这个observer来触发DOM 更新；
        - 使用proxy ， 性能会更好
        - proxy 原生支持对对象的监听；
      - tsx:
        - Vue-support-tsx / vue.extend功能

  - 监控平台

    - 后端：
      - 数据：ES
      - 服务：nest JS ， 暴露HTTP接口
    - 前端
      - 微前端架构 ； qiankun;
      - 主应用 / 子应用；
      - 沙盒隔离CSS样式；

  - 计算机网络相关：

    - 缓存：

      - 强缓存 / 协商缓存

        - 强缓存：如果缓存没有失效， 就使用缓存中的数据； cache-control:
        - 协商缓存：last-modified ,  if -modify-since； 
        - Etag / If-None-Match 优先级更高；也属于协商缓存；

        

  - 脚手架相关

    - 模版的更新
    - 预渲染插件：
      - 
    - 前端工程化：
      - vbuilder 打包新能优化；提升构建速度的方式
        - 添加入口；
      - vue2 模版更新；



### 前端安全：

 - cps: 内容安全策略
   - csrf token : token 是后端使用hash 直接生成的。可以写在DOM节点中；

