import React from "react"
import { Container, Col, Row, Button, Form } from "react-bootstrap"
import RangeSlider from "react-bootstrap-range-slider"
import * as Images from "../assets/images"

export default function Setting({ setRandomPassword, randomPassword }) {
	const [passwordLength, setPasswordLength] = React.useState(0)
	const lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
	const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const symbols = "!@#$%^&*()_+{}:\"<>?~`-=[];',./"
	const numbers = "123456789"
	const [isHovered, setIsHovered] = React.useState(false)
	// Requires at least one lowercase letter, one uppercase letter, one digit, and one special character.
	// Minimum length: 10 characters.
	const strongPassword = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{10,}$"
	)

	// Requires a combination of at least one of the sets (lowercase, uppercase, digit, special character).
	// Minimum length: 8 characters, maximum length: 12 characters.
	const mediumPassword = new RegExp(
		"^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,12}$"
	)

	// Requires at least one lowercase letter, one digit, and optionally one uppercase letter.
	// Minimum length: 6 characters.
	const weakPassword = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{6,}$")

	// Requires at least one character that is not an alphanumeric character.
	const tooWeakPassword = new RegExp("[^A-Za-z0-9]")

	const [passwordLevel, setPasswordLevel] = React.useState("")
	const [isUppercase, setIsUpperCase] = React.useState(false)
	const [isLowercase, setIsLowerCase] = React.useState(false)
	const [isNumber, setIsNumber] = React.useState(false)
	const [isSymbol, setIsSymbol] = React.useState(false)

	const securityIndicators = {
		"Too Weak!": [Images.tooWeak, Images.empty, Images.empty, Images.empty],
		Weak: [Images.weak, Images.weak, Images.empty, Images.empty],
		Medium: [Images.medium, Images.medium, Images.medium, Images.empty],
		Strong: [Images.strong, Images.strong, Images.strong, Images.strong],
	}

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
				window.alert("One option required!")
			}
		} else {
			window.alert("Password length required!")
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
			setPasswordLevel("Too Weak!")
		}
	}
	return (
		<Container fluid>
			<Row className="range-container">
				{/* Range Slider */}

				<Col className="d-flex justify-content-start p-0" xs={12} lg={12}>
					<Col
						xs={8}
						lg={8}
						className="d-flex justify-content-start align-items-center"
					>
						<p className="length-header">Character length</p>
					</Col>
					<Col
						xs={4}
						lg={4}
						className="d-flex justify-content-end align-items-center "
					>
						<p className="password-length">{passwordLength}</p>
					</Col>
				</Col>

				<Col xs={12} lg={12} className="range-small p-0">
					<RangeSlider
						value={passwordLength}
						onChange={(e) => setPasswordLength(parseInt(e.target.value))}
						step={1}
						className="custom-slider"
						size="lg"
						tooltip="off"
					/>
				</Col>
			</Row>
			{/* Options */}
			<Row className="d-flex flex-column mt-2">
				<Col
					xs={12}
					lg={12}
					className="d-flex w-100 align-items-center option p-0 mb-3"
				>
					<Form.Check
						type={"checkbox"}
						id={"checkbox-1"}
						label={"Include Uppercase Letters"}
						checked={isUppercase}
						onChange={(e) => handleSelection(e)}
					/>
				</Col>
				<Col xs={12} lg={12} className="d-flex option p-0 mb-3">
					<Form.Check
						type={"checkbox"}
						id={"checkbox-2"}
						label={"Include Lowercase Letters"}
						checked={isLowercase}
						onChange={(e) => handleSelection(e)}
					/>
				</Col>
				<Col xs={12} lg={12} className="d-flex option p-0 mb-3">
					<Form.Check
						type={"checkbox"}
						id={"checkbox-3"}
						label={"Include Numbers"}
						checked={isNumber}
						onChange={(e) => handleSelection(e)}
					/>
				</Col>
				<Col xs={12} lg={12} className="d-flex option p-0">
					<Form.Check
						type={"checkbox"}
						id={"checkbox-4"}
						label={"Include Symbols"}
						checked={isSymbol}
						onChange={(e) => handleSelection(e)}
					/>
				</Col>
			</Row>
			{/* Password Rating */}
			<Row className="rating-container mt-5 p-3">
				<Col xs={6} lg={6} className="d-flex rating align-items-center p-0">
					<h3 className="password-level-header">strength</h3>
				</Col>
				<Col
					xs={4}
					lg={4}
					className="d-flex rating align-items-center justify-content-start p-0"
				>
					<p className="password-level">{passwordLevel}</p>
				</Col>
				<Col
					className="rating-indicator-container d-flex align-items-center justify-content-start p-0 "
					xs={2}
					lg={2}
				>
					{passwordLevel &&
						securityIndicators[passwordLevel].map((indicator, index) => (
							<img
								key={index}
								className="security-indicator"
								src={indicator}
								alt={`${passwordLevel}`}
							/>
						))}
				</Col>
			</Row>
			<Row className="button-container">
				<Col xs={12} lg={12} className="mt-4 w-100 p-0">
					<Button
						className="custom-btn"
						onClick={generateRanPwd}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						Generate{" "}
						<span>
							<img
								src={!isHovered ? Images.buttonArrowIdle : Images.buttonArrow}
								alt="btn-arrow"
								id="btn-arrow"
							/>
						</span>
					</Button>
				</Col>
			</Row>
		</Container>
	)
}
