import React from "react";
const Cart = ({
	count,
	id,
}) => {
  const listItem = [
    {
      id: 0,
      count: 0,
    },
   
  ];
	if (id !== 0) {
		listItem.forEach((ob) => {
			if (ob.id == 0) {
				listItem.splice(0, 1);
			}
			if (ob.id == id) {
				ob.count = ob.count + count
			}
			if (ob.id !== id) {
			
				
				listItem.push({ id: id, count: count });
				
      }
		})
	}
  // console.log(listItem);
  return (
    <div className="cart text-center">
      {listItem.map(({ id, count }) => (
        <div className="products-count">
          {id} : {count}
        </div>
      ))}
    </div>
  );
}

export default Cart 