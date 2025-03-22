

import Banner from "./banner"
import Brand from "@/common/brand"
import Service from "./services"
import StepsArea from "@/common/steps-area"
import VideoArea from "./video-area"
import About from "@/components/homes/home/about"
import Team from "@/common/team"
import Marquee from "@/common/marquee"
import Blog from "@/common/blog"
import PriceArea from "@/common/price-area"
import Header from "@/layout/headers/header"
import ProductSlider from "./slider"
import Product from "@/components/product/product"
import TestimonialFAQSection from "@/components/testimonialFaq/testimonialfaq"
import Testimonial from "@/common/testimonial"
import FAQ from "@/common/faq"
import FaqMain from "@/components/faq/faq"
import HomePageFaqSection from "@/components/homePageFaqSection/HomePageFaqSection"
import Welcomesection from "@/components/welcome/welcomesection"
import HomePageProduct from "@/components/HomePageProduct/HomePageProduct"

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <ProductSlider/>
< Welcomesection/>

        {/* <About /> */}

        {/* <TestimonialFAQSection/> */}
        {/* <Testimonial style={true}/> */}

        {/* <Product/> */}
        <HomePageProduct/>

{/* <HomePageFaqSection/> */}
        {/* <FAQ style_3={false}/> */}

        {/* <FaqMain/> */}

        {/* <Banner /> */}
        {/* <Service /> */}
       
        {/* <Marquee style={true} /> */}
        {/* <StepsArea /> */}
        {/* <Team /> */}
        {/* <VideoArea /> */}
        {/* <PriceArea style={true} /> */}
       {/* <Brand style_2={true} /> */}
       <TestimonialFAQSection/>
        <Blog />
        <Brand style_2={true} />
      </main>
    </>
  )
}

export default Home
