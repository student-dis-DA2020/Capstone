import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import API from '../config/environment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up state
    this.state = {
      _id: '',
      Name: '',
      teacher: '',
      bus: '',
      room: '',
      grade: '',
      mode: '',
      guardian1: '',
      guardian2: '',
      cars: '',
      position: '',
      email: '',
      isModalOpen: false
    }

    this.state = React.createRef();

  }


  onSubmit = (e) => {
    console.log('on submit pressed')
    e.preventDefault()

    var studentObject = {
      _id: e.target.elements._id.value,
      name: e.target.elements.Name.value,
      teacher: e.target.elements.teacher.value,
      bus: parseInt(e.target.elements.bus.value),
      room: parseInt(e.target.elements.room.value),
      grade: parseInt(e.target.elements.grade.value),
      mode: e.target.elements.mode.value,
      guardians: [e.target.elements.guardian2.value, e.target.elements.guardian1.value],
      cars: [e.target.elements.cars.value],
      position: parseInt(e.target.elements.position.value),
      waiting: e.target.elements.waiting.value,
      Email: e.target.elements.Email.value

    };


    axios.post(API.BASE_URL + '/all', studentObject)
      .then(res => console.log(res.data));

  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };




  render() {
    const content = 'Success: The student data was added to the database.';
    return (

      <div className="form-wrapper">
        <h2 style={{ margin: 20 }}>
          Create New Student
        </h2>
        <Form onSubmit={this.onSubmit}
          style={{
            width: 600,
            marginLeft: 265,
            marginTop: 10,
            position: 'absolute',
            fontSize: 18,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>

          <Form.Group controlId="_id" >
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              type="number"
              name="_id"
              placeholder="Enter Student ID"
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              placeholder="Enter Student Name" />
          </Form.Group>

          <Form.Group controlId="teacher">
            <Form.Label>Teacher</Form.Label>
            <Form.Control
              type="text"
              name="teacher"
              placeholder="Enter Teacher Name" />
          </Form.Group>

          <Form.Group controlId="bus">
            <Form.Label>Bus</Form.Label>
            <Form.Control
              type="text"
              name="bus"
              placeholder="Enter Bus" />
          </Form.Group>

          <Form.Group controlId="room">
            <Form.Label>Class Room</Form.Label>
            <Form.Control
              type="number"
              name="room"
              placeholder="Enter Room Number" />
          </Form.Group>

          <Form.Group controlId="grade">
            <Form.Label>Grade</Form.Label>
            <Form.Control
              type="number"
              name="grade"
              placeholder="Enter Grade" />
          </Form.Group>

          <Form.Group controlId="mode">
            <Form.Label>Mode of Transportation</Form.Label>
            <Form.Control
              type="text"
              name="mode"
              placeholder="Enter Mode" />
          </Form.Group>

          <Form.Group controlId="guardian1">
            <Form.Label>First Gaurdian</Form.Label>
            <Form.Control
              type="text"
              name="guardian1"
              placeholder="Enter First Guardian Name" />
          </Form.Group>

          <Form.Group controlId="guardian2">
            <Form.Label>Second Gaurdian</Form.Label>
            <Form.Control
              type="text"
              name="guardian2"
              placeholder="Enter Second Guardian Name" />
          </Form.Group>

          <Form.Group controlId="cars">
            <Form.Label>Cars</Form.Label>
            <Form.Control
              type="text"
              name="cars"
              placeholder="Cars" />
          </Form.Group>

          <Form.Group controlId="position">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="number"
              name="position"
              placeholder="Position" />
          </Form.Group>

          <Form.Group controlId="waiting" >
            <Form.Label>Waiting</Form.Label>
            <Form.Control
              type="text"
              name="waiting"
              placeholder="Waiting" />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="Email"
              name="Email"
              placeholder="Enter Email Address" />
          </Form.Group>

          <Button variant="danger" size="md" block="block" type="submit" onClick={this.openModal}>
            Create Student
        </Button>
        </Form>

        <Dialog
          open={this.state.isModalOpen}
          onClose={() => this.setState({
            isModalOpen: false,
          })}
        >
          <div style={{ padding: 10 }}>
            {content}
          </div>
          <DialogActions>
            <Button onClick={() => this.setState({
              isModalOpen: false,
            })} color="primary" autoFocus>
              Close
                  </Button>
          </DialogActions>
        </Dialog>
      </div>);
  }
}