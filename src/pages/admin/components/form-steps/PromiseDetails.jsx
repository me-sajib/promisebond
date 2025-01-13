import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function PromiseDetails() {
	const { register, formState: { errors } } = useFormContext()

	return (
		<div className="space-y-4">
			<div>
				<label htmlFor="promiseDate" className="block mb-1">Promise Date</label>
				<input
					id="promiseDate"
					type="date"
					{...register('promiseDate', { required: 'Promise date is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.promiseDate && <p className="text-red-500">{errors.promiseDate.message}</p>}
			</div>
			<div>
				<label htmlFor="bondValue" className="block mb-1">Bond Value</label>
				<input
					id="bondValue"
					type="number"
					{...register('bondValue', { required: 'Bond value is required', min: 0 })}
					className="w-full p-2 border rounded"
				/>
				{errors.bondValue && <p className="text-red-500">{errors.bondValue.message}</p>}
			</div>
			<div>
				<label htmlFor="expectedViews" className="block mb-1">Expected Views</label>
				<input
					id="expectedViews"
					{...register('expectedViews', { required: 'Expected views is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.expectedViews && <p className="text-red-500">{errors.expectedViews.message}</p>}
			</div>
			<div>
				<label htmlFor="missionDetails" className="block mb-1">Mission Details</label>
				<textarea
					id="missionDetails"
					{...register('missionDetails', { required: 'Mission details are required' })}
					className="w-full p-2 border rounded"
					rows={4}
				></textarea>
				{errors.missionDetails && <p className="text-red-500">{errors.missionDetails.message}</p>}
			</div>
		</div>
	)
}

