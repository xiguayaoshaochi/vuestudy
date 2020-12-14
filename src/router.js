import  Vue  from "vue";
import  VueRouter from "vue-router";
Vue.use(VueRouter);
import login from './js/login.vue'
import login1 from './js/login1.vue'
import login2 from './js/login2.vue'

var routerObj = new VueRouter({
  //route表示路由匹配规则
  routes:[
    // 每个路由规则都是一个对象，都有2个必须的属性：a.path,表示监听哪个路有链接地址;b.component(必须是一个组件的模板对象，不是组件名称),表示对应哪个组件;
    // {
    { path:'/login',
			component:login,
			children:[
				{ path: 'login1', component: login1 },
				{ path: 'login2', component: login2 },
			]
		},
  ],
  // linkActiveClass:"myactive"
})


export {routerObj};