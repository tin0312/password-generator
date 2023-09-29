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
			<Container
				fluid
				className="main-container d-flex flex-column align-items-center justify-content-center"
			>
				<Row className="display-row w-50">
					<Col xs={12} lg={12} className="display-container p-3">
						<Dislay />
					</Col>
				</Row>
				<Row className="setting-row w-50">
					<Col xs={12} lg={12} className="setting-container mt-4 p-3">
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
