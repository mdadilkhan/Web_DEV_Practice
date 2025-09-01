import React from 'react'
import { notFound } from 'next/navigation';


const page = async({params,}:{params:Promise<{reviewId:string;productId:string}>}) => {



    const {reviewId,productId}=(await params)
    console.log(reviewId);
    

    if(parseInt(reviewId)>1000){
      notFound()
    }
  return (
    <div>
        review {reviewId} and product {productId}
    </div>
  )
}

export default page
