import { useIsFetching } from '@tanstack/react-query'
import loading from '/oval.svg'

export const Loading = () => {
	const isFetching = useIsFetching()
	return isFetching ? (
		<img src={loading} className='fixed -translate-y-1/2 left-1/2 top-1/2' />
	) : (
		<></>
	)
}
