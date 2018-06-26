/*
* @Author: duqinzhi
* @Date:   2018-06-26 07:24:10
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-26 08:06:03
*/
/*1.因为不需要状态，所以采用函数从声明*/
/*2.有时候我们需要一个组件不管是否匹配都显示一些东西 此时用children属性 (里面放的也是匿名函数)
	children 不管当前路径是否匹配上，都会渲染对应的组件
	父组件用<MenuLink label='文本' to='/路径'> </MenuLink>
  3. component 对应一个组件，当url路径跟当前Route path匹配时渲染
  4. render 对应一个匿名组件函数  当url路径跟当前Route path匹配时渲染
      component 和render 渲染机制一样，只不过对应不同
*/
import React from 'react';
import {Route,Link} from 'react-router-dom';
export default function(props){
	return(   
		<Route path={props.to} children={({match})=>{  /* 此处props有三个属性，可以解构  {match} 代表是否匹配上   匹配上加类名active,不匹配了就''*/
			return (
				<li className={match? 'active':''}><Link to={props.to}>{props.label}</Link></li>
			)
		}}></Route>
	)
}