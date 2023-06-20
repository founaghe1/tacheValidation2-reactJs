import React from "react";
import enfant from '../../assets/img/enfant.png'
import barr from '../../assets/img/barr.png'
import bas from '../../assets/img/bas.png'
import { IoIosArrowForward } from 'react-icons/io'


export const Section1 = () =>{
    return(
        <div className="container-fluid pt-5">
            <div className="row mt-5 mb-3">
                <div className="col-md-6 col-sm-12 px-5 mt-md-5 ">
                    <h1 className="packageH1 mx-4 mt-md-5">Packages that are aprodable</h1>
                    <p className="mx-4 mt-3">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    <p className="mx-4"><a href="#" className="text-info">Learn More <IoIosArrowForward /> </a></p>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <div className="text-center position-relative">
                        <p className="enfant">
                            <img src={enfant} alt=""  />
                        </p>
                        <p className="gaucheImg position-absolute top-0 ">
                            <img src={barr} alt="" />
                        </p>
                        <p className="bas position-absolute ">
                            <img src={bas} alt="" />
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 pt-5 px-5">
                <div className="col mt-5 px-md-5">
                    <p className="fs-5 text-info">Practice Advice</p>
                    <p className="fs-1 fw-bold">Make online education accessible</p>
                    <p className="fs-5  txt">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
        </div>
    )
}