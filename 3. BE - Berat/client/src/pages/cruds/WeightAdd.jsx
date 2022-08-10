import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function WeightAdd(props) {
	const initialState = {
		tanggal: "",
		max: "",
		min: "",
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		if(crud.min > crud.max) {
			alert("Berat Minimum harus lebih kecil/sama dengan Berat Maksimum");
		} else {
			async function postCrud() {
				try {
					const response = await post("https://crud-sirclo-server.herokuapp.com/weight/create", crud);
					console.log(response)
					navigate(`/cruds/${response.data.data._id}`);
				} catch (error) {
					console.log("error", error);
				}
			}
			postCrud();
		}
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container" class="mt-5 mx-auto" style={{ maxWidth: "400px" }}>
			<h1>Tambah Berat Badan</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label>Tanggal</label>
					<input
						name="tanggal"
						type="date"
						required
						value={crud.tanggal}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group mb-3">
					<label>Berat Max</label>
					<input
						name="max"
						type="number"
						required
						value={crud.max}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group mb-3">
					<label>Berat Min</label>
					<input
						name="min"
						type="number"
						required
						value={crud.min}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary ms-3"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default WeightAdd;
