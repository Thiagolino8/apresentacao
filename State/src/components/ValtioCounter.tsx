import React from 'react'
import { useSnapshot } from 'valtio'

import { countProxy } from '../stores/Valtio'
import { ReactTemplate } from '../templates/ReactTemplate'

const increment = () => countProxy.count++

export const ValtioCounter = () => {
	const { count, setCount, reset, countByHalf, double } = useSnapshot(countProxy)
	const decrement = () => setCount(count - 1)
	return (
		<ReactTemplate
			count={count}
			countByHalf={countByHalf}
			increment={increment}
			decrement={decrement}
			reset={reset}
			double={double}
		/>
	)
}
