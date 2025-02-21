import {useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Footer } from "../components/Footer";

export function OrderMgmt(){
  const adminName = "Hello, Garima Khasdeo";
    return (
    <div>
      <h3 className='admindashheading'>Orders DashBoard</h3>
        <div className="ordersmgmt table-responsive">
        
        
        <Table striped bordered hover className="OrdersList">
              <thead>
                <tr>
                    <th>Id</th>
                  <th>CustomerId</th>
                  <th>FarmerId</th>
                  <th>Actions</th>
                  <th>Status</th>
                </tr>
                
              </thead>
             
              <tbody>
              
                  <tr >
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>pending</td>
                    <td ><button id="s-view1">View</button>
                    <button id="s-delete">Delete</button></td>
                  </tr>
                  
                  
               
              </tbody>
            </Table>

        
        
      
        </div>
        <Footer/>
        </div>
    );
    }

    const headerStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor:'#2e7d32',
      height: "60px",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
    };
    
    const headerTitleStyle = {
      color: "white",
      textAlign: "center",
      flex: 1,
      fontSize: "20px",
      margin: "0",
    };
    
    const adminNameStyle = {
      color: "white",
      fontSize: "18px",
      margin: "0",
    };