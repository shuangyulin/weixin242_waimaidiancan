import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import dingdanpingjia from '@/views/modules/dingdanpingjia/list'
    import waimaiyuan from '@/views/modules/waimaiyuan/list'
    import storeup from '@/views/modules/storeup/list'
    import canting from '@/views/modules/canting/list'
    import caipinxinxi from '@/views/modules/caipinxinxi/list'
    import caipinfenlei from '@/views/modules/caipinfenlei/list'
    import waimaidingdan from '@/views/modules/waimaidingdan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import messages from '@/views/modules/messages/list'
    import config from '@/views/modules/config/list'
    import dingdanpeisong from '@/views/modules/dingdanpeisong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/dingdanpingjia',
        name: '订单评价',
        component: dingdanpingjia
      }
      ,{
	path: '/waimaiyuan',
        name: '外卖员',
        component: waimaiyuan
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/canting',
        name: '餐厅',
        component: canting
      }
      ,{
	path: '/caipinxinxi',
        name: '菜品信息',
        component: caipinxinxi
      }
      ,{
	path: '/caipinfenlei',
        name: '菜品分类',
        component: caipinfenlei
      }
      ,{
	path: '/waimaidingdan',
        name: '外卖订单',
        component: waimaidingdan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chat',
        name: '投诉反馈',
        component: chat
      }
      ,{
	path: '/messages',
        name: '在线留言',
        component: messages
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/dingdanpeisong',
        name: '订单配送',
        component: dingdanpeisong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
