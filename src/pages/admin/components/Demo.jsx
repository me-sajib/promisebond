import React, { useState } from "react";

const BondCreationForm = () => {
	// Step state
	const [step, setStep] = useState(1);

	// Form data state
	const [formData, setFormData] = useState({
		name: "",
		title: "",
		description: "",
		bondValue: "",
		maturityDate: "",
		platform: "",
		channelName: "",
		country: "",
		subscribers: "",
		weeklyGrowth: "",
		representativeImage: "",
		liabilityAgreement: false,
		features: [""],
		quantity: "",
		promiseDetails: {
			purpose: "",
			promise: "",
		},
	});

	// Handle input changes
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	// Handle nested fields
	const handleNestedChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			promiseDetails: {
				...prev.promiseDetails,
				[name]: value,
			},
		}));
	};

	// Handle features array
	const handleFeatureChange = (index, value) => {
		const newFeatures = [...formData.features];
		newFeatures[index] = value;
		setFormData((prev) => ({
			...prev,
			features: newFeatures,
		}));
	};

	// Add new feature
	const addFeature = () => {
		setFormData((prev) => ({
			...prev,
			features: [...prev.features, ""],
		}));
	};

	// Remove a feature
	const removeFeature = (index) => {
		setFormData((prev) => ({
			...prev,
			features: prev.features.filter((_, i) => i !== index),
		}));
	};

	// Move to the next step
	const nextStep = () => {
		if (step < 4) setStep(step + 1);
	};

	// Move to the previous step
	const prevStep = () => {
		if (step > 1) setStep(step - 1);
	};

	// Save the bond locally (this will simulate saving to a server later)
	const handleSubmit = () => {
		const bonds = JSON.parse(localStorage.getItem("bonds") || "[]");
		localStorage.setItem("bonds", JSON.stringify([...bonds, formData]));
		alert("Bond created successfully!");
		setFormData({
			name: "",
			title: "",
			description: "",
			bondValue: "",
			maturityDate: "",
			platform: "",
			channelName: "",
			country: "",
			subscribers: "",
			weeklyGrowth: "",
			representativeImage: "",
			liabilityAgreement: false,
			features: [""],
			quantity: "",
			promiseDetails: {
				purpose: "",
				promise: "",
			},
		});
		setStep(1);
	};

	// Form steps
	const steps = [
		<div key="step1">
			<h2 className="text-lg font-bold">Step 1: Bond Details</h2>
			<input
				type="text"
				name="name"
				placeholder="Bond Name"
				value={formData.name}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<input
				type="text"
				name="title"
				placeholder="Bond Title"
				value={formData.title}
				onChange={handleChange}
				className="border p-2 w-full mt-2"
			/>
			<textarea
				name="description"
				placeholder="Description"
				value={formData.description}
				onChange={handleChange}
				className="border p-2 w-full mt-2"
			/>
		</div>,

		<div key="step2">
			<h2 className="text-lg font-bold">Step 2: Social Media Details</h2>
			<input
				type="text"
				name="platform"
				placeholder="Platform (e.g., Instagram)"
				value={formData.platform}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<input
				type="text"
				name="channelName"
				placeholder="Channel Name"
				value={formData.channelName}
				onChange={handleChange}
				className="border p-2 w-full mt-2"
			/>
			<input
				type="text"
				name="country"
				placeholder="Country"
				value={formData.country}
				onChange={handleChange}
				className="border p-2 w-full mt-2"
			/>
		</div>,

		<div key="step3">
			<h2 className="text-lg font-bold">Step 3: Promise Details</h2>
			<textarea
				name="purpose"
				placeholder="Promise Purpose"
				value={formData.promiseDetails.purpose}
				onChange={handleNestedChange}
				className="border p-2 w-full"
			/>
			<textarea
				name="promise"
				placeholder="Promise Description"
				value={formData.promiseDetails.promise}
				onChange={handleNestedChange}
				className="border p-2 w-full mt-2"
			/>
			<div className="mt-4">
				<h3>Features:</h3>
				{formData.features.map((feature, index) => (
					<div key={index} className="flex items-center mt-2">
						<input
							type="text"
							value={feature}
							onChange={(e) => handleFeatureChange(index, e.target.value)}
							className="border p-2 flex-1"
						/>
						<button
							type="button"
							onClick={() => removeFeature(index)}
							className="bg-red-500 text-white px-4 ml-2"
						>
							Remove
						</button>
					</div>
				))}
				<button
					type="button"
					onClick={addFeature}
					className="bg-blue-500 text-white px-4 mt-2"
				>
					Add Feature
				</button>
			</div>
		</div>,

		<div key="step4">
			<h2 className="text-lg font-bold">Step 4: Final Details</h2>
			<input
				type="text"
				name="bondValue"
				placeholder="Bond Value"
				value={formData.bondValue}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<input
				type="date"
				name="maturityDate"
				placeholder="Maturity Date"
				value={formData.maturityDate}
				onChange={handleChange}
				className="border p-2 w-full mt-2"
			/>
			<input
				type="text"
				name="quantity"
				placeholder="Quantity"
				value={formData.quantity}
				onChange={handleChange}
				className="border p-2 w-full mt-2"
			/>
			<div className="mt-2">
				<label>
					<input
						type="checkbox"
						name="liabilityAgreement"
						checked={formData.liabilityAgreement}
						onChange={handleChange}
					/>
					<span className="ml-2">I agree to the liability terms</span>
				</label>
			</div>
		</div>,
	];

	return (
		<div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			{steps[step - 1]}
			<div className="flex justify-between mt-6">
				<button
					disabled={step === 1}
					onClick={prevStep}
					className="bg-gray-500 text-white px-4 py-2 rounded-lg"
				>
					Previous
				</button>
				{step === 4 ? (
					<button
						onClick={handleSubmit}
						className="bg-green-500 text-white px-4 py-2 rounded-lg"
					>
						Submit
					</button>
				) : (
					<button
						onClick={nextStep}
						className="bg-blue-500 text-white px-4 py-2 rounded-lg"
					>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default BondCreationForm;
