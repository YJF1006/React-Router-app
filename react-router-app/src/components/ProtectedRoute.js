/*
* @Author: duqinzhi
* @Date:   2018-06-25 20:06:38
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-25 22:05:30
*/

/*通过函数方式定义组件   它的参数只能是属性对象props
	函数定义组件是简单的，
	类定义组件有状态
 所以当一个㢟不需要状态的时候可以使用函数来声明，当一个组件必须需要状态的时候，那么就必须用类来声明了
*/

//传过来props里面有两个属性props={path:'/profile',component:Profile}
//path = {path:'/profile'}
//<Route path='/profile'></Route>
// import React from 'react';
// import {Redirect,Route} from 'react-router-dom';
// export default function({component:Component,...rest}){
// 	return( 
// 		<Route {...rest} render={(props)=>
// 			localStorage.getItem('login')?
// 				<Component></Component>     /*登录渲染的页面*/
// 			:
// 				<Redirect to={               /*没登录 重定向组件 react原有的组件要引入*/
// 					{  
// 						pathname:'login',
// 						back:props.localtion.pathname//从哪里来	
// 					}
// 				}></Redirect>  
// 		}></Route>
// 	)
// }
import React from 'react';
import {Redirect,Route} from 'react-router-dom';
export default function({component:Xxx,...rest}){
   return <Route {...rest} render={(props)=>
       localStorage.getItem('login')?<Xxx/>:<Redirect to={{
           pathname:'/login',
           back:props.location.pathname// /profile
       }}/>
   }/>
}
/*1. Redirect  重定向组件 react原有的组件要引入
	1.  to 是一个对象里面有两个属性  一个是pathname  一个是state(是个对象存着从哪来)

	<Redirect to={
		{
			pathname:''
			state:{from:props.location.pathname}
		}
	}></Redirect>

 */


 