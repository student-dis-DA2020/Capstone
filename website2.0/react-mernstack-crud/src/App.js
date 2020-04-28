import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import UpdateStudent from "./components/update-student.component";
import DeleteStudent from "./components/delete-student.component";

function App() {
  return (
    <Router>
      <div className="App" >
        <div style={{ backgroundColor: "#0091EA", paddingBottom: 10 }}>
          <div style={{
            align: 'center',
          }}>
            < h2 style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              margin: 20,
              display: 'inline-block',
              // paddingRight: 20,
            }}>
              School Dismissal App
      </h2>
            <DropdownButton id="dropdown-basic-button" title="Menu" variant="primary" size="lg" style={{
              display: 'inline-block', position: 'absolute', top: 20, right: 30
            }} >
              <Dropdown.Item href="/create-student">Create Student</Dropdown.Item>
              <Dropdown.Item href="/update-student">Update Student</Dropdown.Item>
              <Dropdown.Item href="/delete-student">Delete Student</Dropdown.Item>
              <Dropdown.Item href="/student-list">Student List</Dropdown.Item>
            </DropdownButton>
          </div>





          {/* <div style={{ display: 'flex', alignItems: 'center' }}>


          <Nav className="justify-content-end" style={{ alignItems: 'center' }}>
            <Nav>
              <Link to={"/create-student"} className="nav-link" style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                padding: '6px 12px',
                fontWeight: 'bold',
              }}>
                Create Student
                </Link>
            </Nav>

            <Nav>
              <Link to={"/update-student"} className="nav-link" style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                padding: '6px 12px',
                fontWeight: 'bold',
              }}>
                Update Student
                </Link>
            </Nav>

            <Nav>
              <Link to={"/delete-student"} className="nav-link" style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                padding: '6px 12px',
                fontWeight: 'bold',
              }}>
                Delete Student
                </Link>
            </Nav>

            <Nav>
              <Link to={"/student-list"} className="nav-link" style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                padding: '6px 12px',
                fontWeight: 'bold',
              }}>
                Student List
                </Link>
            </Nav>
          </Nav>



        </div> */}
          {/* </Navbar> */}
        </div>


        <Container style={{ padding: 10 }}>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={CreateStudent} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/edit-student/:id" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />
                  <Route path="/update-student" component={UpdateStudent} />
                  <Route path="/delete-student" component={DeleteStudent} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    </Router >);
}

export default App;