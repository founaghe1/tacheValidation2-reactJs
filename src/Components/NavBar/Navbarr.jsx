import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BsArrowRight } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';


export const Navbarr = () =>{


    return(
        <div >
            <nav class="navbar navbar-expand-lg px-md-5 fixed-top ">
                <div class="container-fluid mx-md-5">
                    <a class="navbar-brand fs-3 text-light" href="#">BrandName</a>
                    <button class="navbar-toggler text-light" type="" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item ms-md-5">
                            <a class="nav-link active fs-5 text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item mx-md-4">
                            <a class="nav-link fs-5 text-light" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link fs-5 text-light" href="#">Pricing</a>
                            </li>
                            <li class="nav-item mx-md-4">
                            <a class="nav-link fs-5 text-light" href="#">Contact</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-info me-3 fw-bold px-3 py-2 text-light" type="submit">Login</button>

                            <button class="btn btn-info fw-bold px-3 text-light" type="submit">JOIN US <span> <BsArrowRight  /> </span> </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}