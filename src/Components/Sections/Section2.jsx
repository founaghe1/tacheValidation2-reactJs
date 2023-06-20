import React from "react";
import img1  from '../../assets/img/1.png'
import img2  from '../../assets/img/2.png'
import img3  from '../../assets/img/3.png'
import img4  from '../../assets/img/4.png'


export const Section2 = () =>{
    return(
        <div className="container-fluid mt-5 pt-5 px-md-5">
            <div className="row text-center px-md-5">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="position-relative">
                        <p>
                            <img src={img1} alt="" className="w-100" />
                        </p>
                        <p className="bg-danger text-light position-absolute sale1 px-3 rounded">
                            Sale
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="position-relative">
                        <p>
                            <img src={img2} alt="" className="w-100"/>
                        </p>
                        <p className="bg-danger text-light position-absolute sale1 px-3 rounded">
                            Sale
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="position-relative">
                        <p>
                            <img src={img3} alt="" className="w-100" />
                        </p>
                        <p className="bg-danger text-light position-absolute sale1 px-3 rounded">
                            Sale
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="position-relative">
                        <p>
                            <img src={img4} alt="" className="w-100" />
                        </p>
                        <p className="bg-danger text-light position-absolute sale1 px-3 rounded">
                            Sale
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}