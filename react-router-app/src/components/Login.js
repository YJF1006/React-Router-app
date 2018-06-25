/*
* @Author: duqinzhi
* @Date:   2018-06-25 20:41:28
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 21:49:41
*/
import React from 'react'
import {Redirect,Route} from 'react-router-dom';
export default function(props){
	return(
		<button className='btn btn-primary btn-xs' onClick={()=>{
			localStorage.setItem('login','true');
			props.history.push(props.location.back);   //跳转到登录前面的路径  父已经传过来了在state里面
		}}>登录</button>
	)
}