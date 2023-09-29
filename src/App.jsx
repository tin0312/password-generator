import React, { createContext } from "react"
import Dislay from "./components/Display"
import Setting from "./components/Setting"
import { Container, Col, Row } from "react-bootstrap"
import "./App.css"

export const passwordContext = createContext(null)

function App() {
	const [randomPassword, setRandomPassword] = React.useState()
	return (
		<passwordContext.Provider value={{ randomPassword }}>
			<Container className="main-container d-flex flex-column align-items-center justify-content-center p-0">
				<Row>
					<Col>
						<h3 id="password-app-header">Password Generator</h3>
					</Col>
				</Row>
				<Row className="d-flex display-container align-items-center justify-content-center pt-3 pb-3 w-100 mt-3">
					<Col className="d-flex align-items-center w-100 p-0 h-100" xs={12} lg={12}>
						<Dislay />
					</Col>
				</Row>
				<Row className="setting-container p-3 mt-4 w-100">
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
