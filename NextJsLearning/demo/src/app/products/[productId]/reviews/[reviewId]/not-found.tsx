"use client";

import { usePathname } from "next/navigation"

const NotFound = () => {

  const pathname=usePathname()
console.log(pathname);

  const productId=pathname.split("/")[2]
  const reviewId=pathname.split("/")[4]
  
  return (
    <div>
      review id {reviewId} not found
    </div>
  )
}

export default  NotFound