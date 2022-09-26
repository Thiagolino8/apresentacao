import { useStore } from '../store'

export const Count2 = () => {
	const store = useStore()
	return (
		<>
			<div className='stat'>
				<p className='stat-value'>{store.count2}</p>
			</div>
			<div className='btn-group'>
				<button className='btn btn-primary' onClick={() => store.increment2()}>
					Increment
				</button>
				<button className='btn btn-secondary' onClick={() => store.decrement2()}>
					Decrement
				</button>
				<button className='btn btn-terciary' onClick={() => store.reset2()}>
					Reset
				</button>
			</div>
		</>
	)
}