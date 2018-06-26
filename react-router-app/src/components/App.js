/*
* @Author: duqinzhi
* @Date:   2018-06-25 11:05:29
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-26 08:33:40
*/
//引入路由
import React from 'react';
import {
	BrowserRouter as Router,  //容器
	Route,  //一条路由
	Link,   //路由跳转
	Switch   //路由匹配    从上往下匹配，要是有一个匹配上了，后面就不会匹配了更不会渲染
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//引入组件
import Home from './Home.js';      //主页
import User from './User.js';      //用户
import Profile from './Profile.js' //个人设置
import Login from './Login.js'    //登录按钮
import MenuLink from './MenuLink.js';      //高亮显示组件（chiledren）
import ProtectedRoute from './ProtectedRoute.js';   //受保护的个人设置
import NotFound from './404.js';
/*默认导出路由*/
export default (
	<Router>
		<div>  {/*Router里面只能有一个children所以用div把Route包裹起来*/}
			{/*导航*/}
			<nav className='navbar navbar-inverse'>
				{/*容器*/}
				<div className="container-fluid">
					{/*导航头*/}
					<div className="nav-Heading">
						<div className="navbar-brand">
							DQZ用户管理系统
						</div>
					</div>
					{/*ul 里面放着Link跳转*/}
					<ul className='nav navbar-nav'>
						<MenuLink label='首页' to='/home/'></MenuLink>  {/*传的属性有三个 label to */}
						<MenuLink label='用户管理' to='/user/'></MenuLink>
						<MenuLink label='个人设置' to='/profile/'></MenuLink>
					</ul>
				</div>
			</nav>

			{/*容器里面放一个行再放一个12列里面放Route*/}
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<Switch> 
							<Route exact path='/' render={props=><div>首页</div>}></Route>  {/* excat:精确匹配    采用函数定义法 */}
							<Route path='/home' component={Home}></Route>
							<Route path='/user' component={User}></Route>
							<Route path='/login' component={Login}></Route>
							<ProtectedRoute path="/profile" component={Profile}/> {/*受登录保护的路由*/}
							<Route  component={NotFound}></Route>   {/*不给path 的时候，代表所有路径都可以匹配*/}
						</Switch>

					</div>
				</div>
			</div>

		</div>	
	</Router>
)

/*1.引入路由 Router  Route Link  Switch
  2. render 的时候用 
  		render(
			<Router>
				<div> 
						{/*导航条}
					<ul>
						<Link to='/'>首页</Link>
					</ul>

						{/**下面共享的}
					<div>
						<Route path='/' component={组件名}></Route>
						<Route path='/' component={组件名}></Route>
					</div>

				</div>
			</Router>
  		)
  	3.Switch  //路由匹配    从上往下匹配，要是有一个匹配上了，后面就不会匹配了更不会渲染
	
	4.<Route exact path='/' render={props=><div>首页</div>}></Route> 
		exact: 代表精确匹配
		render={props=><div></div>}   组件的箭头函数定义
			等价于
			render = function(props){
				return <div></div>
			}

	5. 路由里面有
	 history ： 跳转路由和路径
	 location： 当前路径
	 match ： 匹配结果  传的占位符(url里面的参数)在  this.match.params.参数名

	 	例如： * 1.history    //跳转路由或者路径的
				2.location   //代表当前路径
						hash:""
						key:"2l5zps"
						pathname:"/user/detail/1"
						search:""
						state:undefined
				3.match:      //匹配结果 如果匹配上就是对象，匹配不上就是null
					isExact:true   //是否精确匹配
					params:{id: "1"}   重要关键
					path:"/user/detail/:id"
					url:"/user/detail/1"

	6.受保护的路由(自己写的组件)
	<ProtectedRoute path='' component={}></ProtectedRoute> 

	7. 有时候我们需要一个组件不管是否匹配都显示一些东西  即用 
		<MemuLink label='文本' to='/跳转路径'></MemuLink> 	    
 */