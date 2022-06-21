// import React, { Component, Fragment } from 'react';
import React from 'react' 
import { hot } from 'react-hot-loader/root'//🔥在这个根组件内引入 hot 热更新组件！！
import './style/index.less'; //记得引入 less , 否则打包会找不到
import useCount from './functions/useCount';



function App() {
	const [count] = useCount(5)//传入开始时间
	

		return(
			<div className='App'>
				<h1>{count > 0 ? count:"时间结束"}</h1>
			</div>
		)

}


export default hot(App);//🔥热更新 root: 把「App」组件放到根组件内！！
