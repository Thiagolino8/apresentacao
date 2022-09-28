import { useRevalidator } from 'react-router-dom'
import loading from '/oval.svg'

export const Loading = () => {
	const revalidator = useRevalidator()
	return (
		<>{revalidator.state !== 'idle' && <img src={loading} className='fixed -translate-y-1/2 left-1/2 top-1/2' />}</>
	)
}
