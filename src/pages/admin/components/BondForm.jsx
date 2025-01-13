import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import BasicDetails from './form-steps/BasicDetails'
import PromiseDetails from './form-steps/PromiseDetails'
import CreatorStats from './form-steps/CreatorStats'
import AdditionalDetails from './form-steps/AdditionalDetails'
import Preview from './form-steps/Preview'
import { X } from 'lucide-react'

const steps = ['Basic Details', 'Promise Details', 'Creator Stats', 'Additional Details', 'Preview']

export default function CreateBondForm() {
	const [currentStep, setCurrentStep] = useState(0)
	const methods = useForm()
	const [formData, setFormData] = useState(() => {
		if (typeof window !== 'undefined') {
			const savedData = localStorage.getItem('bondFormData')
			return savedData ? JSON.parse(savedData) : {}
		}
		return {}
	})

	useEffect(() => {
		localStorage.setItem('bondFormData', JSON.stringify(formData))
	}, [formData])

	const onSubmit = (data) => {
		if (currentStep === steps.length - 1) {
			// Final submission
			const bonds = JSON.parse(localStorage.getItem('bonds') || '[]')
			const newBond = {
				...data,
				id: bonds.length + 1,
				createdAt: new Date().toISOString(),
			}
			bonds.push(newBond)
			localStorage.setItem('bonds', JSON.stringify(bonds))
			alert('Bond created successfully!')
			methods.reset()
			setCurrentStep(0)
		} else {
			setFormData(data)
			setCurrentStep(currentStep + 1)
		}
	}

	const handlePrevious = () => {
		setCurrentStep(currentStep - 1)
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
				<div className='flex gap-4 justify-between'>
					<h2 className="text-xl font-bold mb-6">Create a New Bond - Step {currentStep + 1}</h2>
					<X className="w-6 h-6" onClick={() => window.location.reload()} />
				</div>
				{currentStep === 0 && <BasicDetails />}
				{currentStep === 1 && <PromiseDetails />}
				{currentStep === 2 && <CreatorStats />}
				{currentStep === 3 && <AdditionalDetails />}
				{currentStep === 4 && <Preview formData={methods.getValues()} />}
				<div className="flex justify-between mt-6">
					{currentStep > 0 && (
						<button
							type="button"
							onClick={handlePrevious}
							className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
						>
							Previous
						</button>
					)}
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					>
						{currentStep === steps.length - 1 ? 'Submit' : 'Next'}
					</button>
				</div>
			</form>
		</FormProvider>
	)
}

