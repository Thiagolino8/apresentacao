import { createBrowserRouter } from 'react-router-dom'
import { postLoader } from './loaders/Post'
import { postsLoader } from './loaders/Posts'
import { Layout } from './screens/Layout'
import { Post } from './screens/Post'
import { Posts } from './screens/Posts'
import './styles/App.css'

const App = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				loader: postsLoader,
				path: '/',
				element: <Posts />,
			},
			{
				loader: postLoader,
				path: '/:postId',
				element: <Post />,
			},
		],
	},
])

export default App
