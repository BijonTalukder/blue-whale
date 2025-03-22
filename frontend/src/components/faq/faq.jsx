import Breadcrumb from "@/common/breadcrumb"
import FAQ from "@/common/faq";
import Header from "@/layout/headers/header";

const FaqMain = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb title="Our Faqs" sm_title="FAQS" />
                <FAQ inner_faq={true} />
            </main>
        </>
    )
}

export default FaqMain;
