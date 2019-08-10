import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import InmateService from "../utils/InmateService";
import { Input, TextArea, FormBtn } from "../components/Form";

class Detail extends Component {
    state = {
        inmate: {
            contacts: []
        },
        name: "",
        phone: "",
        email: "",
        message: "",
        messageSent: false
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/inmate/599dcb67f0f16317844583fc
    componentDidMount() {
        this.loadInmateDetail();
    }

    loadInmateDetail = () => {
        InmateService.getInmate(this.props.match.params.id)
            .then(res => this.setState({ inmate: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    sendMessage = () => {
        InmateService.pinched(this.props.match.params.id)
            .then(res => this.setState({
                messageSent: true
            }))
            .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();

        this.state.inmate.contacts.push({
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            message: this.state.message
        });

        if (this.state.name) {
            InmateService.updateInmate(this.state.inmate._id, this.state.inmate)
                .then(res => this.loadInmateDetail())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.inmate.name}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                {
                    this.state.messageSent ? <Row>
                        <Col size="md-12">
                            <h2>Message Sent! Help is on the way!</h2>
                        </Col>
                    </Row> : <></>
                }
                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Inmates</Link>
                    </Col>
                    <Col size="md-8"></Col>
                    <Col size="md-2">
                        <FormBtn onClick={this.sendMessage}>
                            I got pinched!
                        </FormBtn>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <p>Phone Number: {this.state.inmate.phoneNumber || "Not Provided"}</p>
                        <p>Email: {this.state.inmate.email || "Not Provided"}</p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6 md-offset-1">
                        {/* TODO Switch to separate component */}
                        <h3>Contact List</h3>
                        {this.state.inmate.contacts.map(contact => (
                            <>
                                <h4 key={contact.name}>
                                    {contact.name} - {contact.phoneNumber}
                                </h4>
                                <p>
                                    {contact.message || "No Message Provided"}
                                </p>
                            </>
                        ))}
                    </Col>
                    <Col size="md-6 md-offset-1">
                        <h3>Add a new Contact</h3>
                        {/* TODO Switch to separate component */}
                        <form>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Name (Required)"
                            />
                            <Input
                                value={this.state.phoneNumber}
                                onChange={this.handleInputChange}
                                name="phoneNumber"
                                placeholder="Phone Number (Required)"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email (Optional)"
                            />
                            <TextArea
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                rows="5"
                                name="message"
                                placeholder="Message (Optional)"
                            />
                            <FormBtn
                                disabled={!this.state.name || !this.state.phoneNumber}
                                onClick={this.handleFormSubmit}
                            >
                                Submit New Contact
              </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Detail;
