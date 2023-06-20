import React from "react";
import { Button } from "../Button/Button";
import { BsEmojiSmile, BsCheck2All, BsFillFolderSymlinkFill } from 'react-icons/bs'

export const Header = () => {
    return(
        <div className="container-fluid header pb-5">
            <div className="row headerRow ">
                <div class="col headerCol1 text-light text-center">
                    <p className="fs-2">Welcome</p>
                    <h1 className="">Selling on the internet like a pro</h1>
                    <p className="fs-2">We know how lorge objects will act, but things on a small scall just do not act that way.</p>
                    <div>
                        <Button className='btn  btn1 px-md-5 py-3 fs-5 me-2 px-sm-3 ' Name='Get Quote Now' />
                        <Button className='btn  btn2 px-md-5 py-3 fs-5' Name='Learn More' />
                    </div>
                </div>
            </div>

            <div className="row cardRow mt-5 pt-4 mx-md-5">
                <div className="col-md-4 col-sm-12 ">
                    <div className="m-1 card1 bg-light p-5">
                        <p className="emoj d-flex align-items-center justify-content-center text-danger"><BsEmojiSmile className="fs-3 "/></p>
                        
                        <p className="fw-bold fs-5 traine">Training Courses</p>
                        <p className="mt-5">The gradual accumulation of 
                        information about atomic and 
                        small-scale behaviour...
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <div className="m-1 bg-light p-5">
                        <p className="check d-flex align-items-center justify-content-center text-success"><BsCheck2All className="fs-3 "/></p>
                        
                        <p className="fw-bold fs-5 traine">2,769 online courses</p>
                        <p className="mt-5">The gradual accumulation of 
                        information about atomic and 
                        small-scale behaviour...
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="m-1 card3 p-5 text-light">
                        <p className="folder d-flex align-items-center justify-content-center "><BsFillFolderSymlinkFill className="fs-3 "/></p>
                        
                        <p className="fw-bold fs-5 trainer position-relative">Training Courses</p>
                        <p className="mt-5">The gradual accumulation of 
                        information about atomic and 
                        small-scale behaviour...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}