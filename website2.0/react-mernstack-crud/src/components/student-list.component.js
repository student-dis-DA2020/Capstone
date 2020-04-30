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
    return (
      <div className="table-wrapper">
        <h2 style={{ margin: 20 }}>
          Student List
        </h2>
        <Table striped bordered hover>

          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Teacher</th>
              <th>Bus Number</th>
              <th>Class Room</th>
              <th>Students Grade</th>
              <th>Transportation</th>
              <th>Gaurdian 1</th>
              <th>Gaurdian 2</th>
              <th>Car</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
      </div >);
  }
}