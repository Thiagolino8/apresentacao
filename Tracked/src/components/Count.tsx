import { useEffect } from 'react'
import { useStore } from '../store'

export const Count = () => {
	const store = useStore()
  return (
		<>
			<div className='stat'>
				<p className='stat-value'>{store.count}</p>
			</div>
			<div className='btn-group'>
				<button className='btn btn-primary' onClick={() => store.increment()}>
					Increment
				</button>
				<button className='btn btn-secondary' onClick={() => store.decrement()}>
					Decrement
				</button>
				<button className='btn btn-terciary' onClick={() => store.reset()}>
					Reset
				</button>
			</div>
		</>
	)
}