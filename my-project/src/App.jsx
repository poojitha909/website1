import React from 'react'
import Navbar from './components/Navbar'
import NavbarBanner from './components/NavbarBanner'
import Hero from './components/Hero/Hero'
import NumbersCount from './NumbersCount/NumbersCount'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Img1 from './assets/banner1.png'
import Img2 from './assets/banner-2.png'
import Banner from './components/Banner/Banner'


const BannerData = {
  image:Img1,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Personalized Professional online Tutor on Your Schedule",
  subtitle:"Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
}
const BannerData2 = {
  image:Img2,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Talented and Qualified Tutors to Serve You for Help",
  subtitle:"Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
}

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumbersCount />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <h1>hello</h1>
    </main>
  )
}

export default App;