import React from "react";
const Cart = ({
	count,
	id,
})=>{
// list.mapid===id?list.push({id, count})) => {
// {listProducts.map(
//              ({ id,count }) => (
//                <div className="products-count" key={id}>Id-{id} : {count}ps</div> 

  return (
					<div className="cart text-center">
			 <div className="products-count">Id-{id} : {count}ps</div> 
					</div>			
)
}

export default Cart 