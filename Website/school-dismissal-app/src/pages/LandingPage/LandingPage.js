import React, { Component } from 'react';
import Students from '../../components/Students/Students'
import { withRouter } from 'react-router-dom';
import PageLayout from '../PageLayout/PageLayout';


class LandingPage extends Component {

    state = {
        students: []
    };


    render() {
        return (
            <PageLayout>
                <Students students={this.state.students} />
            </PageLayout>
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