import Breadcrumb from "@/common/breadcrumb"
import BlogDetailsArea from "./blog-details-area"
import Header from "@/layout/headers/header"

const BlogDetails = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blog Details" sm_title="Blog Details" />
        <BlogDetailsArea />
      </main>
    </>
  )
}

export default BlogDetails
