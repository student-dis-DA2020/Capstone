import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';


class Add_student extends React.Component {
    constructor(props) {
      super(props);
      this.initialState = {
          _id: '',
          name: '', 
          guardians: '',
          grade: '',
          room: '',
          teacher: '',
          cars: '',
          position: '',
          bus: '',
          mode: '',
          waiting: ''
      }
    
      if(props.product){
        this.state = props.product
      } else {
        this.state = this.initialState;
      }
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        })
      }



      handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
      }



      render() {

        let pageTitle;
        if(this.state.id) {
          pageTitle = <h2>Edit student info</h2>
        } else {
          pageTitle = <h2>Add student</h2>
        }

        return(
            <div>
              {pageTitle}
              <Row>
                <Col sm={6}>
                  <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="name">
                      <Form.Label>Student name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="studentname"/>
                    </Form.Group>

                    <Form.Group controlId="gaurdians">
                      <Form.Label>Gaurdians</Form.Label>
                      <Form.Control
                        type="text"
                        name="gaurdians"
                        value={this.state.gaurdians[0]}
                        onChange={this.handleChange}
                        placeholder="gaurdians" />
                    </Form.Group>

                    <Form.Group controlId="grade">
                      <Form.Label>grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="grade"
                        value={this.state.grade}
                        onChange={this.handleChange}
                        placeholder="grade" />
                    </Form.Group>

                    <Form.Group controlId="room">
                      <Form.Label>room</Form.Label>
                      <Form.Control
                        type="text"
                        name="room"
                        value={this.state.room}
                        onChange={this.handleChange}
                        placeholder="room" />
                    </Form.Group>

                    <Form.Group controlId="teacher">
                      <Form.Label>teacher</Form.Label>
                      <Form.Control
                        type="text"
                        name="teacher"
                        value={this.state.teacher}
                        onChange={this.handleChange}
                        placeholder="teacher" />
                    </Form.Group>

                    <Form.Group controlId="cars">
                      <Form.Label>grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="cars"
                        value={this.state.cars[0]}
                        onChange={this.handleChange}
                        placeholder="cars" />
                    </Form.Group>

                    <Form.Group controlId="position">
                      <Form.Label>grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="position"
                        value={this.state.position}
                        onChange={this.handleChange}
                        placeholder="position" />
                    </Form.Group>

                    <Form.Group controlId="bus">
                      <Form.Label>grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="bus"
                        value={this.state.bus}
                        onChange={this.handleChange}
                        placeholder="bus" />
                    </Form.Group>

                    <Form.Group controlId="mode">
                      <Form.Label>grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="mode"
                        value={this.state.mode}
                        onChange={this.handleChange}
                        placeholder="mode" />
                    </Form.Group>

                      <Form.Group controlId="position">
                      <Form.Label>grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="position"
                        value={this.state.position}
                        onChange={this.handleChange}
                        placeholder="position" />
                    </Form.Group>

                    
                    <Form.Group controlId="waiting">
                      <Form.Label>grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="waiting"
                        value={this.state.waiting}
                        onChange={this.handleChange}
                        placeholder="waiting" />
                    </Form.Group>


                    <Form.Group>
                      <Form.Control type="hidden" name="_id" value={this.state._id} />
                      <Button variant="success" type="submit">Save</Button>
                    </Form.Group>

                  </Form>
                </Col>
              </Row>
            </div>
          )
        }


    }



    export default Add_student;