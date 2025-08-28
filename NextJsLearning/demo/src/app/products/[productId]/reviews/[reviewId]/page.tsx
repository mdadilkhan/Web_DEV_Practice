import React from 'react'

const page = async({params,}:{params:Promise<{reviewId:string;productId:string}>}) => {



    const {reviewId,productId}=(await params)
    console.log(reviewId);
    
  return (
    <div>
        review {reviewId} and product {productId}
    </div>
  )
}

export default page
