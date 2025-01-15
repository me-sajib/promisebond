import React, { useState } from "react";

const RegisterModal = ({ isOpen, onClose, userData, handleInfo }) => {
	if (!isOpen) return null;

	return (
		<div style={{ left: "50%", top: "20%" }} id="authentication-modal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
			<div class="relative p-4 w-full max-w-md h-full md:h-auto">
				<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</button>
					<div class="py-6 px-6 lg:px-8">
						<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Provide your information</h3>

						<div>
							<label for="FirstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
							<input onChange={handleInfo} type="text" name="FirstName" id="FirstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="First name" required />
						</div>
						<div>
							<label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">last Name</label>
							<input onChange={handleInfo} type="text" name="lastName" id="lastName" placeholder="last name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
						</div>
						<div>
							<label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label>
							<select onChange={handleInfo} id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
								<option value="Australia">Australia</option>
								<option value="USA">USA</option>
								<option value="Canada">Canada</option>
								<option value="UK">United Kingdom</option>
								<option value="New Zealand">New Zealand</option>
								<option value="Japan">Japan</option>
								<option value="South Korea">South Korea</option>
								{/* <!-- Add OECD countries --> */}
								<option value="France">France</option>
								<option value="Germany">Germany</option>
								<option value="Italy">Italy</option>
								<option value="Netherlands">Netherlands</option>
								<option value="Norway">Norway</option>
								<option value="Sweden">Sweden</option>
								<option value="Switzerland">Switzerland</option>
								<option value="Turkey">Turkey</option>
								<option value="Denmark">Denmark</option>
								<option value="Belgium">Belgium</option>
								<option value="Luxembourg">Luxembourg</option>
								<option value="Ireland">Ireland</option>
							</select>
						</div>

						<button onClick={onClose} type="button" class="mt-2 w-full text-white bg-primary-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

					</div>
				</div>
			</div>
		</div>
	);
};
export default RegisterModal;