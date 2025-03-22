import Breadcrumb from '@/common/breadcrumb'
import PriceArea from '@/common/price-area'
import Header from '@/layout/headers/header'

const Pricing = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb title="Pricing Plan" sm_title="Our Pricing" />
                <PriceArea inner_pricing={true} />
            </main>
        </>
    )
}

export default Pricing
