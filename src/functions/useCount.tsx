import React,{ useState, useEffect, useRef } from 'react'



function useCount(startTime:number) {

  	const [count,setCount] = useState(startTime) //startTime 为初始值
	const timerRef = useRef<NodeJS.Timer>()//范型，解构赋值来获取 NodeJS 的 Timer 元素

	//不能在这里去判断是否到 0 了， 因为这里的 count 作用域就定了，所以火一直都打印出 5
	useEffect(() => { 
		//current 是 useRef 回调返回的一个【元素】，要在 React 中进行 DOM 操作，都可以通过 useRef Hook 来获取 DOM（比如，获取 DOM 的宽高等）
		timerRef.current = setInterval(() => {
				setCount((x) => x-1)//计时，🔥🔥 每次 x - 1, x 相当于就是 startTime 这个变量
		},1000)

		return () => {
			clearInterval(timerRef.current)//清除副作用
		}
	}, []);


	//用来判断时间，避免倒计时为 -
	useEffect(() => {
		if(count === 0){
			clearInterval(timerRef.current)
		}
	},[count])//依赖项



  return [count]//返回时间
}


export default useCount
