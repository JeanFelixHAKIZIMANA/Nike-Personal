import { star } from "../assets /icons"

const ReviewCard = ( {imgURL, customerName, rating, feedback} ) => {
  return (
    <div className="flex justify-center items-center flex-col">

        <img
         src={imgURL}
         alt="customer"
         className="rounded-full h-[120px] w-[120px]"
        />

        <p className="info-text text-center mt-6 sm:max-w-sm">
            {feedback}
        </p>

        <div className="flex mt-3 justify-center items-center gap-2.5">
            <img 
            src={star}
            alt="star"
            height={24}
            width={24}
            className="onject-contain m-0"
            />
            <p className="text-lg font-montserrat text-slate-gray">({rating})</p>
        </div>

        <h3 className="font-palanquin font-bold text-3xl text-center mt-1">{customerName}</h3>

    </div>
  )
}

export default ReviewCard