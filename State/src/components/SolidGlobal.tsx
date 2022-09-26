import 'solid-js'
import { count, setCount, countSetter, reset, double, countByHalf } from '../stores/Solid'
import { SolidTemplate } from '../templates/SolidTemplate'

export const SolidGlobal = () => {
	const increment = () => setCount(count() + 1)
  const decrement = () => countSetter(count() - 1)
	return (
		<SolidTemplate
			count={count}
			countByHalf={countByHalf}
			increment={increment}
			decrement={decrement}
			reset={reset}
			double={double}
		/>
	)
}
