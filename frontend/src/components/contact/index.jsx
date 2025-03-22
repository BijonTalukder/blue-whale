import Header from '@/layout/headers/header'
import ContactArea from './contact-area'
import Breadcrumb from '@/common/breadcrumb'

const Contact = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb title="Contact Us" sm_title="Contact Us" />
                <ContactArea />
            </main>
        </>
    )
}

export default Contact
