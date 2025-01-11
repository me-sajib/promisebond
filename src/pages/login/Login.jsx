import { useState } from "react";
import { Link } from "react-router-dom"
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import "./Login.css"
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    const address_wallet = 'TXJr6svJ3quRJEF7dJ7DD7q53fZGqoA4EG'; // Replace with your Tron wallet address
    const token_wallet = '06abf795xb21b7657ffd259453903e26'; // Replace with your token wallet
    const request_id = new Date().getTime(); // Generate a unique request ID
    const callback = 'http://localhost:5050/callback_crypto';
    const return_url = 'https://localhost:5050/history_crypto';

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const url = `https://fpayment.co/api/AddInvoice.php?address_wallet=${encodeURIComponent(address_wallet)}&token_wallet=${encodeURIComponent(token_wallet)}&name=${encodeURIComponent('Recharge Website FPAYMENT.CO')}&description=${encodeURIComponent('klsadjkl')}&amount=${encodeURIComponent(1)}&request_id=${encodeURIComponent(request_id)}&callback=${encodeURIComponent(callback)}&return_url=${encodeURIComponent(return_url)}`;

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.text();
      console.log(result);
      // You can parse the result and redirect to return_url if needed
      window.location.href = return_url;
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <div className="login py-5">
        <div class="container login-container">
          <div class="d-flex gap-4 w-full">
            <div className="w-100">
              <h3 className="text-sm">Login</h3>
              <div class="w-100 border mt-4 p-4">
                <form className="d-flex flex-column gap-4">
                  <div class="form-group">
                    <label for="email" className="text-md">Email address <span class="text-danger">*</span></label>
                    <input id="email" type="text" class="form-control py-3 px-3" placeholder="mail@example.com" />
                  </div>
                  <div class="form-group">
                    <label for="password" className="text-md">Password <span class="text-danger">*</span></label>
                    <input type="password" class="form-control py-3 px-3" placeholder="********" />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Login </button>
                    <br />
                    <a href="#" class="btn btn-link">Lost your password?</a>
                  </div>
                  <div class="form-group">
                  </div>
                </form>
              </div>
            </div>

            <div className="w-100">
              <h3>Register</h3>
              <div class="w-100 border mt-4 p-4">

                <form className="d-flex flex-column gap-4">
                  <div class="form-group">
                    <label for="email" className="text-md">Email address <span class="text-danger">*</span></label>
                    <input id="email" type="text" class="form-control py-3 px-3" placeholder="mail@example.com" />
                  </div>
                  <div class="form-group">
                    <label for="email" className="text-md">Email address <span class="text-danger">*</span></label>
                    <input id="email" type="text" class="form-control py-3 px-3" placeholder="mail@example.com" />
                  </div>
                  <div class="form-group">
                    <label for="password" className="text-md">Password <span class="text-danger">*</span></label>
                    <input type="password" class="form-control py-3 px-3" placeholder="********" />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>
                  <div class="form-group">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

