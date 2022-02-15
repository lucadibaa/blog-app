import slugify from 'slugify'
import dbConnect from '../../../server/dbConnect'
import { isAdmin, requireSignin } from '../../../server/middlewares'
import Post from '../../../server/models/Post'

const createPost = async (req, res) => {
    const { method } = req

    await dbConnect()

    if (method !== 'POST') {
        res.status(400).json({ success: false, message: 'Only POST requests are allowed.' })
    }

    const { title, category, description, image } = req.body

    try {
        const newPost = new Post({
            title,
            category,
            description,
            image,
            slug: slugify(title, { lower: true })
        })

        newPost.save((err, post) => {
            if (err) return res.status(400).json({ err })
            if (post) {
                return res.status(201).json({ post })
            }
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

export default requireSignin(isAdmin(createPost))
