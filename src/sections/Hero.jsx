import { arrowRight } from "../assets /icons"
import Button from "../components/Button"
import { statistics } from "../constants"


const Hero = () => {
  return (
    <section 
    id='home'
    className="flex p-2 xl:flex-row flex-col justify-center min-h-screen max-container w-full gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat ">Our Summer collection</p>
        <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[72px]">
          <span>The New Arrival</span>
          <br/>
          <span>Nike</span>
          Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero