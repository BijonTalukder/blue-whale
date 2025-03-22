import Breadcrumb from "@/common/breadcrumb"
import BlogGridArea from "./blog-grid-area"
import Header from "@/layout/headers/header"

const BlogGrid = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blog Grid" sm_title="Blog Grid" />
        <BlogGridArea />
      </main>
    </>
  )
}

export default BlogGrid
