import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data";
import { Link, useNavigate } from "react-router-dom";

function Home() {
	let history = useNavigate();
	function setID(id, name, age) {
		localStorage.setItem("id", id);
		localStorage.setItem("Name", name);
		localStorage.setItem("Age", age);
	}
	
	function deleted(id) {
		let index = Data
			.map(function (e) {
				return e.id;
			})
			.indexOf(id);
		Data.splice(index, 1);
		history("/");
	}

	return (
		<div style={{ margin: "5rem" }}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Department</th>
					</tr>
				</thead>
				<tbody>
					{Data.map((emp) => {
						return (
							<tr>
								<td>{emp.Name}</td>
								<td>{emp.Age}</td>
								<td>{emp.Dept}</td>
								<td>
									<Link to={`/edit`}>
										<Button
											onClick={(e) =>
												setID(
													emp.id,
													emp.Name,
													emp.Age,
													emp.Dept
												)
											}
											variant="info"
										>
											Update
										</Button>
									</Link>
								</td>
								<td>
									<Button
										onClick={(e) =>
											deleted(emp.id)
										}
										variant="danger"
									>
										Delete
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Link className="d-grid gap-2" to="/Add">
				<Button variant="warning" size="lg">
					Add Data
				</Button>
			</Link>
		</div>
	);
}

export default Home;
