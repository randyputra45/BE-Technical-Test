import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function WeightDelete(props) {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteCrudById() {
				try {
					const response = await axios.get(`https://crud-sirclo-server.herokuapp.com/weight/data/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteCrudById();
		},
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`https://crud-sirclo-server.herokuapp.com/weight/delete/${_id}`);
			navigate("/cruds");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div class="mx-auto mt-5">
		<div className="container">
			<h2>{crud.companyName}</h2>

			<p>
				<b>Tanggal</b>: {crud.tanggal}
			</p>

			<p>
				<b>Berat Min</b>: {crud.min}
			</p>
			<p>
				<b>Berat Max</b>: {crud.max}
			</p>
			<p>
				<b>Perbedaan</b>: {crud.perbedaan}
			</p>
			<p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p>
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger me-3">
					Delete
				</button>
				<Link to="/cruds" className="btn btn-secondary">
					Cancel{" "}
				</Link>
			</div>
			<hr />
		</div>
		</div>
	);
}

export default WeightDelete;
