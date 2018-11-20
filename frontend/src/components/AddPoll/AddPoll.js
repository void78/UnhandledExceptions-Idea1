import React, { Component } from "react";
import ReactDOM from 'react-dom';
import history from '../../history';

import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem , Button } from "react-bootstrap"; 


class AddPoll extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(!localStorage.getItem('user')){
            history.push('/');
        }
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
        
            
            
        </div>);
    }
}

export default AddPoll