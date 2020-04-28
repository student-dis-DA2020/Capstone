import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';
import API from '../config/environment';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';




export default class DeleteStudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      _id: ''
    };
    this.state = React.createRef();
  }


  onSubmit = (e) => {
    console.log('on submit pressed')
    e.preventDefault()
    //console.log( e.target.elements._id.value)
    var id = e.target.elements._id.value
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.delete(proxyurl + API.BASE_URL + `/all/${id}`)
      .then(res => console.log(res.data));



  }

  render() {
    return (<div className="form-wrapper">
      <h2 style={{ margin: 20 }}>
        Delete Student
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

        <Form.Group controlId="_id">
          <Form.Label> Student ID </Form.Label>
          <Form.Control
            type="number"
            name="_id"
            placeholder="Enter Student ID" />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Delete Student
      </Button>
      </Form>
    </div>);
  }
}