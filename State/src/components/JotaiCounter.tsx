import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import React from 'react';

import { countAtom, countByHalfAtom, doubleCountAtom, resetCountAtom, setCountAtom } from '../stores/Jotai';
import { ReactTemplate } from '../templates/ReactTemplate';

export const JotaiCounter = () => {
	const [count, setCount] = useAtom(countAtom)
	const countByHalf = useAtomValue(countByHalfAtom)
	const atomSetter = useSetAtom(setCountAtom)
	const increment = () => setCount(count + 1)
	const decrement = () => atomSetter(count - 1)
	const reset = useSetAtom(resetCountAtom)
	const double = useSetAtom(doubleCountAtom)
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
