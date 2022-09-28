import { useNavigation, useRevalidator } from 'react-router-dom'
import loading from '/oval.svg'

export const Loading = () => {
	const { state: revalidator } = useRevalidator()
	const { state: navigation } = useNavigation()
	return (
		<>
			{(revalidator !== 'idle' || navigation !== 'idle') && (
				<img src={loading} className='fixed -translate-y-1/2 left-1/2 top-1/2' />
			)}
		</>
	)
}
