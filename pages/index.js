import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
// import Header from "../components/Header"
import Post from '../components/Post'
import { sortByDate } from '../utils'
// import Navbar from '../components/Navbar'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Compendium</title>
        <meta name="description" content="Resources of CSE" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4902109357091216"
        crossOrigin="anonymous">
        </script>
      </Head>
      {/* <Header /> */}
      {/* <Navbar /> */}
            

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
