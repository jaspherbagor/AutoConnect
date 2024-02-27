import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientNavbar from '../../layouts/client/navbar';
import '../../styles/client/login.css'

const Login = () => {
  const togglePassword = function() {
    const password = document.getElementById('password');
    const toggleVisibility = document.getElementById('togglePassword');

    if(password.type === "password") {
      password.type = "text";
      toggleVisibility.className = "bi bi-eye-slash fs-4 position-absolute"
    } else {
      password.type = "password";
      toggleVisibility.className = "bi bi-eye fs-4 position-absolute"
    }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showToast = (label, message, border, color, background) => {
    const toastLive = document.getElementById('liveToast');
    const toastLabel = document.getElementById('toastLabel');
    const toastMessage = document.getElementById('toastMessage');
    const toastHeader = document.getElementById('toastHeader');
    const toast = new window.bootstrap.Toast(toastLive);

    toastLabel.innerText = label;
    toastMessage.innerText = message;
    toastLive.style.border = `2.5px solid ${border}`;
    toastMessage.style.color = color;
    toastHeader.style.background = background;
    toast.show()
  }

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    const port = 4000;
    const url = `http://localhost/${port}/login`;

    if(!email && !password) {
      showToast("OPS!!", "No data inputted!", "red", "red", "red")
    }
  
    else if(!email || !password) {
      showToast("OPS!!", "Please fill up all the required information!", "red", "red", "red")
    } 
    
    else {
      try {
        await fetch(url, {
          method: 'post',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }).then(function(result) {
          return result.json()
        }).then(function(result) {
          console.log('result:', result)

          if(result.success) {
            localStorage.setItem('token', result.token);
            showToast("SUCCESS", "Login Success!", "green", "green", "green");
            setEmail('');
            setPassword('');
            setTimeout(function() {
              window.location.href = "/"
            }, 2500);

          } else {
            showToast("OPS!!", "Invalid credentials!", "red", "red", "red")
          }

        })

      } catch(error) {
        console.log("An error occured!");
        showToast("OPS!!", "An error ocurred!", "red", "red", "red")
      }
    }
  
  }

  

  return (
    <div>
      <ClientNavbar />

      <section className="login-section container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center">
        <div className="login-container container py-4 mt-5 px-3">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" className="mb-3" />
          </Link>
          <h2 className="fw-bolder text-center mb-4 text-white">LOGIN ACCOUNT</h2>

          <form className="text-start mb-0 py-0 text-white" onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="d-flex">
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <span className="togglerIcon text-black">
                  <i className="bi bi-eye fs-4 mt-1 position-absolute" id="togglePassword" onClick={togglePassword}></i>
                </span>
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary fw-semibold px-3 py-2 login-btn">
                LOGIN
              </button>
            </div>
            <div className="text-center mt-4 mb-0">
              <p>Don't have an account yet? <Link to="/register" className="text-decoration-none register-link fw-semibold text-danger">Register</Link> instead. </p>
            </div>
          </form>

        </div>
        <div className="toast-container position-fixed top-0 p-2">
          <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header" id="toastHeader">
              <strong className="me-auto text-white" id="toastLabel"></strong>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body fw-medium text-start" id="toastMessage">
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login