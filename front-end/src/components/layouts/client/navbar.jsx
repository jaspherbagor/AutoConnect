import React from 'react';
import '../../styles/client/navbar.css';
const ClientNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-start px-2 py-1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="../images/logo.svg" alt="" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-semibold me-3 text-black" aria-current="page" href="#"><i class="bi bi-house-door fs-5"></i> HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold me-3 text-black" href="#"><i class="bi bi-info-circle fs-5"></i> ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold me-3 text-black" href="#"><i class="bi bi-tools fs-5"></i> SERVICES</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-semibold me-3 text-black" href=""><i class="bi bi-patch-question fs-5"></i> FAQS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold me-3 text-black" href=""><i class="bi bi-telephone-outbound fs-5"></i> CONTACT</a>
                            </li>
                        </ul>
                        <a href="">
                            <button className="btn btn-danger fw-semibold login-btn">LOGIN</button>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ClientNavbar;