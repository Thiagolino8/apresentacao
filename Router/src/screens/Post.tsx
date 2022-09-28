import { Link, useLoaderData, useRevalidator } from 'react-router-dom'
import { PostType } from '../types'

export const Post = () => {
	const revalidator = useRevalidator()
	const data = useLoaderData() as PostType
	return (
		<div>
			<h1>{data.title}</h1>
			<div>
				<p>{data.body}</p>
			</div>
			<div className='flex gap-5'>
				<Link className='btn-primary btn' to='/'>
					Back
				</Link>
				<button onClick={() => revalidator.revalidate()} className='btn btn-primary'>
					Invalidate
				</button>
			</div>
		</div>
	)
}
