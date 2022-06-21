import { useState, useEffect } from 'react'



function useCount(startTime:number) {

  const [count,setCount] = useState(startTime) //startTime 为初始值

	useEffect(() => { //默认执行一次
		// content
		return () => {

		};
	}, []);



  return [count]//返回时间
}


export default useCount
