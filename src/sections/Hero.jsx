import { arrowRight } from "../assets /icons"
import { bigShoe1 } from "../assets /images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { statistics, shoes } from "../constants"
import { useState } from "react"


const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section 
    id='Home'
    className="flex p-2 xl:flex-row bg-card flex-col justify-center min-h-screen max-container w-full gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat ">Our Summer collection</p>
        <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="text-lg leading-8 text-slate-gray font-montserrat mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p  className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center  items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-card bg-cover bg-center">
        <img 
        src={bigShoeImage}
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe} >
              <ShoeCard 
               imgURL={shoe}
               changeBigShoeImage = {(shoe) => setBigShoeImage(shoe)}
               bigShoeImage = {bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>

      

    </section>
  )
}

export default Hero