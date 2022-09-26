import { useStore } from '../store'

export const Derived = () => {
	const store = useStore()
	return (
		<>
			<div className='stat'>
				<p className='stat-value'>Counter 1 + 2 = {store.derivedCounter}</p>
			</div>
			<div className='btn-group'>
				<button className='btn btn-primary' onClick={() => (store.setCount3(7))}>
					Set third counter to 7
				</button>
			</div>
		</>
	)
}