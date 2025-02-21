import { Row, Col } from 'react-bootstrap';

const AdminHeader = ({ totalMessages, newMessages }) => {
  return (
    <Row className="mb-4">
      <Col>
        <h1>Customer Support Dashboard</h1>
        <p className="text-muted">
          Total Messages: {totalMessages} | New Messages: {newMessages}
        </p>
      </Col>
    </Row>
  );
};

export default AdminHeader;