import dbConnect from '../../../server/dbConnect'
import Post from '../../../server/models/Post'

const getPostBySlug = async (req, res) => {
    const { method } = req
    const { slug } = req.query

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    try {
        const post = await Post.findOne({ slug })

        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
}

export default getPostBySlug
