import Link from "next/link"
import Layout from "../../components/layout/Layout"

const Posts = () => {
    return (
        <Layout>
            Posts Page
            <Link href="/posts/create">create</Link>
        </Layout>
    )
}

export default Posts