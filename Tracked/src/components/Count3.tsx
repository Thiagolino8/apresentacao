import { useStore } from '../store'

export const Count3 = () => {
	const store = useStore()
	return (
		<>
			<div className='stat'>
				<p className='stat-value'>{store.count3}</p>
			</div>
			<div className='btn-group'>
				<button className='btn btn-primary' onClick={() => store.increment3()}>
					Increment
				</button>
				<button className='btn btn-secondary' onClick={() => store.decrement3()}>
					Decrement
				</button>
				<button className='btn btn-terciary' onClick={() => store.reset3()}>
					Reset
				</button>
			</div>
		</>
	)
}