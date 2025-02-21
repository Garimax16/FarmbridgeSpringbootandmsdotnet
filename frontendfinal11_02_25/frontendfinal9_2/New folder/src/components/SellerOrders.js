import Table from 'react-bootstrap/Table';
import { Footer } from "../components/Footer";

export function SellerOrders(){
    return (
    
        <div className="myOrders-s">
        <div  id="banner"><h4>My Orders</h4>
       </div>
        <Table className="myOrdersList  table-responsive" >
              <thead>
                <tr>
                    <th>Id</th>
                  <th>Date</th>
                  <th>Action</th>
                  
                </tr>
                
              </thead>
             
              <tbody>
              
                  <tr >
                    <td>1</td>
                    <td>22-07-2024</td>
                    <td><button id="s-view">View</button></td>
                  </tr>
                  
                  <tr >
                    <td>2</td>
                    <td>22-08-2024</td>
                    <td><button id="s-view">View</button></td>
                  </tr>
               
              </tbody>
            </Table>
            
        </div>
       
    );
}