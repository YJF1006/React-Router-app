/*
* @Author: duqinzhi
* @Date:   2018-06-25 11:08:05
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 18:59:04
*/
import React,{Component} from 'react';
import {Router,Route,Link} from 'react-router-dom';
import UserList from './UserList.js';   //用户列表
import UserAdd from './UserAdd.js';     //添加用户
import UserDetail from './UserDetail.js'   //用户详情
export default class User extends Component{
	render(){
		return(
			<div className='row'>
				{/*导航菜单*/}
				<div className="col-sm-2">
					<ul className='nav nav-stacked'>
						<li>
							<Link to='/user/list'>用户列表</Link>
							<Link to='/user/add'>新增用户</Link>
						</li>
					</ul>
				</div>
				{/*放内容*/}
				<div className="col-sm-10">
					<Route path='/user/list' component={UserList}></Route>
					<Route path='/user/add'  component={UserAdd}></Route>
					<Route path='/user/detail/:id'  component={UserDetail}></Route>
				</div>
			</div>
		)

	}
}