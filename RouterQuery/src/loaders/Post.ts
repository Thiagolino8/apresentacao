import { QueryClient } from '@tanstack/react-query'
import { Params } from 'react-router-dom'

import { postQuery } from '../queries/postQuery'

export const postLoader =
	(queryClient: QueryClient) =>
	async ({ params: { postId } }: { params: Params<string> }) => {
		const query = postQuery(Number(postId))
		return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
	}
