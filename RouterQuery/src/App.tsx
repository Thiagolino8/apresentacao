import { QueryClient } from '@tanstack/react-query'
import { createBrowserRouter } from 'react-router-dom'
import { postLoader } from './loaders/Post'
import { postsLoader } from './loaders/Posts'
import { Layout } from './screens/Layout'
import { Post } from './screens/Post'
import { Posts } from './screens/Posts'
import './styles/App.css'

const App = (queryClient: QueryClient) => createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <span>Error</span>,
		children: [
			{
				loader: postsLoader(queryClient),
				path: '/',
				element: <Posts />,
			},
			{
				loader: postLoader(queryClient),
				path: '/:postId',
				element: <Post />,
			},
		],
	},
])

export default App
