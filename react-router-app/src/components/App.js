/*
* @Author: duqinzhi
* @Date:   2018-06-25 11:05:29
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 15:12:18
*/
//引入路由
import React from 'react';
import {
	BrowserRouter as Router,  //容器
	Route,  //一条路由
	Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//引入组件
import Home from './Home.js';      //主页
import User from './User.js';      //用户
import Profile from './Profile.js' //个人设置

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
						<li><Link to='/home'>首页</Link></li>
						<li><Link to='/User'>用户管理</Link></li>	
						<li><Link to='/Profile'>个人设置</Link></li>
					</ul>
				</div>
			</nav>

			{/*容器里面放一个行再放一个12列里面放Route*/}
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<Route path='/home' component={Home}></Route>
						<Route path='/user' component={User}></Route>
						<Route path='/profile' component={Profile}></Route>	
					</div>
				</div>
			</div>

		</div>	
	</Router>
)

/*1.引入路由 Router  Route Link
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

 */