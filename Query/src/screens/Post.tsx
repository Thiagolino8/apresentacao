import { useQueryClient } from '@tanstack/react-query';
import { Dispatch } from 'react';

import { usePost } from '../hooks/usePost';

import type { PostType } from '../types'
export const Post = ({
	postId,
	setPostId,
}: {
	postId: PostType['id']
	setPostId: Dispatch<React.SetStateAction<number>>
}) => {
const queryClient = useQueryClient()

	const { status, data } = usePost(Number(postId))

	return (
		<div>
			{!postId || status === 'loading' ? (
				'Loading...'
			) : status === 'error' ? (
				<span>Error</span>
			) : (
				<>
					<h1>{data.title}</h1>
					<div>
						<p>{data.body}</p>
					</div>
				</>
			)}
			<div className="flex gap-5">
				<a
					className='btn-primary btn'
					onClick={(event) => {
						event.preventDefault()
						setPostId(-1)
					}}
					href='#'
				>
					Back
				</a>
				<button onClick={() => queryClient.invalidateQueries(['post', postId])} className='btn btn-primary'>
					Invalidate
				</button>
			</div>
		</div>
	)
}
