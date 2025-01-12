import React from "react";
import { User, Mail, Lock } from 'lucide-react';
import { useForm } from "react-hook-form";
export default function Register() {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, email, password, confirmPassword, role } = data;
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    // Check if users exist in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.some(user => user.email === email)) {
      alert("Email already exists");
      return;
    }

    // Add new user
    const newUser = { id: Math.round(Date.now() / 1000 * Math.random()), name: fullName, email, password, role };
    users.push(newUser);

    // Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Set current user
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    // Redirect to dashboard
    window.location.replace('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-gray-600">
            Start trading <strong>PromiseBonds</strong> today
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 py-2 block w-full border border-gray-500 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your full name"
                  {...register("fullName", { required: true })}
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 mt-2">Full name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="pl-10 block py-2 w-full border border-gray-500 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
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
                  {...register("password", { required: true })}
                  type="password"
                  className="pl-10 py-2 block w-full border border-gray-500 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Create a password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 mt-2">Password is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register("confirmPassword", { required: true })}
                  type="password"
                  className="pl-10 py-2 block w-full border border-gray-500 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Confirm your password"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 mt-2">
                  Confirm password is required
                </p>
              )}
            </div>

            {/* role type selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role Type
              </label>
              <select
                {...register("role", { required: true })}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="buyer">Buyer</option>
                <option value="issuer">Issuer</option>
              </select>
              {errors.role && (
                <p className="text-red-500 mt-2">Role type is required</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-500 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-primary-500 hover:text-primary-600"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-primary-500 hover:text-primary-600"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-primary-500 hover:text-primary-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

