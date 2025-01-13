import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function AdditionalDetails() {
	const { register, formState: { errors } } = useFormContext()

	return (
		<div className="space-y-4">
			<div>
				<label htmlFor="maturityDate" className="block mb-1">Maturity Date</label>
				<input
					id="maturityDate"
					type="date"
					{...register('maturityDate', { required: 'Maturity date is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.maturityDate && <p className="text-red-500">{errors.maturityDate.message}</p>}
			</div>
			<div>
				<label htmlFor="price" className="block mb-1">Price</label>
				<input
					id="price"
					type="number"
					{...register('price', { required: 'Price is required', min: 0 })}
					className="w-full p-2 border rounded"
				/>
				{errors.price && <p className="text-red-500">{errors.price.message}</p>}
			</div>
			<div>
				<label htmlFor="quantity" className="block mb-1">Quantity</label>
				<input
					id="quantity"
					type="number"
					{...register('quantity', { required: 'Quantity is required', min: 1 })}
					className="w-full p-2 border rounded"
				/>
				{errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
			</div>
			<div>
				<label htmlFor="platform" className="block mb-1">Social Media Platform</label>
				<input
					id="platform"
					{...register('socialMedia.platform', { required: 'Platform is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.socialMedia?.platform && <p className="text-red-500">{errors.socialMedia.platform.message}</p>}
			</div>
			<div>
				<label htmlFor="channelName" className="block mb-1">Channel Name</label>
				<input
					id="channelName"
					{...register('socialMedia.channelName', { required: 'Channel name is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.socialMedia?.channelName && <p className="text-red-500">{errors.socialMedia.channelName.message}</p>}
			</div>
			<div>
				<label htmlFor="country" className="block mb-1">Country</label>
				<input
					id="country"
					{...register('socialMedia.country', { required: 'Country is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.socialMedia?.country && <p className="text-red-500">{errors.socialMedia.country.message}</p>}
			</div>
			<div>
				<label className="flex items-center">
					<input
						type="checkbox"
						{...register('liabilityAgreement', { required: 'You must agree to the liability agreement' })}
						className="mr-2"
					/>
					I agree to the liability agreement
				</label>
				{errors.liabilityAgreement && <p className="text-red-500">{errors.liabilityAgreement.message}</p>}
			</div>
		</div>
	)
}

