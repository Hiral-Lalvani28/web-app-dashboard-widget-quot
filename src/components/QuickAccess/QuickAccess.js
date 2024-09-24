import React, { useRef, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import './QuickAccess.css';

const documents = [
  { id: 1, name: 'Document 1', icon: 'fas fa-file-pdf', type: 'PDF' },
  { id: 2, name: 'Document 2', icon: 'fas fa-file-excel', type: 'Excel' },
  { id: 3, name: 'Document 3', icon: 'fas fa-file-word', type: 'Word' },
  { id: 4, name: 'Document 4', icon: 'fas fa-file-alt', type: 'Text' },
  { id: 5, name: 'Document 5', icon: 'fas fa-file-powerpoint', type: 'PPT' },
  { id: 6, name: 'Document 6', icon: 'fas fa-file-archive', type: 'ZIP' },
  { id: 7, name: 'Document 7', icon: 'fas fa-file-image', type: 'Image' },
  { id: 8, name: 'Document 8', icon: 'fas fa-file-video', type: 'Video' },
];

const QuickAccess = () => {
  const scrollRef = useRef();

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e) => {
    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      scrollRef.current.removeEventListener('mousemove', handleMouseMove);
      scrollRef.current.removeEventListener('mouseup', handleMouseUp);
    };

    scrollRef.current.addEventListener('mousemove', handleMouseMove);
    scrollRef.current.addEventListener('mouseup', handleMouseUp);
    scrollRef.current.addEventListener('mouseleave', handleMouseUp);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
    <div className="quick-header">
      <h4>Quick Access</h4>
      <div className='view-all'>View All</div>
    </div>
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
      </div>
      {documents.length > 5 && (
        <Button variant="light" onClick={() => scroll(150)} className="scroll-button">
          <i className="fas fa-chevron-right"></i>
        </Button>
      )}
    </div>
    </>
  );
};

export default QuickAccess;