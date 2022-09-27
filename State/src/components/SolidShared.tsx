import 'solid-js';
import { useStore } from '@nanostores/solid';
import { count, countByHalf, double, reset, setCount } from '../stores/Nano';
import { SolidTemplate } from '../templates/SolidTemplate';

export const SolidShared = () => {
	const $count = useStore(count)
	const $countByHalf = useStore(countByHalf)
	const increment = () => setCount($count() + 1)
	const decrement = () => count.set($count() - 1)
	return (<>
  <h1 className='text-3xl font-bold text-center'>This is a Solid component</h1>
		<SolidTemplate
			count={$count}
			countByHalf={$countByHalf}
			increment={increment}
			decrement={decrement}
			reset={reset}
			double={double}
		/></>
	)
}
