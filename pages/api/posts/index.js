import dbConnect from '../../../server/dbConnect'
import Post from '../../../server/models/Post'

const getPosts = async (req, res) => {
    const { method } = req

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    try {
        const posts = await Post.find().sort({ createdAt: -1 })

        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
}

export default getPosts