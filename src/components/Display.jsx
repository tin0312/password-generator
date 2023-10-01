import React, { useContext } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { passwordContext } from "../App"
import * as Images from "../assets/images"

export default function Display({ setRandomPassword }) {
	const defaultPassword = "P4$5W0rD!"
	const [copiedStatus, setCopiedStatus] = React.useState(false)
	const { randomPassword } = useContext(passwordContext)

	//set up the default password
	React.useEffect(() => {
		if (randomPassword === null) {
			setRandomPassword(defaultPassword)
		}
	}, [])

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
					className="d-flex justify-content-start align-items-center overflow-auto"
					xs={6}
					lg={6}
				>
					<p
						id={
							randomPassword === null
								? "password-display"
								: "default-password-display"
						}
					>
						{randomPassword}
					</p>
				</Col>
				<Col
					className="d-flex h-100 justify-content-end align-items-center"
					xs={6}
					lg={6}
				>
					<img
						className="copy-icon"
						onClick={handleCopy}
						src={copiedStatus ? Images.copiedIcon : Images.copyIcon}
						alt="copy-icon"
					/>
				</Col>
			</Row>
		</Container>
	)
}
