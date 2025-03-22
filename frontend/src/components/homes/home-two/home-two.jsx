import Banner from './banner'
import Brand from '@/common/brand'
import About from '@/components/homes/home/about'
import Marquee from '@/common/marquee'
import Testimonial from '@/common/testimonial'
import Blog from '@/common/blog'
import Services from '@/common/services'
import HelpArea from '@/common/help-area'
import Team from '@/common/team'
import Header from '@/layout/headers/header'
import FAQ from '@/common/faq'

const HomeTwo = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Banner />
        <Brand style_3={true} />
        <Services style={true} />
        <About />
        <Team />
        <HelpArea style_3={true} />
        <Marquee />
        <Testimonial />
        <Blog style_2={true} />
        <FAQ style_3={true} />
      </main>
    </>
  )
}

export default HomeTwo
