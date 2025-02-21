import { Table, Badge, Button } from 'react-bootstrap';
import { formatDate } from '../../utils/dateUtils';

const MessageList = ({ messages, onStatusChange }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {messages.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center">No messages found</td>
          </tr>
        ) : (
          messages.map((message) => (
            <tr key={message.id}>
              <td>{formatDate(message.createdAt)}</td>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.subject}</td>
              <td>{message.message}</td>
              <td>
                <Badge bg={message.status === 'NEW' ? 'danger' : 'success'}>
                  {message.status}
                </Badge>
              </td>
              <td>
                {message.status === 'NEW' ? (
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => onStatusChange(message.id, 'RESOLVED')}
                  >
                    Mark Resolved
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => onStatusChange(message.id, 'NEW')}
                  >
                    Mark as New
                  </Button>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default MessageList;