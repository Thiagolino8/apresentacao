import 'solid-js'

interface Props {
	count: () => number
	countByHalf: () => number
	increment: () => void
	decrement: () => void
	reset: () => void
	double: () => void
}

export const SolidTemplate = ({ count, countByHalf, increment, decrement, reset, double }: Props) => (
	<div className='flex flex-col items-center justify-center flex-1 text-center'>
		<div className='stat'>
			<p className='stat-value'>count: {count()}</p>
			<p className='stat-value'>countByHalf: {countByHalf()}</p>
		</div>
		<div className='btn-group'>
			<button className='btn btn-primary' onClick={increment}>
				Increment
			</button>
			<button className='btn btn-secondary' onClick={decrement}>
				Decrement
			</button>
			<button className='btn btn-error' onClick={reset}>
				Reset
			</button>
			<button className='btn btn-warning' onClick={double}>
				Double
			</button>
		</div>
	</div>
)
