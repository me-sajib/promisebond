import React from 'react'

export default function Preview({ formData }) {
	return (
		<div className="space-y-4" style={{ overflow: 'auto', maxHeight: '400px' }}>
			<h3 className="text-xl font-semibold">Preview</h3>
			<div>
				<strong>Bond Name:</strong> {formData.name}
			</div>
			<div>
				<strong>Image:</strong> <img src={formData.image} alt={formData.name} className="w-32 h-32 object-cover" />
			</div>
			<div>
				<strong>Title:</strong> {formData.title}
			</div>
			<div>
				<strong>Creator:</strong> {formData.creator}
			</div>
			<div>
				<strong>Promise Date:</strong> {formData.promiseDate}
			</div>
			<div>
				<strong>Bond Value:</strong> ${formData.bondValue}
			</div>
			<div>
				<strong>Expected Views:</strong> {formData.expectedViews}
			</div>
			<div>
				<strong>Mission Details:</strong> {formData.missionDetails}
			</div>
			<div>
				<strong>Current Subscribers:</strong> {formData.creatorStats.currentSubscribers}
			</div>
			<div>
				<strong>Weekly Growth:</strong> {formData.creatorStats.weeklyGrowth}
			</div>
			<div>
				<strong>Average Views:</strong> {formData.creatorStats.avgViews}
			</div>
			<div>
				<strong>Completed Promises:</strong> {formData.creatorStats.completedPromises}
			</div>
			<div>
				<strong>Maturity Date:</strong> {formData.maturityDate}
			</div>
			<div>
				<strong>Price:</strong> ${formData.price}
			</div>
			<div>
				<strong>Quantity:</strong> {formData.quantity}
			</div>
			<div>
				<strong>Social Media Platform:</strong> {formData.socialMedia.platform}
			</div>
			<div>
				<strong>Channel Name:</strong> {formData.socialMedia.channelName}
			</div>
			<div>
				<strong>Country:</strong> {formData.socialMedia.country}
			</div>
			<div>
				<strong>Liability Agreement:</strong> {formData.liabilityAgreement ? 'Agreed' : 'Not Agreed'}
			</div>
		</div>
	)
}

