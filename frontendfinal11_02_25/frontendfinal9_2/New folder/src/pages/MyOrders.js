import React, { useState, useEffect } from 'react';
import OrderService from '../Api/OrderService';
import { Link } from 'react-router-dom';
import NavibarB from '../components/NaviBarB';
import { Footer } from '../components/Footer';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Styles object
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
            padding: '20px',
            width: '100%',
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
        orderList: {
            marginTop: '20px',
        },
        orderCard: {
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        orderSummary: {
            fontSize: '1.1rem',
            color: '#555',
            marginBottom: '10px',
        },
        link: {
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 'bold',
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
        const fetchOrders = async () => {
            try {
                const response = await OrderService.getOrdersByBuyer();
                console.log(response.data);
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching orders');
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    // Loading and error states
    if (loading) return <div style={styles.loading}>Loading...</div>;
    if (error) return <div style={styles.error}>{error}</div>;

    return (
        <div style={{ margin: "0", padding: "0", display: "flex", flexDirection: "column", height: "100vh" }}>
            <div style={styles.container}>
                <NavibarB >Full-Width Header</NavibarB>
                <h2 style={styles.header}>My Orders</h2>

                {orders.length === 0 ? (
                    <div style={styles.error}>You have no orders yet.</div>
                ) : (
                    <div style={styles.orderList}>
                        {orders.map((order) => (
                            <div key={order.id} style={styles.orderCard}>
                                <div style={styles.orderSummary}>
                                    <strong>Order ID:</strong> {order.id} <br />
                                    <strong>Total Amount:</strong> Rs.{order.totalAmount} <br />
                                    <strong>Order Date:</strong> {order.createdOn} <br />
                                    <Link to={`/order/${order.id}`} style={styles.link}>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyOrders;
