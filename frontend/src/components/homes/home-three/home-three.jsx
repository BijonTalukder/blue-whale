import Service from "@/common/services"
import About from "@/common/about"
import Banner from "./banner"
import Feature from "./features"
import Marquee from "@/common/marquee"
import HelpArea from "@/common/help-area"
import PriceArea from "@/common/price-area"
import Testimonial from "@/common/testimonial"
import FAQ from "@/common/faq"
import Blog from "@/common/blog"
import Header from "@/layout/headers/header"

const HomeThree = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Banner />
        <Feature />
        <About />
        <Service />
        <Marquee />
        <HelpArea />
        <PriceArea />
        <Testimonial style={true} />
        <FAQ />
        <Blog />
      </main>
    </>
  )
}

export default HomeThree
