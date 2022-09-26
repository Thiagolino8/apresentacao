import { useCallback, useMemo, useState } from 'react';

import { ReactTemplate } from '../templates/ReactTemplate';

export const StaleClojure = () => {
	const [count, setCount] = useState(0)
	const countByHalf = useMemo(() => count / 2, [])
	const increment = useCallback(() => setCount(count + 1), [])
	const decrement = useCallback(() => setCount(count - 1), [])
	const reset = useCallback(() => setCount(0), [])
	const double = useCallback(() => setCount(count * 2), [])
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
