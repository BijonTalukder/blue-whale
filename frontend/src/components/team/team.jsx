import Breadcrumb from '@/common/breadcrumb'
import Team from '@/common/team'
import Header from '@/layout/headers/header';

const TeamMain = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb title="Our Team" sm_title="Our Team" />
                <Team inner_team={true} />
            </main>
        </>
    )
}

export default TeamMain;
