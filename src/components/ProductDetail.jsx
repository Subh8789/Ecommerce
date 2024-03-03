import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import {toast} from 'react-toastify';

import { useParams } from "react-router-dom";
import productJson from "../utils/productJson";


const product = productJson;


function ProductDetail() {
 // let buttonvalue = "";
 let cartPath = "";
  const { id } = useParams();
  const product = productJson;


  const productdetail = product.filter((item) => item.id == id);

 

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">ProductDetail</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">ProductDetail</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* Single Product Start */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <Link to="#">
                      <img
                        width="469"
                        height="450"
                        src={productdetail[0].image}
                        className="img-fluid rounded"
                        alt="productImage"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">{productdetail[0].name}</h4>
                  <h5 className="fw-bold mb-3">$ {productdetail[0].price}</h5>
                  <div className="d-flex mb-4">
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <p className="mb-4">{productdetail[0].description}</p>

              <Link to={cartPath}>    <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: id,
                          name: productdetail[0].name,
                          quantity: productdetail[0].quantity,
                          image: productdetail[0].image,
                          desc: productdetail[0].description,
                          price: productdetail[0].price,
                        }),toast.success("Product Has been Added to the cart..")
                      ) 
                    }
                    className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i>Add To Cart
                    
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single Product End */}
    </>
  );
}
export default ProductDetail;
