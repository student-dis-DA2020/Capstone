import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import API from '../config/environment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";


export default class UpdateStudent extends Component {

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
      received: [],
      isModalOpen: false,
    }

    this.state = React.createRef();

  }

  componentDidMount() {
    axios.get(API.BASE_URL + API.ALL_STUDENTS)
      .then(res => {
        this.setState({
          received: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })

  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  onSubmit = (e) => {

    console.log('on submit pressed')
    e.preventDefault()

    var id = e.target.elements._id.value;
    for (var i = 0; i < this.state.received.length; i++) {

      var temp = this.state.received[i];

      if (temp._id === id) {

        var studentObject = {
          _id: temp._id,
          name: e.target.elements.Name.value === '' ? temp.name : e.target.elements.Name.value,
          teacher: e.target.elements.teacher.value === '' ? temp.teacher : e.target.elements.teacher.value,
          bus: parseInt(e.target.elements.bus.value === '' ? temp.bus : e.target.elements.bus.value),
          room: parseInt(e.target.elements.room.value === '' ? temp.room : e.target.elements.room.value),
          grade: parseInt(e.target.elements.grade.value === '' ? temp.grade : e.target.elements.grade.value),
          mode: e.target.elements.mode.value === '' ? temp.mode : e.target.elements.mode.value,
          guardians: e.target.elements.guardian1.value === '' ? temp.guardians : [e.target.elements.guardian2.value, e.target.elements.guardian1.value],
          cars: e.target.elements.cars.value === '' ? temp.cars : [e.target.elements.cars.value],
          position: parseInt(e.target.elements.position.value === '' ? temp.position : e.target.elements.position.value),
          waiting: e.target.elements.waiting.value === '' ? temp.waiting : e.target.elements.waiting.value,
          Email: e.target.elements.Email.value === '' ? temp.email : e.target.elements.Email.value
        };





        axios.post(API.BASE_URL + '/all', studentObject)
          .then(res => console.log(res.data));


      }
      else {
        console.log("not found")
      }
    }



  }





  render() {
    const content = 'Success: The student data was updated in the database.';
    return (<div className="form-wrapper">
      <h2 style={{ margin: 20 }}>
        Update Student Data
        </h2>
      <p> To update a students information, please enter in the students ID and other data you wish to update.</p>
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

        <Form.Group controlId="_id">
          <Form.Label> Student ID *</Form.Label>
          <Form.Control
            type="number"
            name="_id"
            placeholder="Enter Student ID" />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Student name</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            placeholder="Update Student Name" />
        </Form.Group>

        <Form.Group controlId="teacher">
          <Form.Label>Teacher</Form.Label>
          <Form.Control
            type="text"
            name="teacher"
            placeholder="Update Teacher Name" />
        </Form.Group>

        <Form.Group controlId="bus">
          <Form.Label>Bus</Form.Label>
          <Form.Control
            type="text"
            name="bus"
            placeholder="Update Bus" />
        </Form.Group>

        <Form.Group controlId="room">
          <Form.Label>Class Room</Form.Label>
          <Form.Control
            type="number"
            name="room"
            placeholder="Update Room Number" />
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="number"
            name="grade"
            placeholder="Update Grade" />
        </Form.Group>

        <Form.Group controlId="mode">
          <Form.Label>Mode of Transportation</Form.Label>
          <Form.Control
            type="text"
            name="mode"
            placeholder="Update Mode" />
        </Form.Group>

        <Form.Group controlId="guardian1">
          <Form.Label>First Gaurdian</Form.Label>
          <Form.Control
            type="text"
            name="guardian1"
            placeholder="Update First Guardian Name" />
        </Form.Group>

        <Form.Group controlId="guardian2">
          <Form.Label>Second Gaurdian</Form.Label>
          <Form.Control
            type="text"
            name="guardian2"
            placeholder="Update Second Guardian Name" />
        </Form.Group>

        <Form.Group controlId="cars">
          <Form.Label>Cars</Form.Label>
          <Form.Control
            type="text"
            name="cars"
            placeholder="Update Cars" />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="number"
            name="position"
            placeholder="Update Position" />
        </Form.Group>

        <Form.Group controlId="waiting">
          <Form.Label>Waiting</Form.Label>
          <Form.Control
            type="text"
            name="waiting"
            placeholder="Update Waiting" />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="Email"
            name="Email"
            placeholder="Update Email Addressl" />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" onClick={this.openModal}>
          Update Student
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