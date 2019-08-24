import React, { Component } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import API from "../utils/API";
import { InputFirstName, InputLastName, InputEmail, FormBtn} from "../components/Form";



class FormPage extends Component {
    constructor() {
        super()
        this.state = {
            appointments: [],
            firstName: "",
            lastName: "",
            email: "",
            time: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.loadAppoitment = this.loadAppoitment.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() {
        this.loadAppoitment();
    }


    loadAppoitment = () => {
        API.getAppoitnemt().then(
            res => this.setState({ appointments: res.data, firstName: "", lastName: "", email: "" })

        )
        // alert(`Your appoitment has been booked ${this.state.firstName} ${this.state.lastName}!`)

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
            API.saveAppointment({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            })
            // .then(res => this.loadAppoitment()).catch(err => console.log(err));


        }

    }


    render() {
        return (
            <div>
                <br />
            <Form>
              <InputFirstName
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <InputLastName
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <InputEmail
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (Optional)"
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName)}
                onClick={this.handleFormSubmit}
              >
                Submit Appointment
              </FormBtn>
            </Form>
               
            </div>
        )
    }
}


export default FormPage;