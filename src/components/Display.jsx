import React from "react"
import { Container, Col, Row} from "react-bootstrap"


export default function Display(){
    return (
        <Container fluid>
            <Row>
                <Col xs = {12} lg = {12}>
                    <h1>Display</h1>
                </Col>
            </Row>
        </Container>
    )
}