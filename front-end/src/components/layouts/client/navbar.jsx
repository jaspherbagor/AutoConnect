import React from 'react';
import '../../styles/client/navbar.css';
const ClientNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-start px-2">
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
                                <a className="nav-link active fw-semibold fs-5" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-5" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-5" href="#">Services</a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-5" href="">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-5" href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ClientNavbar;