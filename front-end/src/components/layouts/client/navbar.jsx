import React from 'react';
import '../../styles/client/navbar.css';
import { Link } from 'react-router-dom';
const ClientNavbar = () => {
    const userToken = localStorage.getItem('token');
    console.log(userToken)
    const logout = localStorage.clear()
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-start px-2 py-1 position-fixed container-fluid">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="../images/logo.svg" alt="" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fw-semibold me-3 text-black" aria-current="page" to="/"><i className="bi bi-house-door fs-5"></i> HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold me-3 text-black" to="/about"><i className="bi bi-info-circle fs-5"></i> ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold me-3 text-black" to="/services"><i className="bi bi-tools fs-5"></i> SERVICES</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-semibold me-3 text-black" to="/faqs"><i className="bi bi-patch-question fs-5"></i> FAQS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold me-3 text-black" to="/contact"><i className="bi bi-telephone-outbound fs-5"></i> CONTACT</Link>
                            </li>
                        </ul>
                        <Link to="/login">
                            <button className="btn btn-danger fw-semibold login-btn">LOGIN</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ClientNavbar;