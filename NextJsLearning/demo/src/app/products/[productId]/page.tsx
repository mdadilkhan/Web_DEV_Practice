const ProductDetails=async({params,}:{
    params:Promise<{productId:string}>
})=>{

   console.log(params);
   const productId=(await params).productId
   console.log(productId);
   

    return <div>Prodcut id {productId}</div>
}


export default ProductDetails