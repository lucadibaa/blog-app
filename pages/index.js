import Head from 'next/head'
import Post from '../components/home/Post'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next Blog App</title>
      </Head>

      <main className="max-w-[90%] mx-auto mt-4 space-y-5">

        <section className="max-w-[95%] mx-auto">
          <h2 className="text-2xl font-semibold text-marine tracking-wide">Home</h2>
        </section>

        <section className="flex flex-wrap gap-5">
          <Post />
          <Post />
          <Post />
        </section>

      </main>
    </Layout>
  )
}
