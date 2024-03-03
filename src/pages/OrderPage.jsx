import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem,increaseQuantity,drecreaseQuantity,resetCart } from "../Redux/cartSlice";
import { useState,useEffect } from "react";
import { getTotals } from "../Redux/cartSlice";

function OrderPage() {


    const [shippedCharge,setShippingCharge] = useState(0);
    const  productData = useSelector((store)=>store.productitem?.products);

    const  cartTotalAmount = useSelector((store)=>store.productitem?.cartTotalAmount);



   
    
    useEffect(() => {
        if (cartTotalAmount <= 500) {
          setShippingCharge(30);
        } else if (cartTotalAmount <= 1500) {
          setShippingCharge(25);
        } else if (cartTotalAmount > 2000 ) {
          setShippingCharge(20);
        }
        else if(cartTotalAmount = 0){
            setShippingCharge(0);
        }
      }, [cartTotalAmount]);
   

    console.log("productData",productData);
  const dispatch =useDispatch();
 
  
  useEffect(()=>{
    dispatch(getTotals())
  },[productData,dispatch])



  return (
    <>
    <Navbar/>
     
    {/* Cart Page Start */}
    <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Products</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>


                        {
                         productData &&   productData.map((item)=>(
                                <>
                                <tr key={item.id}>
                                <th scope="row">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} className="img-fluid me-5 rounded-circle" style={{"width": "80px", "height" : "80px" }}alt="" />
                                    </div>
                                </th>
                                <td>
                                    <p className="mb-0 mt-4">{item.name}</p>
                                </td>
                                <td>
                                    <p className="mb-0 mt-4">{item.price} $</p>
                                </td>
                                <td>
                                    <div className="input-group quantity mt-4" style={{"width": "100px"}}>
                                        <div className="input-group-btn">
                                            <button onClick={() => dispatch(drecreaseQuantity({ id: item.id }))} className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div className="form-control-sm text-center border-0">{item.quantity}</div>
                                        <div className="input-group-btn">
                                            <button onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                                                 className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-0 mt-4">{item.price * item.quantity} $</p>
                                </td>
                                <td>
                                    <button  onClick={() => dispatch(deleteItem(item.id))} className="btn btn-md rounded-circle bg-light border mt-4" >
                                        <i className="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            
                            </tr>
                                </>
                            ))
                        }
                            
                          
                        </tbody>
                    </table>
                </div>
               
                <div className="row g-4 justify-content-end">
                    <div className="col-8"></div>
                    <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                        <div className="bg-light rounded">
                            <div className="p-4">
                                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                <div className="d-flex justify-content-between mb-4">
                                    <h5 className="mb-0 me-4">Subtotal:</h5>
                                    <p className="mb-0">{cartTotalAmount}  $</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h5 className="mb-0 me-4">Shipping</h5>
                                    <div className="">
                                        <p className="mb-0">{shippedCharge}  $</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                <h5 className="mb-0 ps-4 me-4">Total</h5>
                                <p className="mb-0 pe-4">{shippedCharge + cartTotalAmount }  $</p>
                            </div>
                            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Cart Page End */}
     
    </>
  );
}
export default OrderPage;
