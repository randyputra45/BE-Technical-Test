import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function WeightEdit(props) {
	const initialState = {
		tanggal: "",
		min: "",
		max: "",
	};
	const [crud, setCrud] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await get(`https://crud-sirclo-server.herokuapp.com/weight/data/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		if(crud.min > crud.max) {
			alert("Berat minimum harus lebih kecil/sama dengan berat maksimum");
		} else {
			async function updateCrud() {
				try {
					await patch(`https://crud-sirclo-server.herokuapp.com/weight/update/${crud._id}`, crud);
					navigate(`/cruds/${crud._id}`);
				} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		}
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/cruds/`);
	}

	return (
		<div className="container" class="mt-5 mx-5">
			<h1>Edit List</h1>
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
				<div className="btn-group" class="mt-5">
					<button type="submit" className="btn btn-primary me-3">
						Update
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default WeightEdit;
