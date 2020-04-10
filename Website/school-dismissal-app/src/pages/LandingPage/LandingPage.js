import React, { Component } from 'react';
import Students from '../../components/Students/Students'
import { Container, Button, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PageLayout from '../PageLayout/PageLayout';
import Add_student from '../../components/Students/Add_student';


class LandingPage extends Component {


  
    constructor(props) {
        super(props);
        this.state = {
        isAddstudent: false,
        error: null,
        response: {},
        students: [],
        isEditstudent: false
        }
      
    }

    
    onCreate() {
        this.setState({ isAddstudent: true });
        }




    render() {


        let studentForm;
        if(this.state.isAddstudent || this.state.isEditstudent) {
          studentForm = <Add_student onFormSubmit={this.onFormSubmit} student={this.state.students} />
        }






        return (

  
        <div className="App">
        <Container>
        <PageLayout>
        <h1 style={{textAlign:'center'}}>React Tutorial</h1>
          {!this.state.isAddstudent && <Button variant="primary" onClick={() => this.onCreate()}>Add student</Button>}
          {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
          {!this.state.isAddstudent && <studentList editstudent={this.editstudent}/>}
          { studentForm }
          {this.state.error && <div>Error: {this.state.error.message}</div>}
                <Students students={this.state.students} />
          </PageLayout>
        </Container>

        
      </div>



        );
    }

    componentDidMount() {
        fetch('https://ancient-bayou-94629.herokuapp.com/all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ students: data })
            })
            .catch(console.log)
    }



}


export default withRouter(LandingPage);