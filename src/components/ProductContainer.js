import React from 'react'
import ProductList from './ProductList'
import Products from './Products'

const ProductContainer = (props) => {
  return (
    <div className='row' style = {{boxShadow :"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
        <div className='col-sm-5'>
            <Products/>
        </div>
        <div className='col-sm-7'>
          <div className='row'>
            <ProductList/>
            </div>
        </div>
    </div>
  )
}

export default ProductContainer