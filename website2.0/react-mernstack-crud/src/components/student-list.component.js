import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';
import API from '../config/environment';


export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get(API.BASE_URL + API.ALL_STUDENTS)
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Teacher</th>
            <th>Bus Number</th>
            <th>Class Room</th>
            <th>Students Grade</th>
            <th>Mode of transportation</th>
            <th>Parent 1</th>
            <th>Parent 2</th>
            <th>Car</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}