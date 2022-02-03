import Layout from "../../components/layout/Layout"
import requireAuth from "../../server/utils/requireAuth"

const CreatePost = () => {
    return (
        <Layout>
            <div className="h-screen bg-red-900">
                Create post page
            </div>
        </Layout>
    )
}

export default requireAuth(CreatePost, true)