import React from "react"
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import RangeSlider from "react-bootstrap-range-slider"

export default function Setting() {
	const [value, setValue] = React.useState("")
	const [pwLevel, setPwLevel] = React.useState("")
	return (
		<Container fluid>
			<Row className="password-length">
				<Col>
					<h1>Charecter length</h1>
					<RangeSlider
						value={value}
						onChange={(changeEvent) => setValue(changeEvent.target.value)}
						min={8}
						max={12}
						step={1}
					/>
				</Col>
				<Row className="d-flex flex-column mt-5">
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"default-checkbox"}
							label={"Include Uppercase Letters"}
						/>
					</Col>
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"default-checkbox"}
							label={"Include Lowercase Letters"}
						/>
					</Col>
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"default-checkbox"}
							label={"Include Numbers"}
						/>
					</Col>
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"default-checkbox"}
							label={"Include Symbols"}
						/>
					</Col>
				</Row>
			</Row>
			<Row className="mt-5">
				<Col>
					<h3>STRENGTH</h3>
				</Col>
				<Col>
					<p>{pwLevel}MEDIUM-hardcoded value</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button variant="success">Generate</Button>
				</Col>
			</Row>
		</Container>
	)
}
