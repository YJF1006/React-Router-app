/*
* @Author: duqinzhi
* @Date:   2018-06-25 15:44:12
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 17:29:33
*/
import React,{Component} from 'react';
export default class UserAdd extends Component{
	handleSubmit = ()=>{
		let name = this.refs.name.value;
		let userStr = localStorage.getItem('users');  //从缓存中读取用户列表
		let users = userStr?JSON.parse(userStr):[];  //转成对象数组
		users.push({id:Date.now(),name});            //向此数组中添加新的对象
		localStorage.setItem('users',JSON.stringify(users));  //把新数组保存
		this.props.history.push('/user/list');   //跳转到用户列表页
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					{/*姓名*/}
					<div className="form-group">
						<label htmlFor="name">姓名</label>
						<input type="text" className='form-control' ref='name' /> 
						 {/*ref的调用，当这个虚拟的挂载到真实的dom上时候调用 ref引用的是真实的Dom*/}
					</div>
					{/*提交按钮*/}
					<div className="form-group">
						<input type="submit" className='btn btn-primary'/>
					</div>
				</form>
			</div>
		)
	}
}