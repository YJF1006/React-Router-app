/*
* @Author: duqinzhi
* @Date:   2018-06-25 11:05:29
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 11:26:43
*/
//引入路由
import React from 'react';
import {
	HashRouter as Router,  //容器
	Route  //一条路由
} from 'react-router-dom';

//引入组件
import Home from './Home.js';      //主页
import User from './User.js';      //用户
import Profile from './Profile.js' //个人设置

/*默认导出路由*/
export default (
	<Router>
		<div>  {/*Router里面只能有一个children所以用div把Route包裹起来*/}
			<Route path='/home' component={Home}></Route>
			<Route path='/user' component={User}></Route>
			<Route path='/profie' component={Profile}></Route>	
		</div>	
	</Router>
)