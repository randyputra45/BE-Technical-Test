import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function WeightDetails(props) {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://crud-sirclo-server.herokuapp.com/weight/data/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`https://crud-sirclo-server.herokuapp.com/weight/delete${_id}`);
			navigate("/cruds");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container" class="mt-5 ms-5">
			<h2>{crud.companyName}</h2>

			<p>
				<b>Tanggal</b>: {crud.tanggal}
			</p>

			<p>
				<b>Min</b>: {crud.min}
			</p>
			<p>
				<b>Max</b>: {crud.max}
			</p>
			<p>
				<b>Perbedaan</b>: {crud.perbedaan}
			</p>
			<p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary me-3">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger me-3">
					Delete
				</button>
				<Link to="/cruds" className="btn btn-secondary ">
					Close
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default WeightDetails;
