import { useSelector } from "react-redux"
import api from "../../api/axios"
import requests from "../../api/requests"
import Post from "../../components/home/Post"
import Layout from "../../components/layout/Layout"
import Create from "../../components/posts/Create"

export const getServerSideProps = async (ctx) => {

    const res = await api.get('/posts')

    return {
        props: {
            posts: res.data
        }
    }
}

const Posts = ({ posts }) => {

    const { user } = useSelector(state => state.auth)

    return (
        <Layout>

            <main className="max-w-[90%] mx-auto mt-4 space-y-5">

                <section className="flex items-center justify-between max-w-[95%] mx-auto">
                    <h2 className="text-2xl font-semibold text-marine tracking-wide">All Posts</h2>
                    {user.role === 'admin' ? <Create /> : null}
                </section>

                <section className="flex flex-wrap gap-5">
                    {
                        posts?.map(p => (
                            <Post key={p._id} createdAt={p.createdAt} title={p.title} category={p.category} description={p.description} image={p.image} />
                        ))
                    }
                </section>
            </main>
        </Layout>
    )
}

export default Posts
