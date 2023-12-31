import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { createPost, deletePost, getAllPost, getPost, getUserPosts, updatePost } from '../Controllers/postController.js'


const postRouter = express.Router()

postRouter.post('/create/:userId', verifyToken, createPost)
postRouter.get('/posts', getAllPost)
postRouter.get('/user/:userId', verifyToken, getUserPosts)
postRouter.get('/:postId', getPost)
postRouter.patch('/update/:postId', verifyToken, updatePost)
postRouter.delete('/delete/:postId', verifyToken, deletePost)


export default postRouter