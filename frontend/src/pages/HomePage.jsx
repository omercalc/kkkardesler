import Hero from "../components/Hero/Hero"
import HomeCategory from "../components/HomeCategory/HomeCategory"
import Services from "../components/Services/Services"
import WhyUs from "../components/WhyUs/WhyUs"


const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Services />
      <HomeCategory />
    </div>
  )
}

export default HomePage
