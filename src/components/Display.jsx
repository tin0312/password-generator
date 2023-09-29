import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { passwordContext } from "../App"
import { useContext } from "react"
import copyIcon from "../assets/images/icon-copy.svg"

export default function Display() {
	const { randomPassword } = useContext(passwordContext)
	function copyPassword() {
		navigator.clipboard.writeText(randomPassword.join("")).then(
			function () {
				console.log("Async: Copying to clipboard was successful!")
			},
			function (err) {
				console.error("Async: Could not copy text: ", err)
			}
		)
	}
	return (
		<Container fluid>
			<Row className="d-flex w-100">
				<Col xs={6} lg={6}>
					<p>{randomPassword}</p>
				</Col>
				<Col xs={6} lg={6}>
					<img onClick={copyPassword} src={copyIcon} alt="copy-icon" />
				</Col>
			</Row>
		</Container>
	)
}
