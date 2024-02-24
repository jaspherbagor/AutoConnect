import React from 'react';
import { useState } from 'react';
import ClientNavbar from './../../layouts/client/navbar';
import { Link } from 'react-router-dom';
import '../../styles/client/register.css'
const Register = () => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const showPassword = () => {
    const passKey = document.getElementById('passKey');
    const togglePassKey = document.getElementById('togglePassKey');

    if (passKey.type === "password") {
      passKey.type = "text";
      togglePassKey.className = "bi bi-eye-slash fs-4 position-absolute";
    } else {
      passKey.type = "password";
      togglePassKey.className = "bi bi-eye fs-4 position-absolute";
    }
  }

  const showConfirmPassword = () => {
    const confirmPassword = document.getElementById('confirmPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

    if (confirmPassword.type === "password") {
      confirmPassword.type = "text";
      toggleConfirmPassword.className = "bi bi-eye-slash mt-1 fs-4 position-absolute"
    } else {
      confirmPassword.type = "password";
      toggleConfirmPassword.className = "bi bi-eye fs-4 mt-1 position-absolute"
    }
  }

  const showToast = (label, message, color, border, background) => {
    const toastLive = document.getElementById('liveToast');
    const toastLabel = document.getElementById('toastLabel');
    const toastMessage = document.getElementById('toastMessage');
    const toastHeader = document.getElementById('toastHeader');
    const toast = new window.bootstrap.Toast(toastLive);

    toastLabel.innerText = label;
    toastLabel.style.color = "#FFFFFF";
    toastMessage.innerText = message;
    toastMessage.style.color = color;
    toastLive.style.border = `2px solid ${border}`;
    toastHeader.style.background = background;
    toast.show();
  };
   
  const handleSubmit = async (e) => {
    e.preventDefault();

  // const name = document.getElementById('name').value;
  // const username = document.getElementById('username').value;
  // const email = document.getElementById('email').value;
  // const password = document.getElementById('passKey').value;
  // const confirmPassword = document.getElementById('confirmPassword').value;

  // console.log('Form values:', name, username, email, password, confirmPassword);
  if (!name && !username && !email && !password && !confirmPassword) {
    showToast("OPS!!", "No data iputted!", "#fe0039", "#fe0039", "#fe0039");
    return;
  }

  if (!name || !username || !email || !password || !confirmPassword) {
      showToast("OPS!!", "Please fill all the required information!", "#fe0039", "#fe0039", "#fe0039");
      return;
    }

    if (password !== confirmPassword) {
      showToast("OPS!!", "Passwords do not match!", "#fe0039", "#fe0039", "#fe0039");
      return;
    }

    try {
      const url = 'https://localhost:4000/register';
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result.success) {
        showToast("SUCCESS", "Account is successfully registered", "green", "green", "green");
      } else {
        showToast("OPS!!", "Username or email already taken!", "#fe0039", "#fe0039", "#fe0039");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      showToast("OPS!!", "Something went wrong on the server!", "#fe0039", "#fe0039", "#fe0039");
    }
  };

  // const register = () => {
  //   const registerBtn = document.getElementById('register');
    
  //   const showToast = (label, message, color, border, background) => {
  //     const toastLive = document.getElementById('liveToast');
  //     const toastLabel = document.getElementById('toastLabel');
  //     const toastMessage = document.getElementById('toastMessage');
  //     const toastHeader = document.getElementById('toastHeader');
  //     const toast = new window.bootstrap.toast(toastLive);

  //     toastLabel.innerText = label;
  //     toastLabel.style.color = "#FFFFFF";
  //     toastMessage.innerText = message;
  //     toastMessage.style.color = color;
  //     toastLive.style.border = `2px solid ${border}`;
  //     toastHeader.style.background = background;
  //     toast.show();
  //   };

  //   registerBtn.addEventListener("click", function() {
  //     const name = document.getElementById('name');
  //     const username = document.getElementById('username');
  //     const email =document.getElementById('email');
  //     const password = document.getElementById('password');
  //     const confirmPassword = document.getElementById('confirmPassword');

  //     if(name.value === "" && username.value === "" && email.value === "" && password.value === "" && confirmPassword.value === "") {
  //       showToast("OPS!!", "No information are inputted!", "#fe0039", "#fe0039", "#fe0039");
  //       alert('No data inputted');
  //     } else if(name.value === "" || username.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
  //       showToast("OPS!!", "Please fill all the required information!", "#fe0039", "#fe0039", "#fe0039")
  //     } else if(password.value !== confirmPassword.value) {
  //       showToast("OPS!!", "Passwords do not match!", "#fe0039", "#fe0039", "#fe0039")
  //     } else {
  //       try {
  //         const url = 'https://localhost:4000/register';
  //         fetch(url, {
  //           method: 'post',
  //           headers: {
  //             'accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({
  //             name: name.value,
  //             username: username.value,
  //             email: email.value,
  //             password: password.value
  //           })
  //         }).then(function(result) {
  //           return result.json()
  //         }).then(function(result) {
  //           if(result.success) {
  //             showToast("SUCCESS", "Account is successfully registered", "green", "green", "green")
  //           } else {
  //             showToast("OPS!!", "Username or email already taken!", "#fe0039", "#fe0039", "#fe0039")
  //           }
  //         })
  //       } catch (error) {
  //         showToast("OPS!!", "Something went wrong on the server!", "#fe0039", "#fe0039", "#fe0039")
  //       }
  //     }

  //   })
    
  // }


  return (
    <div>
      <ClientNavbar />

      <section className="register-section container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex justify-content-center align-items-center">
        <div className="registration-container container text-white mt-5 py-4 px-3">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" />
          </Link>
          <h2 className="text-center fw-bolder mt-4 mb-3">REGISTER ACCOUNT</h2>
          <form className="text-start" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" name="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="passKey" className="form-label">Password</label>
              <div className="d-flex">
                <input type="password" className="form-control" id="passKey" name="password" />
                <span className="view-password">
                  <i className="bi bi-eye fs-4 mt-1 position-absolute" id="togglePassKey" onClick={showPassword}></i>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="d-flex">
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                <span className="view-password">
                  <i className="bi bi-eye fs-4 mt-1 position-absolute" id="toggleConfirmPassword" onClick={showConfirmPassword}></i>
                </span>
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success fw-semibold register-btn px-3 py-2" id="register">REGISTER</button>
            </div>
            <p className="text-center mt-4">Already have an account? <Link to="/login" className="login-link text-decoration-none fw-semibold">Login</Link> instead.</p>
          </form>
        </div>
        <div className="toast-container position-fixed top-0 p-2">
          <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header" id="toastHeader">
              <strong className="me-auto" id="toastLabel"></strong>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body fw-medium" id="toastMessage">
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register