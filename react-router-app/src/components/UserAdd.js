/*
* @Author: duqinzhi
* @Date:   2018-06-25 15:44:12
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-26 08:28:57
*/
import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';  //弹出框组件  路由自带的
export default class UserAdd extends Component{
	constructor(props){
		super(props);
		this.state={blocking:false};   //是否阻止  当文本上有内容的时候变为true(阻止跳转) 
	}
	//提交
	handleSubmit = ()=>{
		let name = this.refs.name.value;
		let userStr = localStorage.getItem('users');  //从缓存中读取用户列表
		let users = userStr?JSON.parse(userStr):[];  //转成对象数组
		users.push({id:Date.now(),name});            //向此数组中添加新的对象
		localStorage.setItem('users',JSON.stringify(users));  //把新数组保存
		this.setState({
			blocking:false    //更改状态，允许跳转   先设置状态再跳转
		},()=>{
			this.props.history.push('/user/list');   //跳转到用户列表页
		});


	}
	//文本框发生改变的时候
	handleChange = (event) =>{
		if(event.target.value && event.target.value.length>0){   //当文本框有值，并且值大于0的时候 blocking为true
			this.setState({blocking:true});   //更新blocking为true
		}
		
	}
	render(){
		return(
			<div>
				<Prompt
					when = {this.state.blocking}
					message = {(location)=>`确定要跳转到${location.pathname}`}
				></Prompt>
				<form onSubmit={this.handleSubmit}>
					{/*姓名*/}
					<div className="form-group">
						<label htmlFor="name">姓名</label>
						<input type="text" className='form-control' ref='name' onChange = {this.handleChange}/> 
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


/*Prompt 弹出框组件  路由自带的一个组件
	1. 它有一个属性为 when 是布尔值
			当 when=true 的时候跳转的时候会提示
			当 when=false 的时候跳转的时候不会提示
	2. 属性 message 是存放提示信息的
		一般是个匿名函数，(location)=><h3> `确定跳转到${location.pathname}` </h3>
*/