

import { Row, Col, Form, Button } from 'react-bootstrap';

const MessageFilters = ({ filters, onFilterChange, onReset }) => {
  return (
    <Row className="mb-4">
      <Col md={3}>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Select 
            value={filters.status}
            onChange={(e) => onFilterChange('status', e.target.value)}
          >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="resolved">Resolved</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={3}>
        <Form.Group>
          <Form.Label>Date Range</Form.Label>
          <Form.Select 
            value={filters.dateRange}
            onChange={(e) => onFilterChange('dateRange', e.target.value)}
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Search by name or email"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col md={2} className="d-flex align-items-end">
        <Button 
          variant="secondary" 
          className="w-100"
          onClick={onReset}
        >
          Reset Filters
        </Button>
      </Col>
    </Row>
  );
};

export default MessageFilters;