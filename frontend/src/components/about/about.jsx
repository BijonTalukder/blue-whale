import Breadcrumb from "@/common/breadcrumb";
import About from "@/common/about";
import Counter from "@/common/counter";
import Team from "@/common/team";
import StepsArea from "@/common/steps-area";
import Marquee from "@/common/marquee";
import Testimonial from "@/common/testimonial";
import Blog from "@/common/blog";
import Header from "@/layout/headers/header";

const AboutMain = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Breadcrumb title="About Us" sm_title="About Us" />
        <About style={true} />
        <Counter style={true} />
        <Team />
        <StepsArea style={true} />
        <Marquee />
        <Testimonial />
        <Blog style={true} />
      </main>
    </>
  )
}

export default AboutMain;