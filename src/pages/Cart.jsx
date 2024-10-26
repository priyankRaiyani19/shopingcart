import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex flex-row">
  {
    cart.length > 0  ? 
    (<div className="grid  lg:justify-between 
       transition duration-300 ease-in gap-1  p-4 mt-[50px]  ml-[20px] sm:ml-[50px]
        xs:ml-[500px] rounded-xl outline">
        

    
      <div  className="text-gray-700  font-semibold  truncate  xs:w-[50px] w-40 mt-1">
        <div>
        
        {
          cart.map( (item,index) => {
            return <CartItem   key={item.id} item={item} itemIndex={index} />
          } )
        }
     </div>
      </div>
      <div className=" mt-10 border-t-4 border-neutral-900">

        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          <button>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
