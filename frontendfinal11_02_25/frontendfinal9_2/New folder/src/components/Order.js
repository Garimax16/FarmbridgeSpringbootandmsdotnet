import React, { useState, useEffect } from 'react';
import OrderService from '../Api/OrderService';
import { useParams } from 'react-router-dom';
import NavibarB from './NaviBarB';
import { Footer } from './Footer';


const Order = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Styles object
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
            padding: '20px',
            width:'100%',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        header: {
            fontSize: '2rem',
            color: '#333',
            textAlign: 'center',
            marginBottom: '20px',
        },
        subheader: {
            fontSize: '1.5rem',
            color: '#555',
            marginBottom: '10px',
        },
        orderSummary: {
            marginBottom: '20px',
        },
        orderSummaryText: {
            fontSize: '1.2rem',
            color: '#666',
            margin: '5px 0',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        th: {
            padding: '10px',
            border: '1px solid #ddd',
            backgroundColor: '#007bff',
            color: 'white',
        },
        td: {
            padding: '10px',
            border: '1px solid #ddd',
            textAlign: 'left',
        },
        trEven: {
            backgroundColor: '#f2f2f2',
        },
        trHover: {
            backgroundColor: '#ddd',
        },
        loading: {
            fontSize: '1.5rem',
            textAlign: 'center',
            marginTop: '20px',
        },
        error: {
            color: 'red',
            fontSize: '1.2rem',
            textAlign: 'center',
            marginTop: '20px',
        },
    };

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await OrderService.getOrder(orderId);
                console.log(response.data);
                setOrder(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching order details');
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    // Loading and error states
    if (loading) return <div style={styles.loading}>Loading...</div>;
    if (error) return <div style={styles.error}>{error}</div>;

    return (
        <div style={{ margin: "0", padding: "0", display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={styles.container}>
            <NavibarB >Full-Width Header</NavibarB>
            <h2 style={styles.header}>Order Details</h2>
            <div style={styles.orderSummary}>
                <h3 style={styles.subheader}>Order ID: {orderId}</h3>
                <p style={styles.orderSummaryText}>Buyer: {order.buyer_name}</p>
                <p style={styles.orderSummaryText}>Total Amount: Rs.{order.totalAmount}</p>
                <p style={styles.orderSummaryText}>Order Date: {order.createdOn}</p>
            </div>

            <h3 style={styles.subheader}>Order Items</h3>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Crop Name</th>
                        <th style={styles.th}>Quantity</th>
                        <th style={styles.th}>Seller</th>
                        <th style={styles.th}>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {order.orderDetailsDTO.map((item, index) => (
                        <tr
                            key={item.id}
                            style={index % 2 === 0 ? styles.trEven : {}}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.trHover.backgroundColor)}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
                        >
                            <td style={styles.td}>{item.crop_name}</td>
                            <td style={styles.td}>{item.quantity}</td>
                            <td style={styles.td}>{item.farmer_name}</td>
                            <td style={styles.td}>{item.totalPrice}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer/>
        </div>
    );
};

export default Order;
