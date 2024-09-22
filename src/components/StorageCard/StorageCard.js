import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './StorageCard.css'; 

const data = [
  { label: 'Images', used: 120, total: 200, change: 5 },
  { label: 'Videos', used: 80, total: 100, change: -10 },
  { label: 'Documents', used: 30, total: 50, change: 0 },
  { label: 'Music', used: 60, total: 80, change: 15 },
];

const StorageCard = () => {
  return (
    <Row className="mt-4">
      {data.map((item, index) => (
        <Col key={index} md={3} className="mb-4">
          <Card className="storage-card">
            <Card.Body className="text-center">
              <h5>{item.label}</h5>
              <CircularProgressbar
                value={(item.used / item.total) * 100}
                text={`${item.used} GB`}
                styles={{
                  path: {
                    stroke: item.change >= 0 ? '#4caf50' : '#f44336',
                  },
                  text: {
                    fill: '#000',
                    fontSize: '16px',
                  },
                }}
              />
              <p>Total: {item.total} GB</p>
              <p className={item.change >= 0 ? 'text-success' : 'text-danger'}>
                {item.change >= 0 ? `+${item.change}%` : `${item.change}%`} from last month
              </p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StorageCard;



