import React, { Component } from "react";
import ReactDOM from 'react-dom';
import history from '../../history';
import Modal from 'react-modal'
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem , Button } from "react-bootstrap"; 
import AddQuestionModal from "../AddQuestionModal/AddQuestionModal"


class AddQuestions extends Component{

    constructor(props){
        super(props);
        this.state={
            showQuestionModal:false
        };
        this.initialValue=2;
        this.numberOfOptions=[2,3,4];
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.handleAddGroup = this.handleAddGroup.bind(this);
        // this.handleAddGroupChange = this.handleAddGroupChange.bind(this);
    }

    componentDidMount(){
        if(!localStorage.getItem('user')){
            history.push('/');
        }
    }

    openModal = () =>{
        
        this.setState({ showQuestionModal: true});
    }

    closeModal =() => {
        this.setState({ showQuestionModal: false})
    }   

    logout(){
        localStorage.clear();
        history.push('');
    }

    handleSubmitQuestion = ()=>{
        this.setState({showQuestionModal:false})
    }

    render(){
        let closeQuestionModal = () => this.setState({ showQuestionModal: false });

        return (
            
        <div>
            <Navbar fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <Link to="/">Polling System</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavItem onClick={this.logout}>Logout</NavItem>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        <Button onClick={()=>{this.setState({showQuestionModal: true});}}>Add a new Question</Button>

        <AddQuestionModal  show={this.state.showQuestionModal} onHide={this.closeModal}/>

        </div>);
    }
}

export default AddQuestions;