import React, { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import './QuickAccess.css';

const documents = [
  { id: 1, name: 'Document 1', icon: 'fas fa-file-pdf', type: 'PDF' },
  { id: 2, name: 'Document 2', icon: 'fas fa-file-excel', type: 'Excel' },
  { id: 3, name: 'Document 3', icon: 'fas fa-file-word', type: 'Word' },
  { id: 4, name: 'Document 4', icon: 'fas fa-file-alt', type: 'Text' },
  { id: 5, name: 'Document 5', icon: 'fas fa-file-powerpoint', type: 'PPT' },
  { id: 6, name: 'Document 6', icon: 'fas fa-file-archive', type: 'ZIP' },
];

const QuickAccess = () => {
  const scrollRef = useRef();

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="quick-access">
      <div className="scrollable-container" ref={scrollRef}>
        {documents.map(doc => (
          <Card key={doc.id} className="document-card">
            <Card.Body className="text-center">
              <i className={`${doc.icon} document-icon`} style={{ fontSize: '40px' }}></i>
              <p>{doc.name}</p>
            </Card.Body>
          </Card>
        ))}
        {/* <Button variant="light" onClick={() => scroll(150)} className="scroll-button">
          <i className="fas fa-chevron-right"></i>
        </Button> */}
      </div>
      
    </div>
  );
};

export default QuickAccess;






