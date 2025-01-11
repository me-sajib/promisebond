import { useForm } from "react-hook-form";
import { useAxios } from "../../../hooks/UseAxios";
import { useState } from "react";
import EditProduct from "./EditProduct";

export default function Products() {
	const axios = useAxios();
	const { register, handleSubmit, errors } = useForm();
	const [tabs, setTabs] = useState('all')
	const [showEdit, setShowEdit] = useState(false)
	const onSubmit = async (data) => {
		const { name, price, description, products, stocks, category } = data;

		const res = await axios.post("/product", {
			name, price, description, products, stocks, category
		})

		console.log(res);
	};

	const handleSwitchTab = (tab) => {
		setTabs(tab)
	}

	const handleShowEdit = () => {
		setShowEdit(true)
	}

	return (
		<div>
			<div className="account-details px-5 py-3">
				<div className="btn-group pb-3" role="group">
					<button onClick={() => handleSwitchTab('all')} type="button" className={`btn ${tabs === 'all' ? 'btn-success' : 'btn-secondary'}`}>All Products</button>
					<button onClick={() => handleSwitchTab('add')} type="button" className={`btn ${tabs === 'add' ? 'btn-success' : 'btn-secondary'}`}>Add Product</button>
				</div>

				{tabs === "add" && <div className="form">
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
				</div>}

				{
					tabs === "all" && <table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Price</th>
								<th scope="col">Stocks</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>

							<tr>
								<th scope="row">1</th>
								<td>Fb BM site</td>
								<td>$7.77</td>
								<td>30</td>
								<td>
									<div className="flex gap-2">
										<svg onClick={() => handleShowEdit(true)} className="size-6 text-info" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
										</svg>
										<svg className="size-6 text-danger" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
										</svg>

									</div>
								</td>
							</tr>
						</tbody>
					</table>
				}
				{
					showEdit && <EditProduct />
				}
			</div>
		</div>
	)
}
