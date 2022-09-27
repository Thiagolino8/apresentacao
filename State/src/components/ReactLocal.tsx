import { useState } from 'react';

import { ReactTemplate } from '../templates/ReactTemplate';

export const ReactLocal = () => {
	const [count, setCount] = useState(0)
	const countByHalf = count / 2
	const increment = () =>  setCount((count) => count + 1)
	const decrement = () => setCount(count - 1)
	const reset = () => setCount(0)
	const double = () => setCount(count * 2)
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
