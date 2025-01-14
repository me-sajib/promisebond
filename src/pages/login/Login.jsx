import React, { useState } from "react";
import { Mail, Lock } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ModalLogin } from "./ModalLogin";

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
      <ModalLogin />
    </div>
  );
}

