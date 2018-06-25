/*
* @Author: duqinzhi
* @Date:   2018-06-25 11:08:16
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 20:01:15
*
*/
/*个人设置
	1.当用户访问个人设置的时候，先判断此用户是否已经登录
	2. 如果已经登录则可以直接系那是个人设置页面
	3.如果此用户没有登录，那么则跳转到登录直接登录
	4.如果登录成功则自动跳回登录前的页面
 */
import React,{Component} from 'react';
export default class Profile extends Component{
	render(){
		return(
			<div>
				profile
			</div>
		)
	}
}
