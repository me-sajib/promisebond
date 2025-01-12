import React, { useState } from "react";
import { Mail, Lock } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Set current user
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Redirect to dashboard
      window.location.replace('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">
            Sign in to your <strong>PromiseBond</strong> account
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="pl-10 py-2 block w-full border border-gray-500 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 mt-2">Email is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  className="pl-10 py-2 block w-full border border-gray-500 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 mt-2">Password is required</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link
                to="/forget_password"
                className="text-sm text-primary-500 hover:text-primary-600"
              >
                Forgot password?
              </Link>
            </div>

            {/*  demo login button, admin, issuer, buyer */}
            <div className="flex items-center justify-between w-[70%]">
              <div className="flex items-center ">
                <button onClick={() => { window.location.replace('/dashboard'); localStorage.setItem('currentUser', JSON.stringify({ id: 3738382, name: "Andy", email: "1@1.com", password: "123456", role: 'admin' })); }} className="bg-primary-500 text-white px-3 py-1 rounded">Admin</button>
              </div>
              <div className="flex items-center">
                <button onClick={() => { window.location.replace('/dashboard'); localStorage.setItem('currentUser', JSON.stringify({ id: 3993939, name: "John", email: "2@2.com", password: "123456", role: 'issuer' })); }} className="bg-primary-400 text-white px-3 py-1 rounded">Issuer</button>
              </div>
              <div className="flex items-center">
                <button onClick={() => { window.location.replace('/dashboard'); localStorage.setItem('currentUser', JSON.stringify({ id: 7474747, name: "Sarah", email: "3@3.com", password: "123456", role: 'buyer' })); }} className="bg-primary-300 text-white px-3 py-1 rounded">Buyer</button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1dbf73] hover:bg-[#1dbf73] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1dbf73]"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <to
                href="/register"
                className="font-medium text-primary-500 hover:text-primary-600"
              >
                Sign up
              </to>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

