import React from 'react';
import { Navbar, Form, FormControl, Container,Nav} from 'react-bootstrap';
import StorageCard from '../../components/StorageCard/StorageCard';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import './DashboardWidget.css'; 
import NavBar from '../../components/NavBar/NavBars';

const DashboardWidget = () => {
  return (
    <Container>
      <NavBar/>
      <StorageCard />
      <QuickAccess />
    </Container>
  );
};

export default DashboardWidget;



