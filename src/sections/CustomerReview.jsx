import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReview = () => {
  return (
    <section className="max-container">

      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our 
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>

      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about 
        their exceptional experience with us.
      </p>

      <div className="justify-evenly flex flex-1 mt-24 items-center max-lg:flex-col gap-14">

        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}

          {...review} />
        ))}

      </div>

    </section>
  )
}

export default CustomerReview