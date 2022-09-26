export const getPosts = async () => {
	const res = await fetch('/posts.json')
	const data = await res.json()
	return data.posts
}