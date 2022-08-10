import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function WeightTable() {
	const [cruds, setCruds] = useState([]);
	let [dataLength, setDataLength] = useState(0);
	let counterMin = 0;
	let counterMax = 0;
	let counterPerbedaan = 0;

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("https://crud-sirclo-server.herokuapp.com/weight/data");
				setCruds(response.data);
				setDataLength(response.data.length);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

	return (
		<div className="container" class="mt-5 ms-5">
			<div>
				<h2>
					List Berat Badan
					<p>
						<Link to="/cruds/new" className="btn btn-primary float-right">
							Tambah Berat Badan
						</Link>
					</p>
				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Tanggal</th>
						<th>Max</th>
						<th>Min</th>
						<th>Perbedaan</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{cruds &&
						cruds.map((crud) => {
							counterMin += crud.min
							counterMax += crud.max
							counterPerbedaan += crud.perbedaan
							return (
								<tr key={crud._id}>
									<td>{crud.tanggal}</td>
									<td>{crud.max}</td>
									<td>{crud.min}</td>
									<td>{crud.perbedaan}</td>
									<td>
										<Link to={`/cruds/${crud._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
				<tbody>
					<tr>
						<td><b>Rata-Rata</b></td>
						<td>{(counterMin/dataLength).toFixed(1)}</td>
						<td>{(counterMax/dataLength).toFixed(1)}</td>
						<td>{(counterPerbedaan/dataLength).toFixed(1)}</td>
					</tr>
				</tbody>
			</table>
			</div>
		</div>
	);
}

export default WeightTable;
