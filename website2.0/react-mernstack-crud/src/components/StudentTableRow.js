import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';



export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        //const guardian_1 = this.props.obj.guardians[1];
        //console.log(guardian_1)
        //console.log(this.props.obj.guardians)
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.teacher}</td>
                <td>{this.props.obj.bus}</td>
                <td>{this.props.obj.room}</td>
                <td>{this.props.obj.grade}</td>
                <td>{this.props.obj.mode}</td>
                <td>{this.props.obj.guardians[0]}</td>
                <td>{this.props.obj.guardians[1]}</td>
                <td>{this.props.obj.cars[0]}</td>
                <td>{this.props.obj.email}</td>
            </tr>
        );
    }
}