import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './StorageCard.css'; 

const data = [
  { label: 'Total Images', used: 32, total: '36,447', change: 32.40 },
  { label: 'Total Videos', used: 48, total: '53,406', change: -18.45 },
  { label: 'Total Documents', used: 89, total: '90,875', change: 20.34 },
  { label: 'Total Musics', used: 54, total: '63,076', change: 14.45 },
];

const StorageCard = () => {
  return (
    <Row className="mt-4 scrollable-containers">
      {data.map((item, index) => (
        <Col key={index} xs={12} md={6} lg={3} className='mt-2'>
          <Card className="storage-card">
            <Card.Body className="d-flex justify-content-between align-items-center flex-lg-column-reverse flex-xl-row">
              <div className="storage-info">
                <div className='text-secondary'>{item.label}</div>
                <h4>{item.total} GB</h4>
                <div className="used-info">
                  <span style={{color:item.change >= 0 ? '#30b25f' : '#f35959'}}>
                    {item.change >= 0 ? '↑' : '↓'} {item.change >= 0 ? '+' : '-'}{Math.abs(item.change)}% 
                  </span>
                  <span className='text-secondary'>last month</span>
                </div>
              </div>
              <div className="progress-bar-container">
                <CircularProgressbar
                  value={(item.used )}
                  text={`${item.used}%`}
                  styles={{
                    path: {
                      stroke: item.change >= 0 ? '#3f77fa' : '#ee0000',
                    },
                    text: {
                      fill: '#000',
                      fontSize: '16px',
                    },
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StorageCard;
