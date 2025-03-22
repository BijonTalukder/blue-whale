import Breadcrumb from '@/common/breadcrumb'
import ServicesDetailsContent from './services-details-area'
import Header from '@/layout/headers/header'

const ServicesDetails = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb spyware="Spyware Protection" sm_title="Services" />
                <ServicesDetailsContent />
            </main>
        </>
    )
}

export default ServicesDetails
