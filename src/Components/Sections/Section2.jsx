import React from "react";
import img1  from '../../assets/img/1.png'
import img2  from '../../assets/img/2.png'
import img3  from '../../assets/img/3.png'
import img4  from '../../assets/img/4.png'
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillEye, AiOutlineDownload } from 'react-icons/ai'
import { GrStar } from 'react-icons/gr'
import { GiAlarmClock } from 'react-icons/gi'
import { MdWaves } from 'react-icons/md'
import { Button } from "../Button/Button";
import { IoIosArrowForward } from 'react-icons/io'


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
                        <div className="position-absolute bottom-0  w-100">
                            <div className="d-flex justify-content-around ">
                                <p className="heart bg-light p-2 rounded-circle"><AiOutlineHeart className="fs-2 heart2" /></p>
                                <p className="shop bg-light p-2 rounded-circle"><AiOutlineShoppingCart className="fs-2 shop2" /></p>
                                <p className="eye bg-light p-2 rounded-circle"><AiFillEye className="fs-2 eye2"/></p>
                            </div>
                        </div>
                    </div>
                        <div className="px-4 mb-3 text-start">
                            <p className="d-flex justify-content-between ">
                                <span className="text-info fs-5 fw-bold">English</span>
                                <span className="bg-dark text-light   px-2 rounded-pill"><GrStar className="fs-5 text-warning startRite"/> <span className="strRite"> 4.9</span></span>
                            </p>
                            <p className="fw-bold">Graphic Design</p>
                            <p className="fs-6 opacity-50">We focus on ergonomics and meeting you....</p>
                            <p className="opacity-50">
                                <AiOutlineDownload className="fs-4 me-3"/>
                                <span className="fw-bold">15 Sales</span> 
                            </p>
                            <p>
                                <span className="fw-bold opacity-50 me-3">$16.48</span>
                                <span className="fw-bold text-success">$6.48</span>
                            </p>
                            <p>
                                <span><GiAlarmClock className="text-info"/> Pro...</span>
                                <span className="mx-2"><MdWaves className="text-danger"/> 64 Les...</span>
                                <span><GiAlarmClock className="text-info"/> 22hr..</span>
                            </p>
                            <Button className='btn rounded-pill  btn3 btn-outline-info  pb-2 fs-5 ' Name='Learn More'  span={<IoIosArrowForward />} />
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
                        <div className="position-absolute bottom-0  w-100">
                            <div className="d-flex justify-content-around ">
                                <p className="heart bg-light p-2 rounded-circle"><AiOutlineHeart className="fs-2 heart2" /></p>
                                <p className="shop bg-light p-2 rounded-circle"><AiOutlineShoppingCart className="fs-2 shop2" /></p>
                                <p className="eye bg-light p-2 rounded-circle"><AiFillEye className="fs-2 eye2"/></p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mb-3 text-start">
                            <p className="d-flex justify-content-between ">
                                <span className="text-info fs-5 fw-bold">English</span>
                                <span className="bg-dark text-light   px-2 rounded-pill"><GrStar className="fs-5 text-warning startRite"/> <span className="strRite"> 4.6</span></span>
                            </p>
                            <p className="fw-bold">Computer Science Ingen...</p>
                            <p className="fs-6 opacity-50">We focus on ergonomics and meeting you....</p>
                            <p className="opacity-50">
                                <AiOutlineDownload className="fs-4 me-3"/>
                                <span className="fw-bold">15 Sales</span> 
                            </p>
                            <p>
                                <span className="fw-bold opacity-50 me-3">$16.48</span>
                                <span className="fw-bold text-success">$6.48</span>
                            </p>
                            <p>
                                <span><GiAlarmClock className="text-info"/> Pro...</span>
                                <span className="mx-2"><MdWaves className="text-danger"/> 64 Les...</span>
                                <span><GiAlarmClock className="text-info"/> 22hr..</span>
                            </p>
                            <Button className='btn rounded-pill  btn3 btn-outline-info  pb-2 fs-5 ' Name='Learn More'  span={<IoIosArrowForward />} />
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
                        <div className="position-absolute bottom-0  w-100">
                            <div className="d-flex justify-content-around ">
                                <p className="heart bg-light p-2 rounded-circle"><AiOutlineHeart className="fs-2 heart2" /></p>
                                <p className="shop bg-light p-2 rounded-circle"><AiOutlineShoppingCart className="fs-2 shop2" /></p>
                                <p className="eye bg-light p-2 rounded-circle"><AiFillEye className="fs-2 eye2"/></p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mb-3 text-start">
                            <p className="d-flex justify-content-between ">
                                <span className="text-info fs-5 fw-bold">English</span>
                                <span className="bg-dark text-light   px-2 rounded-pill"><GrStar className="fs-5 text-warning startRite"/> <span className="strRite"> 4.7</span></span>
                            </p>
                            <p className="fw-bold">Web Developer</p>
                            <p className="fs-6 opacity-50">We focus on ergonomics and meeting you....</p>
                            <p className="opacity-50">
                                <AiOutlineDownload className="fs-4 me-3"/>
                                <span className="fw-bold">15 Sales</span> 
                            </p>
                            <p>
                                <span className="fw-bold opacity-50 me-3">$16.48</span>
                                <span className="fw-bold text-success">$6.48</span>
                            </p>
                            <p>
                                <span><GiAlarmClock className="text-info"/> Pro...</span>
                                <span className="mx-2"><MdWaves className="text-danger"/> 64 Les...</span>
                                <span><GiAlarmClock className="text-info"/> 22hr..</span>
                            </p>
                            <Button className='btn rounded-pill  btn3 btn-outline-info  pb-2 fs-5 ' Name='Learn More'  span={<IoIosArrowForward />} />
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
                        <div className="position-absolute bottom-0  w-100">
                            <div className="d-flex justify-content-around ">
                                <p className="heart bg-light p-2 rounded-circle"><AiOutlineHeart className="fs-2 heart2" /></p>
                                <p className="shop bg-light p-2 rounded-circle"><AiOutlineShoppingCart className="fs-2 shop2" /></p>
                                <p className="eye bg-light p-2 rounded-circle"><AiFillEye className="fs-2 eye2"/></p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mb-3 text-start">
                            <p className="d-flex justify-content-between ">
                                <span className="text-info fs-5 fw-bold">English</span>
                                <span className="bg-dark text-light   px-2 rounded-pill"><GrStar className="fs-5 text-warning"/> <span className="strRite"> 4.4</span></span>
                            </p>
                            <p className="fw-bold">Web Design</p>
                            <p className="fs-6 opacity-50">We focus on ergonomics and meeting you....</p>
                            <p className="opacity-50">
                                <AiOutlineDownload className="fs-4 me-3"/>
                                <span className="fw-bold">15 Sales</span> 
                            </p>
                            <p>
                                <span className="fw-bold opacity-50 me-3">$16.48</span>
                                <span className="fw-bold text-success">$6.48</span>
                            </p>
                            <p>
                                <span><GiAlarmClock className="text-info"/> Pro...</span>
                                <span className="mx-2"><MdWaves className="text-danger"/> 64 Les...</span>
                                <span><GiAlarmClock className="text-info"/> 22hr..</span>
                            </p>
                            <Button className='btn rounded-pill  btn3 btn-outline-info  pb-2 fs-5 ' Name='Learn More'  span={<IoIosArrowForward />} />
                        </div>
                </div>
            </div>
        </div>
    )
}