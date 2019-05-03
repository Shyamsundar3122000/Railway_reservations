import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";

class PassengerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  handleNameChange = (e) => {
      this.setState({
          name: e.target.value
      })
      this.props.addDetails(this.props.index,{
        name: e.target.value,
        age: this.state.age
      })
  };

  handleAgeChange = (e) => {
    this.setState({
        age: Number(e.target.value)
    })
    this.props.addDetails(this.props.index,{
        name: this.state.name,
        age: e.target.value
      })
  };

  render() {
    let index = this.props.index;
    return (
      <div>
          <h5 style={{alignSelf:"center"}}> Passenger {index + 1} Details </h5>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Form.Row style={{ width: "100%" }}>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control required={true} style={{minWidth:"400px"}} placeholder="Name" onChange={this.handleNameChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Age</Form.Label>
                <Form.Control required={true} type="number" placeholder="Age" onChange={this.handleAgeChange} />
              </Form.Group>
            </Form.Row>
          </Row>
      </div>
    );
  }
}

export default PassengerDetails;
