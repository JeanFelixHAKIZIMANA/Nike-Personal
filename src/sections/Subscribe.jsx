import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us"
    className="justify-between flex flex-col max-lg:flex-col gap-10 max-container items-center ">

      <h3 className="text-4xl font-palanquin font-bold leading-[68px] max-lg:max-w-md">Sign up for 
        <span className="text-coral-red"> Updates</span> & NewsLetter
      </h3>

      <div 
       className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full "
      >
       <input tepe="text" placeholder="Subscribe" className="input" />
       <div 
       className="flex max-sm:justify-end items-center max-sm:w-full"
       >
        <Button label="Sign Up" fullWidth />
       </div>
      </div>

    </section>
  )
}

export default Subscribe