import axios from "axios"
import { PostType } from "../types"

export const getPostById = (id: PostType["id"]) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({ data }) => data)
