import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import InmateService from "../utils/InmateService";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Inmates extends Component {
    state = {
        inmates: [],
        name: "",
        phoneNumber: "",
        email: ""
    };

    componentDidMount() {
        this.loadInmates();
    }

    loadInmates = () => {
        InmateService.getInmates()
            .then(res => this.setState({ inmates: res.data }))
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        InmateService.deleteInmate(id)
            .then(res => this.loadInmates())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
            InmateService.saveInmate({
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email
            })
                .then(res => this.loadInmates())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Sign Up a New Inmate</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Name (required)"
                            />
                            <Input
                                value={this.state.phoneNumber}
                                onChange={this.handleInputChange}
                                name="phoneNumber"
                                placeholder="Phone Number (Optional)"
                            />
                            <TextArea
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.name)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Inmate
              </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Inmates Already Signed Up</h1>
                        </Jumbotron>
                        {this.state.inmates.length ? (
                            <List>
                                {this.state.inmates.map(inmate => (
                                    <ListItem key={inmate._id}>
                                        <Link to={"/inmates/" + inmate._id}>
                                            <strong>{inmate.name}</strong>
                                        </Link>
                                        <DeleteBtn ariaLabel="delete inmate" onClick={() => this.deleteInmate(inmate._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Inmates;
