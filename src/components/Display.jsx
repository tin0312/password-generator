import React, { useContext } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { passwordContext } from "../App"
import copyIcon from "../assets/images/icon-copy.svg"
import copiedIcon from "../assets/images/copied-icon.svg"

export default function Display() {
	const [copiedStatus, setCopiedStatus] = React.useState(false)
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
	function handleCopy() {
		setCopiedStatus(true)
		setTimeout(() => {
			setCopiedStatus(false)
		}, 2000)
		copyPassword()
	}
	return (
		<Container fluid>
			<Row className="d-flex h-100 align-items-center justify-content-center">
				<Col
					className="d-flex justify-content-start align-items-center overflow-scroll"
					xs={6}
					lg={6}
				>
					<p id="password-display">{randomPassword}</p>
				</Col>
				<Col
					className="d-flex h-100 justify-content-end align-items-center"
					xs={6}
					lg={6}
				>
					<img
						className="copy-icon"
						onClick={handleCopy}
						src={copiedStatus ? copiedIcon : copyIcon}
						alt="copy-icon"
					/>
				</Col>
			</Row>
		</Container>
	)
}
