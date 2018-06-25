/*
* @Author: duqinzhi
* @Date:   2018-06-25 16:26:05
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 19:00:53
*/
/*用户详情页*/
import React,{Component} from 'react';
export default class UserDetail extends Component{
	render(){
		//console.log(this.props);
		let id = this.props.match.params.id;
		let userStr = localStorage.getItem('users') //从缓存中读取用户列表
		let users = userStr?JSON.parse(userStr):[]  //转成对象数组
		let user = users.find(user=>user.id==id)   //找到user.id为传过来的id的
		return(
			<div>
				<table className='table table-body'>
					<tr>
						<td>ID</td>
						<td>姓名</td>
					</tr>
					<tr>
						<td>{user.id}</td>
						<td>{user.name}</td>
					</tr>
				</table>

			</div>
		)
	}
}

/**
 * 	//history 跳转路由 路径
	//match匹配结果 如果匹配上就是对象，匹配不上就是null
	//location 当前路径 pathname当前路径

 * 1.history    //跳转路由或者路径的
 * 2.location   //代表当前路径
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

<tr><td>ID</td><td>姓名</td></tr>
<tr><td>{user.id}</td><td>{user.name}</td></tr>
 */

