import { useState } from 'react'
import { Layout } from './screens/Layout'
import { Post } from './screens/Post'
import { Posts } from './screens/Posts'
import './styles/App.css'

const App = () => {
	const [postId, setPostId] = useState(-1)
	return (
		<Layout>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
		</Layout>
	)
}

export default App
