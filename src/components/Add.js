import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [dept,setDept]=useState("");

	let history = useNavigate();

	const handelSubmit = (e) => {
		e.preventDefault(); // Prevent reload

		const ids = uuid(); 
		let uni = ids.slice(0, 8);

		let a = name,
			b = age,
			c = dept;
		if (name === "" || age === "") {
			alert("invalid input");
			return;
		}
		Data.push({ id: uni, Name: a, Age: b , Dept:c});

		history("/");
	};

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				<Form.Group
					className="mb-3"
					controlId="formBasicName"
				>
					<Form.Control
						onChange={(e) =>
							setName(e.target.value)
						}
						type="text"
						placeholder="Enter Name"
						required
					/>
				</Form.Group>

				<Form.Group
					className="mb-3"
					controlId="formBasicAge"
				>
					<Form.Control
						onChange={(e) =>
							setAge(e.target.value)
						}
						type="number"
						placeholder="Age"
						required
					/>
				</Form.Group>

				<Form.Group
					className="mb-3"
					controlId="formBasicName"
				>
					<Form.Control
						onChange={(e) =>
							setDept(e.target.value)
						}
						type="text"
						placeholder="Enter Dept"
						required
					/>
				</Form.Group>

				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>

				{/* Redirecting back to home page */}
				<Link className="d-grid gap-2" to="/">
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Add;
