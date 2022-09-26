import React from 'react'
import { useStore } from '../stores/Zustand'
import { ReactTemplate } from '../templates/ReactTemplate'

export const ZustandCounter = () => {
	const { count, setCount, reset, double, countByHalf } = useStore()
	const increment = () => setCount(count + 1)
	const decrement = () => setCount(count - 1)
	return (
		<ReactTemplate
			count={count}
			countByHalf={countByHalf()}
			increment={increment}
			decrement={decrement}
			reset={reset}
			double={double}
		/>
	)
}
