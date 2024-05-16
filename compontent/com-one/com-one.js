// compontent/com-one/com-one.js
Component({
options: {
  pureDataPattern: /^_/ // 纯数据字段，不用于页面显示，只用于处理，可提升性能
},
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: 'pyyy'
    },
    num: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _a: '666',
    number: 5,
    obj: {
      name: "pyyy",
      age: 28
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addNumber(){
      this.setData({
        number: ++this.data.number,
        num: ++this.data.num,
        obj: {
          name: "cxq",
          log: 24
        }
      })
    }
  },
  observers:{
    num: function (newVal, oldVal) {
      // 小程序监听没有oldValue
      console.log(newVal, oldVal, 'newValoldVal');
    },
    'num, number': function (newVal, oldVal) {
      console.log(newVal, oldVal, 'newValoldVal');
    },
    'num, number, obj': function (val1, val2, val3) {
      console.log(val1, val2, val3, 'newValoldVal');
    },
    'obj.name, obj.age': function (val1, val2) {
      console.log(val1, val2, 'newValoldVal');
    }
  }
})