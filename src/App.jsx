import React, { createContext } from "react"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
import Dislay from "./components/Display"
import Setting from "./components/Setting"
import { Container, Col, Row } from "react-bootstrap"
import "./App.css"
import "./index.scss"

export const passwordContext = createContext(null)

function App() {
	const [randomPassword, setRandomPassword] = React.useState(null)
	return (
		<passwordContext.Provider value={{ randomPassword }}>
			<Container className="main-container d-flex flex-column align-items-center justify-content-center p-0">
				{/* Display*/}
				<Row>
					<Col>
						<h3 id="password-app-header">Password Generator</h3>
					</Col>
				</Row>
				<Row className="d-flex display-container align-items-center justify-content-center p-1 w-100 mt-3">
					<Col className="d-flex align-items-center w-100 p-0 h-100" xs={12} lg={12}>
						<Dislay setRandomPassword={setRandomPassword} />
					</Col>
				</Row>
				{/* Setting*/}
				<Row className="setting-container p-1 pb-4 mt-4 w-100">
					<Col xs={12} lg={12}>
						<Setting
							setRandomPassword={setRandomPassword}
							randomPassword={randomPassword}
						/>
					</Col>
				</Row>
			</Container>
		</passwordContext.Provider>
	)
}

export default App
