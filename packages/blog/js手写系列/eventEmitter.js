class _EventEmitter {
    constructor() {
      this.events = {};
    }
    on(type, listener, isUnshift) {
      // 因为其他的类可能继承自EventEmitter，子类的events可能为空，保证子类必须存在此实例属性
      if(!this.events) {
        this.events = {};
      }
      if(this.events[type]) {
        if(isUnshift) {
          this.events[type].unshift(listener);
        } else {
          this.events[type].push(listener);
        }
      } else {
        this.events[type] = [listener]
      }
  
      if(type !== 'newListener') {
        // node的EventEmitter模块自带的特殊事件，该事件在添加新事件监听器的时候触发
        this.emit('newListener', type);
      }
    }
    emit(type, ...args) {
      if(this.events[type]) {
        this.events[type].forEach(fn => fn.call(this, ...args));
      }
    }
    // 只绑定一次，然后解绑
    once(type, listener) {
      const me = this;
      function oneTime(...args) {
        listener.call(this, ...args);
        me.off(type, oneTime);
      }
      me.on(type, oneTime)
    }
    off(type, listener) {
      if(this.events[type]) {
        const index = this.events[type].indexOf(listener);
        this.events[type].splice(index, 1);
      }
    }
  }




  class eventEmitter {

      constructor() {
          this.events = {}
      }
      // 监听；
      on(type , listener , isUnshift) {
        if(!this.events) {
            this.events = {}
        }

        if(this.events[type]) {
            if(isUnshift) {
                this.events[type].unshift(listener)
            }
            else {
                this.events[type].push(listener)
            }
        } else {
            this.events[type] = listener
        }
    
        if(type !== 'newListener') {
            this.emit('newListener', type);
        }

      }
      // 执行
      emit(type , ...args){
          if(this.events[type]) {
              this.events[type].forEach(fn => fn.call(this , ...args))
          }
      }
      off(type , listener) {
          if(this.events[type]) { // 移除指定的listeners
              const index = this.events[type].indexOf(listener) 
              this.events[type].splice(index , 1)
          }
      }
      // 只绑定一次 然后解绑;  相比较来说 ，这一个比较的不好理解；
      once(type , listener){
        const me =this
        function onTime (...args) {
            const arg = [...args]
            listener.call(me , arg)
            me.off(type , onTime)
        }
        me.on(type,onTime)
      }
  }
  

  
  
const mylisten = function () {
    console.log('lisnten')
}
  

const emitter = new eventEmitter()
emitter.on('go' , mylisten)
console.log(emitter.events)


