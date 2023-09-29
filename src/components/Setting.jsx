import React from "react"
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import RangeSlider from "react-bootstrap-range-slider"
import { passwordContext } from "../App"

export default function Setting({ setRandomPassword, randomPassword }) {
	const [passwordLength, setPasswordLength] = React.useState(0)
	const lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
	const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const symbols = "!@#$%^&*()_+{}:\"<>?~`-=[];',./"
	const numbers = "123456789"

	const strongPassword = new RegExp(
		"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
	)
	const mediumPassword = new RegExp(
		"((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
	)
	const weakPassword = new RegExp("(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[0-9])")
	const tooWeakPassword = new RegExp(
		"(?=.*[0-9])|(?=.*[a-z])|(?=.*[A-Z])| ([^A-Za-z0-9])"
	)

	const [passwordLevel, setPasswordLevel] = React.useState("")
	const [isUppercase, setIsUpperCase] = React.useState(false)
	const [isLowercase, setIsLowerCase] = React.useState(false)
	const [isNumber, setIsNumber] = React.useState(false)
	const [isSymbol, setIsSymbol] = React.useState(false)

	function handleSelection(e) {
		if (e.target.id === "checkbox-1") {
			setIsUpperCase(!isUppercase)
		} else if (e.target.id === "checkbox-2") {
			setIsLowerCase(!isLowercase)
		} else if (e.target.id === "checkbox-3") {
			setIsNumber(!isNumber)
		} else if (e.target.id === "checkbox-4") {
			setIsSymbol(!isSymbol)
		}
	}
	function generateRanPwd() {
		const passwordSets = []

		if (isUppercase) passwordSets.push(uppercaseChar)
		if (isLowercase) passwordSets.push(lowercaseChar)
		if (isNumber) passwordSets.push(numbers)
		if (isSymbol) passwordSets.push(symbols)

		let ranArray = []

		if (passwordLength > 0) {
			if (passwordSets.length > 0) {
				for (let i = 0; i < passwordLength; i++) {
					const passwordSet =
						passwordSets.length === 1
							? passwordSets[0]
							: passwordSets[Math.floor(Math.random() * passwordSets.length)]
					const ranItemIndex = Math.floor(Math.random() * passwordSet.length)
					const ranItem = passwordSet[ranItemIndex]
					ranArray.push(ranItem)
					setRandomPassword(ranArray)
					ratePassword()
				}
			} else {
				setRandomPassword("One option required")
			}
		} else {
			setRandomPassword("Password Length required")
		}
	}

	function ratePassword() {
		if (strongPassword.test(randomPassword)) {
			setPasswordLevel("Strong")
		} else if (mediumPassword.test(randomPassword)) {
			setPasswordLevel("Medium")
		} else if (weakPassword.test(randomPassword)) {
			setPasswordLevel("Weak")
		} else if (tooWeakPassword.test(randomPassword)) {
			setPasswordLevel("Too Weak")
		}
	}
	return (
		<Container fluid>
			<Row className="password-length">
				<Col>
					<h1>Charecter length</h1>
					<RangeSlider
						value={passwordLength}
						onChange={(e) => setPasswordLength(parseInt(e.target.value))}
						step={1}
						variant={"success"}
					/>
				</Col>
				<Row className="d-flex flex-column mt-5">
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"checkbox-1"}
							label={"Include Uppercase Letters"}
							checked={isUppercase}
							onChange={(e) => handleSelection(e)}
						/>
					</Col>
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"checkbox-2"}
							label={"Include Lowercase Letters"}
							checked={isLowercase}
							onChange={(e) => handleSelection(e)}
						/>
					</Col>
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"checkbox-3"}
							label={"Include Numbers"}
							checked={isNumber}
							onChange={(e) => handleSelection(e)}
						/>
					</Col>
					<Col>
						<Form.Check
							type={"checkbox"}
							id={"checkbox-4"}
							label={"Include Symbols"}
							checked={isSymbol}
							onChange={(e) => handleSelection(e)}
						/>
					</Col>
				</Row>
			</Row>
			<Row className="mt-5">
				<Col>
					<h3>STRENGTH</h3>
				</Col>
				<Col>
					<p>{passwordLevel}</p>
				</Col>
			</Row>
			<Row>
				<Col className="mt-4">
					<Button variant="success" onClick={generateRanPwd}>
						Generate
					</Button>
				</Col>
			</Row>
		</Container>
	)
}
