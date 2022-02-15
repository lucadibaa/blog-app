import api from "../../api/axios"
import requests from "../../api/requests"

export const getServerSideProps = async ({ params }) => {

    const post = await api.get(`${requests.fetchPosts}/${params.slug}`)

    return {
        props: {
            post: post?.data
        }
    }
}

const Post = ({ post }) => {
    return (
        <div>
            { post.title}
        </div>
    )
}

export default Post
