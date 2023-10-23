import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
	const [name, setname] = useState("");
	const [age, setage] = useState("");
	const [id, setid] = useState("");
	const [dept,setDept]=useState("");

	let history = useNavigate();

	let index = Data
		.map(function (e) {
			return e.id;
		})
		.indexOf(id);

	const handelSubmit = (e) => {
		e.preventDefault();
		if (name === "" || age === "") {
			alert("invalid input");
			return;
		}
		let a = Data[index];
		a.Name = name;
		a.Age = age;
		a.Dept = dept;
		console.log(a)
		history("/");
	};

	useEffect(() => {
		setname(localStorage.getItem("Name"));
		setage(localStorage.getItem("Age"));
		setid(localStorage.getItem("id"));
		setid(localStorage.getItem("Dept"));
	}, []);

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail"
				>
					<Form.Control
						value={name}
						onChange={(e) =>
							setname(e.target.value)
						}
						type="text"
						placeholder="Enter Name"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Control
						value={age}
						onChange={(e) =>
							setage(e.target.value)
						}
						type="number"
						placeholder="Age"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail"
				>
					<Form.Control
						value={dept}
						onChange={(e) =>
							setDept(e.target.value)
						}
						type="text"
						placeholder="Enter Dept"
					/>
				</Form.Group>
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
					size="lg"
				>
					Update
				</Button>
				<Link className="d-grid gap-2" to="/">
					<Button variant="warning" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Edit;
