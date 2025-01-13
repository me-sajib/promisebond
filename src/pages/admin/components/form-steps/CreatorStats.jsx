import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function CreatorStats() {
	const { register, formState: { errors } } = useFormContext()

	return (
		<div className="space-y-4">
			<div>
				<label htmlFor="currentSubscribers" className="block mb-1">Current Subscribers</label>
				<input
					id="currentSubscribers"
					type="number"
					{...register('creatorStats.currentSubscribers', { required: 'Current subscribers is required', min: 0 })}
					className="w-full p-2 border rounded"
				/>
				{errors.creatorStats?.currentSubscribers && <p className="text-red-500">{errors.creatorStats.currentSubscribers.message}</p>}
			</div>
			<div>
				<label htmlFor="weeklyGrowth" className="block mb-1">Weekly Growth</label>
				<input
					id="weeklyGrowth"
					type="number"
					{...register('creatorStats.weeklyGrowth', { required: 'Weekly growth is required', min: 0 })}
					className="w-full p-2 border rounded"
				/>
				{errors.creatorStats?.weeklyGrowth && <p className="text-red-500">{errors.creatorStats.weeklyGrowth.message}</p>}
			</div>
			<div>
				<label htmlFor="avgViews" className="block mb-1">Average Views</label>
				<input
					id="avgViews"
					type="number"
					{...register('creatorStats.avgViews', { required: 'Average views is required', min: 0 })}
					className="w-full p-2 border rounded"
				/>
				{errors.creatorStats?.avgViews && <p className="text-red-500">{errors.creatorStats.avgViews.message}</p>}
			</div>
			<div>
				<label htmlFor="completedPromises" className="block mb-1">Completed Promises</label>
				<input
					id="completedPromises"
					type="number"
					{...register('creatorStats.completedPromises', { required: 'Completed promises is required', min: 0 })}
					className="w-full p-2 border rounded"
				/>
				{errors.creatorStats?.completedPromises && <p className="text-red-500">{errors.creatorStats.completedPromises.message}</p>}
			</div>
		</div>
	)
}

