import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function BasicDetails() {
	const { register, formState: { errors } } = useFormContext()

	return (
		<div className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-1">Bond Name</label>
				<input
					id="name"
					{...register('name', { required: 'Bond name is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.name && <p className="text-red-500">{errors.name.message}</p>}
			</div>
			<div>
				<label htmlFor="image" className="block mb-1">Image URL</label>
				<input
					id="image"
					{...register('image', { required: 'Image URL is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.image && <p className="text-red-500">{errors.image.message}</p>}
			</div>
			<div>
				<label htmlFor="title" className="block mb-1">Title</label>
				<input
					id="title"
					{...register('title', { required: 'Title is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.title && <p className="text-red-500">{errors.title.message}</p>}
			</div>
			<div>
				<label htmlFor="creator" className="block mb-1">Creator Name</label>
				<input
					id="creator"
					{...register('creator', { required: 'Creator name is required' })}
					className="w-full p-2 border rounded"
				/>
				{errors.creator && <p className="text-red-500">{errors.creator.message}</p>}
			</div>
		</div>
	)
}

