import Breadcrumb from "@/common/breadcrumb"
import BlogPost from "./blog-area"
import Header from "@/layout/headers/header"

const Blog = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb title="Blog List" sm_title="Blog List" />
                <BlogPost />
            </main>
        </>
    )
}

export default Blog
