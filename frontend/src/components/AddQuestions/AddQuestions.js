import React, { Component } from "react";
import ReactDOM from 'react-dom';
import history from '../../history';
import Modal from 'react-modal'
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem , Button } from "react-bootstrap"; 


class AddQuestions extends Component{

    constructor(props){
        super(props);
        this.state={
            isOpen:false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount(){
        if(!localStorage.getItem('user')){
            history.push('/');
        }
    }

    openModal = () =>{
        
        this.setState({ isOpen: true});
    }

    closeModal =() => {
        this.setState({ isOpen: false})
    }   

    logout(){
        localStorage.clear();
        history.push('');
    }

    render(){


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

        <Button onClick={this.openModal}>Add a new Question</Button>    
             
            <Modal
                    id="Add_Question_Modal"
                    isOpen={this.state.isOpen}
                    contentLabel="Modal_Label1"
                    shouldCloseOnOverlayClick={true}
                    closeTimeoutMS={150}
                    onRequestClose={this.closeModal}
                    aria={{
                        labelledby: "heading",
                        describedby: "fulldescription"
                      }}
                    className="firmModal"
                >   
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:'#6e1b43',color:'#f1f1f1'}}>
                            <h1 id="heading" style={{textAlign:'left'}}> New Group </h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label for="addedFirm" style={{marginRight: '10px'}}>Group Name </label>
                                <input type="text" placeholder="Enter Group Name" name="addedGroup" value={this.state.addedGroup} onChange={this.handleAddGroupChange}/> 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.closeModal}> Close </button>
                            <button type="button" className="btn btn-primary" onClick={this.handleAddGroup}> Add Group </button>
                        </div>
                    </div>
                </Modal>

        </div>);
    }
}

export default AddQuestions;