import React from "react";
import prof1 from '../../assets/img/prof1.png'
import prof2 from '../../assets/img/prof2.png'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline  } from 'react-icons/io'


export const Testmonial = () =>{
    return (
        <div className="container-fluid pt-5 px-5">
            <div className="row px-md-5">
                <div className="col">
                    <p className="text-info fw-bold">Practice Advice</p>
                    <h1 className="fw-bold">Our Experts Teacher</h1>
                    <p className="opacity-50 fs-5 pTestmo">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
            <div className="row px-md-5 text-center my-5">
                <div className="col-md-6 col-sm-12">
                    <img src={prof1} alt="" className="rounded-circle"/>
                    <p className="opacity-50 mt-4">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <p>
                        <IoMdStar className="text-warning fs-4" />
                        <IoMdStar className="text-warning fs-4" />
                        <IoMdStar className="text-warning fs-4" />
                        <IoMdStarHalf className="text-warning fs-4" />
                        <IoMdStarOutline className="text-warning fs-4" />
                    </p>
                    <div className="lh">
                        <p className="fw-bold ">Regina Miles</p>
                        <p className="fw-bold opacity-50">Designer</p>
                    </div>
                    
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={prof2} alt="" className="rounded-circle" />
                    <p className="opacity-50 mt-4">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <p>
                        <IoMdStar className="text-warning fs-4" />
                        <IoMdStar className="text-warning fs-4" />
                        <IoMdStar className="text-warning fs-4" />
                        <IoMdStar className="text-warning fs-4" />
                        <IoMdStarOutline className="text-warning fs-4" />
                    </p>
                    <div className="lh">
                        <p className="fw-bold">Rose Miles</p>
                        <p className="fw-bold opacity-50">Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}