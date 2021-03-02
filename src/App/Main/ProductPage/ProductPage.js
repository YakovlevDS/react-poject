import React from 'react'
import { getProductsObject } from '../Products/products'
  import products from '../Products/products'
const ProductPage = ({ match,
productsObject=getProductsObject(products),}) => {
  console.log(match)
  const id = match.params.id
   
  return (
    <>
      <h1 className="page-title">{productsObject[id].name}</h1>
      <p dangerouslySetInnerHTML={{ __html:productsObject[id].fullDescription}}></p>
      </>
  )
  
 }
export default ProductPage
