import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Link } from "react-router-dom";



export function ModalLogin() {
	const [display, setDisplay] = useState("login");
	const responseMessage = (response) => {
		const { credential } = response;
		console.log(response)
		const parts = credential.split('.');
		const decodedPayload = atob(parts[1]);

		const parsedPayload = JSON.parse(decodedPayload);
		console.log("response", parsedPayload)
		const { name, email } = parsedPayload

		localStorage.setItem('currentUser', JSON.stringify({ name, email }));
		window.location.href = "/";
		const { exp } = parsedPayload;
		const currentTime = Math.floor(Date.now() / 1000);

		if (exp && currentTime >= exp) {
			console.log('Token has expired. Perform logout action.');
		} else {
			console.log('Token is still valid.');
		}

	};
	const errorMessage = (error) => {
		console.log(error);
	};

	const handleChange = () => {
		console.log("resgier")
		setDisplay("register");
	};


	return (
		<div >
			<div className="">
				<div className="flex items-center justify-center p-4">
					{/* Modal panel */}
					<div className=" w-full max-w-5xl overflow-hidden bg-white rounded-lg shadow-sm">


						<div className="grid md:grid-cols-2">
							{/* Left side - Success content */}
							<div className=" bg-[#8B3A46] p-8 text-white">
								<div className="">
									<h2 className="text-4xl font-bold mb-8">Success starts here</h2>
									<ul className="space-y-4">
										<li className="flex items-center gap-2">
											<svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											<span>Over 4 categories</span>
										</li>
										<li className="flex items-center gap-2">
											<svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											<span>Quality work done faster</span>
										</li>
										<li className="flex items-center gap-2">
											<svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											<span>Access to talent and businesses across the globe</span>
										</li>
									</ul>
								</div>
								<div className="absolute inset-0 z-0">
									{/* <img
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/need%20this%20login%20home%20page.PNG-B53vztvaDxVj3HQvwkvWa94LfQzZrv.png"
										alt="Person working on laptop"
										fill
										className="object-cover opacity-40"
									/> */}
								</div>
							</div>

							{/* Right side - Login form */}
							{display === "login" ? <div className="p-8">
								<div className="max-w-sm mx-auto">
									<h1 className="text-2xl font-semibold mb-2">Sign in to your account</h1>
									<p className="text-sm text-gray-600 mb-8">
										Don't have an account? <button onClick={handleChange} className="text-blue-600 underline pointer">Join here</button>
									</p>

									<div className="space-y-4">
										{/* Google login */}
										<GoogleLogin width={"383px"} onSuccess={responseMessage} onError={errorMessage} />



										{/* Divider */}
										<div className="relative">
											<div className="absolute inset-0 flex items-center">
												<div className="w-full border-t border-gray-300"></div>
											</div>
											<div className="relative flex justify-center text-xs uppercase">
												<span className="bg-white px-2 text-gray-500">OR</span>
											</div>
										</div>

										{/* Apple and Facebook buttons */}
										<div className="grid grid-cols-2 gap-4">
											<button className="flex items-center justify-start gap-3 h-12 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
												<svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
												</svg>
												<span className="text-gray-700">Apple</span>
											</button>
											<button className="flex items-center justify-start gap-3 h-12 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
												<svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
													<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
												</svg>
												<span className="text-gray-700">Facebook</span>
											</button>
										</div>
									</div>

									{/* Terms text */}
									<p className="mt-8 text-xs text-gray-500">
										By joining, you agree to the promisebond <Link to="#" className="text-gray-700 hover:underline">Terms of Service</Link> and to occasionally receive emails from us. Please read our <Link to="#" className="text-gray-700 hover:underline">Privacy Policy</Link> to learn how we use your personal data.
									</p>
								</div>
							</div>
								:
								<div className="p-8">
									<div className="max-w-sm mx-auto">
										<h1 className="text-2xl font-semibold mb-2">Create a new account</h1>
										<p className="text-sm text-gray-600 mb-8">
											Already have an account? <button onClick={() => setDisplay("login")} className="text-blue-600 underline pointer">Sign in</button>
										</p>

										<div className="space-y-4">
											{/* Google login */}
											<GoogleLogin width={"383px"} onSuccess={responseMessage} onError={errorMessage} />



											{/* Divider */}
											<div className="relative">
												<div className="absolute inset-0 flex items-center">
													<div className="w-full border-t border-gray-300"></div>
												</div>
												<div className="relative flex justify-center text-xs uppercase">
													<span className="bg-white px-2 text-gray-500">OR</span>
												</div>
											</div>

											{/* Apple and Facebook buttons */}
											<div className="grid grid-cols-2 gap-4">
												<button className="flex items-center justify-start gap-3 h-12 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
													<svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
														<path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
													</svg>
													<span className="text-gray-700">Apple</span>
												</button>
												<button className="flex items-center justify-start gap-3 h-12 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
													<svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
														<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
													</svg>
													<span className="text-gray-700">Facebook</span>
												</button>
											</div>
										</div>

										{/* Terms text */}
										<p className="mt-8 text-xs text-gray-500">
											By joining, you agree to the Fiverr <Link to="#" className="text-gray-700 hover:underline">Terms of Service</Link> and to occasionally receive emails from us. Please read our <Link to="#" className="text-gray-700 hover:underline">Privacy Policy</Link> to learn how we use your personal data.
										</p>
									</div>
								</div>
							}


						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

