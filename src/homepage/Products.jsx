import { Link } from "react-router-dom";

import productJson from '../utils/productJson';

const product = productJson;


function Products(){
    
    if(product === null) return <h1>Loading</h1>

    return(
        <>

        <div className="container-fluid fruite py-5 my-5">
            <div className="container py-5">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Our Products</h1>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                               
                            </ul>
                        </div>
                    </div>
                 <div className="tab-content py-5">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                    {
                                        product.map((item)=>

                                        <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={item.image} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "5px", left: "5px",textTransform:"capitalize"}}>{item.arrivalType}</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4 style={{textTransform:"capitalize"}}>{item.name}</h4>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">${item.price}</p>
                                                        <Link to={"/productdetail/"+item.id}  className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                      
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>      
            </div>
        </div>
       
        </>
    )
}
export default Products;

