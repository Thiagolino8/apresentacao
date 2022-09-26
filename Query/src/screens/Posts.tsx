import { useQueryClient } from '@tanstack/react-query'
import { Dispatch, useEffect } from 'react'

import { usePosts } from '../hooks/usePosts'

export const Posts = ({ setPostId }: { setPostId: Dispatch<React.SetStateAction<number>> }) => {
	const queryClient = useQueryClient()
	const { status, data } = usePosts()

	return (
		<div>
			<h1 className='pb-4 text-3xl font-bold'>Posts</h1>
			<div>
				{status === 'loading' ? (
					'Loading...'
				) : status === 'error' ? (
					<span>Error</span>
				) : (
					<>
						<div>
							{data.map((post) => (
								<p key={post.id}>
									<a
										onClick={(event) => {
											event.preventDefault()
											setPostId(post.id)
										}}
										href='#'
									>
										{post.title}
									</a>
								</p>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	)
}
