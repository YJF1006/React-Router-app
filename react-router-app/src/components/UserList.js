/*
* @Author: duqinzhi
* @Date:   2018-06-25 15:42:37
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 18:01:33
*/
import React,{Component} from 'react';
import {Router,Route,Link} from 'react-router-dom';
export default class UserList extends Component{
	constructor(){
		super();
		this.state = {users:[]};
	}
	//页面挂载之前(加载数据)
	componentWillMount(){
		//读取数据
		let userStr = localStorage.getItem('users');  //从缓存中读取用户列表
		let users = userStr?JSON.parse(userStr):[];  //转成对象数组
		//更新数据
		this.setState({users});
	}
	render(){
		return(
			<ul className='list-group'>					
				{
					this.state.users.map(user=>(
						<li key={user.id} className='list-group-item'>
							<Link to={`/user/detail/${user.id}`}>{user.name}</Link>
						</li>
					))
				}
			</ul>
		)
	}
}
