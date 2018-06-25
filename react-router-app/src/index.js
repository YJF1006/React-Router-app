/*
* @Author: duqinzhi
* @Date:   2018-06-25 10:26:25
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 10:52:34
*/
/*漏油*/
import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,  //容器
	Route  //一条路由
} from 'react-router-dom';

//简单组件

function Home(){
	return <h1>Home</h1>
}
function User(){
	return <h1>User</h1>
}

function Profile(){
	return <h1>Profile</h1>
}
function All(){
	return <h1>All</h1>
}


ReactDOM.render(
	<Router>
		<div>  {/*Router里面只能有一个children所以用div把Route包裹起来*/}
			<Route path='/' component={All}></Route>
			<Route path='/home' component={Home}></Route>
			<Route path='/user' component={User}></Route>
			<Route path='/profie' component={Profile}></Route>
			
		</div>
		
	</Router>,
	document.querySelector('#root')
);