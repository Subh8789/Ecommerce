import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const products = useSelector((store)=>store.productitem?.products);

 
  return (

    <>
      {/* Navbar start */}
      <div className="container-fluid ">
        <div className="container">
          <nav className="navbar navbar-light bg-white">
              <div className=" position-relative navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <Link
                  to="/orderpage"
                  className="position-relative me-4 my-auto"
                >
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{
                      top: "-5px",
                      left: "15px",
                      height: "20px",
                      minWidth: "20px",
                    }}
                  >
                   {products.length}
                  </span>
                </Link>
              </div>
            
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
}
export default Navbar;
