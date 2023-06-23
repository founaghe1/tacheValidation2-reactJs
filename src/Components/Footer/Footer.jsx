import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'


export const Footer = () =>{
    return (
       <div className="container-fluid footer  mt-5 py-5 ">
            <div className="row px-lg-5 Rfooter ">
                <div className="col-lg-3 col-md-6 col-sm-12 text-light ps-md-5 my-3">
                    <h2 className="fw-bold">Get In Touch</h2>
                    <p>The quick fox jumps over the lazy dog</p>
                    <div>
                        <BsFacebook className="fs-3 bs text-info" />
                        <BsInstagram className="fs-3 bs mx-3 text-info" />
                        <BsTwitter className="fs-3 bs text-info" />
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 text-light ps-md-5 my-3">
                    <h2 className="fw-bold">Company info</h2>
                    <div>
                        <p><a href="#" className="text-decoration-none text-light">About Us</a></p>
                        <p><a href="#" className="text-decoration-none text-light">Careers</a></p>
                        <p><a href="#" className="text-decoration-none text-light">We are hiring</a></p>
                        <p><a href="#" className="text-decoration-none text-light">Blog</a></p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 text-light ps-md-5 my-3">
                    <h2 className="fw-bold">Features</h2>
                    <div>
                        <p>Business Marketing</p>
                        <p>User Anlytic</p>
                        <p>Live Chat</p>
                        <p>Unlimited Suport</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 text-light ps-md-5 my-3">
                    <h2 className="fw-bold">Resources</h2>
                    <div>
                        <p><a href="#" className="text-decoration-none text-light">IOS & Android</a></p>
                        <p><a href="#" className="text-decoration-none text-light">Watch a Demo</a></p>
                        <p><a href="#" className="text-decoration-none text-light">Customers</a></p>
                        <p><a href="#" className="text-decoration-none text-light">API</a></p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-light fw-bold">Made With Love By Founaghe All Right Reserved</p>
            </div>
        </div>
    )
}