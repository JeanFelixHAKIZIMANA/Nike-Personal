import { copyrightSign } from "../assets /icons"
import { footerLogo } from "../assets /images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex  justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        
        <div className="flex flex-col items-start">

          <a href='/'>
            <img 
            src={footerLogo}
            width={150}
            height={46}
            />
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store.
            Find your perfect size in store. Get rewards.
          </p>

          <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon) => (
                <div className="flex justify-center items-center bg-white h-12 w-12 rounded-full ">
                    <img 
                    src={icon.src}
                    alt={icon.alt}
                    height={24}
                    width={24}
                    />
                </div>
              ))}
          </div>

        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">

          {footerLinks.map((section) => (

            <div key={section}>

              <h4 className="text-2xl font-medium leading-normal mb-6 text-white font-montserrat ">{section.title}</h4>

              <ul>

                {section.links.map((link) => (
                  <li className="mt-1 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  key={link.name}
                  > 
                    {link.name}
                  </li>
                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

      <div className="flex mt-24 justify-between text-white-400 font-montserrat max-sm:flex-col max-sm:items-center">
        <div
        className="flex flex-1 justify-start items-center  hover:text-slate-gray gap-2 cursor-pointer"
        >
          <img 
          src={copyrightSign}
          alt="copyright"
          height={20}
          width={20}
          className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className="cursor-pointer hover:text-slate-gray">Terms & Conditions.</p>

      </div>

    </footer>
  )
}

export default Footer