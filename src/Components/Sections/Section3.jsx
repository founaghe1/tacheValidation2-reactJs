import React from "react";


export const Section3 = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <p className="text-info fw-bold">Practice Advice</p>
                    <h1 className="fw-bold">Featured Products</h1>
                    <div className="featuredDiv d-flex justify-content-center">
                        <p className="opacity-75 featured">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className="d-flex justify-content-center mt-3  px-md-5">
                        <div class="input-group inputDiv mb-3">
                            <input type="email" class="form-control py-3" placeholder="Your Email" aria-describedby="button-addon2" />

                            <button class="btn btn-outline-info" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}