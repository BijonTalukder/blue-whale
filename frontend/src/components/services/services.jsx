import Breadcrumb from '@/common/breadcrumb';
import Services from '@/common/services';
import Header from '@/layout/headers/header';

const ServicesMain = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb title="Our Services" sm_title="Our Services" />
                <Services inner_style={true} />
            </main>
        </>
    )
}

export default ServicesMain
