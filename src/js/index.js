import  Vue  from "vue";
import  VueRouter from "vue-router";
Vue.use(VueRouter);
import animate from 'animate.css'

// console.log(VueRouter)
import app from './app.vue'
import {routerObj} from '../router.js'
// console.log(routerObj)
// import {title123 as title,showFun} from './test.js'
// console.log(title123,showFun())
// console.log(login)

window.onload=function(){
  window.app = new Vue ({
    el: "#app",
    data: {
      flag: false,
      flag2: false,
      firstname:"",
      // totalname: "",
      secondname: "",
      list:{
        name:"hehewajueji",
        age:12,
        gender:"man"
      },
      zujianname:'addnum',
      sondata:''
    },
    computed:{
      //计算属性其实就是一个方法，但是使用的时候不需要用()，当做属性去使用就好
      // 只要计算属性内部用到的任何data发生了变化，就会同步触发计算属性的变化
      totalname:function(){
        return this.firstname + this.secondname
      }
    },
    watch:{
      "firstname":function(){
        // this.totalname = this.firstname + this.secondname
        // console.log(this.totalname)
      },
      "secondname": function()  {
        // this.totalname = this.firstname + this.secondname
      },
      '$route.path':function(newVal){
        if(newVal=="/login"){
          console.log("login")
        } else if (newVal == "/register") {
          console.log("register")
        }
      }
    },
    // render: function (createElement){
    //   // createElement,名字可以随便取，调用它可以把指定的组件模板渲染为html结构
    //   return createElement(login)
    // },
		//简写
		render:createElement=>createElement(app),
    methods: {
      // plusName(){
      //   this.totalname=this.firstname+this.secondname
      // },
      //注意：动画钩子函数的第一个参数el,表示要执行动画的那个DOM元素，是一个原生的JS DOM 对象
      //可以认为 el 是通过document.getElementById('')方式获取的原生JS DOM 对象
      beforeEnter(el){
        //表示动画入场前，此时，动画尚未开始，再次设置元素的起始位置或状态
        el.style.transform="translate(0,0)";
      },
      Enter(el,done){
        //这句代码没有实际的作用，但是不写没有效果。
        // 可以认为el.offsetWidth会强制动画刷新
        el.offsetWidth;
        //表示动画开始之后的样式，这里可以设置小球完成动画之后的结束状态
        el.style.transform = "translate(150px,500px)";
        el.style.transition = "all 1s ease";
        //这里的done 其实就是afterEnter 这个函数，也就是说，done是aferEnter 函数的引用
        done();
      },
      afterEnter(el){
        this.flag=!this.flag;
        // el.style.transform = "translate(0,0)";
      },
      showCon(){
        this.$refs.childrencom.plusNum()
      },
      showdata(data){
        this.sondata=data;
        console.log(this.sondata);
      }
    },
    created(){
      
    },
    // components:{
    //   childrencom:{
    //     template:'#testdata',
    //     props:['pdata'],
    //     data: () => {
    //       return {
    //         testdata1: "aho"
    //       }
    //     },
    //     methods: {
    //       senddata(){
    //         this.$emit('func',this.testdata1)
    //       }
    //     }
    //   },
    // },
    //将路由规则对象，注册到vue实例上
    router:routerObj,
  })
}

// var login={
//   template:'<div>登录组件<router-view></router-view></div> ',
//   created(){
//     // var _thisRouter = this.$route;
//     // console.log(_thisRouter.params.id,);

//   }
// }

var account = {
  template: '#tmp'
}

var register = {
  template: '<div>注册组件<router-view></router-view></div> '
}

var leftBox = {
  template:"<div>左边内容</div>"
}

var rightBox = {
  template: "<div>右边内容</div>"
}

var mainBox = {
  template: "<div>主要内容</div>"
}







Vue.component('addnum',{
  template:'#tem',
  data:()=>{
    return{
      num:0
    }
  },
  methods:{
    plusnum(){
      this.num++;
    }
  }
})

Vue.component('addnum2', {
  template: '#tem2',
  data: () => {
    return {
      num: 0
    }
  },
  methods: {
    plusnum() {
      this.num++;
    }
  }
})

Vue.component('addnum3', {
  template: '#tem3',
  data: () => {
    return {
      num: 0
    }
  },
  methods: {
    plusnum() {
      this.num++;
    }
  }
})






