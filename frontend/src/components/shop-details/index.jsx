import Breadcrumb from '@/common/breadcrumb'
import ShopDetailsArea from './shop-details-area'
import Header from '@/layout/headers/header'

const ShopDetails = ({slug}) => {
    console.log(slug)
    return (
        <>
            <Header style={true} />
            <main>
                <Breadcrumb title="Product Single" sm_title="Product Single" />
                <ShopDetailsArea slug={slug} />
            </main>
        </>
    )
}

export default ShopDetails
