const ShoeCard = ( {imgURL, changeBigShoeImage, bigShoeImage} ) => {
  
  const handleClick = () => {
      if (bigShoeImage !== imgURL.bigShoe)
        {
          changeBigShoeImage(imgURL.bigShoe)
        }
  }

  return (
  
    <div className={` border-2 bg-[#ab9ea9] rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent' } cursor-pointer max-sm:flex-1  `} 
    onClick={handleClick}
    >
      <div className="flex justify-center items-center  sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img 
        src={imgURL.thumbnail}
        alt="shoe collection"
        height = {103}
        width = {127}
        className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard