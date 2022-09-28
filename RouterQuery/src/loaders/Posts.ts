import { QueryClient } from '@tanstack/react-query'

import { postsQuery } from '../queries/postsQuery'

export const postsLoader = (queryClient: QueryClient) => async () => {
	const query = postsQuery()
	return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}
