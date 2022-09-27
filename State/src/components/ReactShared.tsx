import React from 'react';
import { useStore } from '@nanostores/react';
import { count, countByHalf, double, reset, setCount } from '../stores/Nano';
import { ReactTemplate } from '../templates/ReactTemplate';

export const ReactShared = () => {
	const $count = useStore(count)
	const $countByHalf = useStore(countByHalf)
	const increment = () => setCount($count + 1)
	const decrement = () => count.set($count - 1)
	return (<>
  <h1 className='text-3xl font-bold text-center'>This is a React component</h1>
		<ReactTemplate
			count={$count}
			countByHalf={$countByHalf}
			increment={increment}
			decrement={decrement}
			reset={reset}
			double={double}
		/></>
	)
}
