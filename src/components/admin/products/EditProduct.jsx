import React from 'react'
import { useAxios } from '../../../hooks/UseAxios';
import { useForm } from 'react-hook-form';

export default function EditProduct() {
	const axios = useAxios();
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = async (data) => {
		const { name, price, description, products, stocks, category } = data;

		const res = await axios.post("/product", {
			name, price, description, products, stocks, category
		})

		console.log(res);
	};


	return (
		<div className="form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col">
						<label className="form-label">Name</label>
						<input {...register("name", { required: true })} type="text" className="form-control" placeholder="Product name" name="name" />
						{errors?.name && <span className="text-danger mt-2">This field is required</span>}
					</div>
					<div className="col">
						<label className="form-label">Price</label>
						<input {...register("price", { required: true })} type="text" className="form-control" placeholder="Product price" name="price" />
						{errors?.price && <span className="text-danger mt-2">This field is required</span>}
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-6">
						<label className="form-label">Description</label>
						<textarea {...register("description", { required: true })} name="description" id="desc" className="form-control" placeholder="Product description"></textarea>
						{errors?.description && <span className="text-danger mt-2">This field is required</span>}
					</div>
					<div className="col-6">
						<label className="form-label">Products </label>
						<textarea {...register("products", { required: true })} name="products" id="products" className="form-control" placeholder="Products link"></textarea>
						{errors?.products && <span className="text-danger mt-2">This field is required</span>}
					</div>
					<div className="col-6 mt-4">
						<label className="form-label">Stocks</label>
						<input {...register("stocks")} type="text" className="form-control" placeholder="Product stocks" name="stocks" />
					</div>
					<div className="col-6 mt-4">
						<label className="form-label">Category</label>
						<input {...register("category", { required: true })} type="text" className="form-control" placeholder="Product category" name="category" />
						{errors?.category && <span className="text-danger mt-2">This field is required</span>}
					</div>
				</div>
				<button type="submit">Save Changes </button>
			</form>
		</div>
	)
}
