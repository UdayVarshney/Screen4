
import './App.css';
import SideNavBar from './components/Navbar.js';
import TopHeader from './components/Header.js';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import * as React from 'react';  
import Button from '@mui/material/Button';  




function App() {
  return (
    <div className="App">
       <SideNavBar></SideNavBar>
       <TopHeader></TopHeader>

       <div className="flexbox1">
      <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        width:1100,
        height:13, 
        backgroundColor: 'white',
        borderRadius:"11px"
      }}>

<div className='Requested1'>
            <h3>Requested by</h3>
            <h4>Dr. Roger Lenon,MD</h4>
          </div>
          
          <div className='Services1'>
            <h3>Services</h3>
            <p>- CPT 92227 x 2 visits Annualy</p>
            <p>- CPT 99211 x 2 visits Annualy</p>
          </div>

         

          <div className='icon1'>
          <h4>Pending</h4>
          <PendingActionsIcon />
          </div>

        

          <div className='button1'>
          <Button variant="contained">Approve</Button>  
          </div>

         

          <div className='text1'>
            <h3>Request ID:200005</h3>
            <h4>Date :1/24/2023</h4>
            <h4>Medium Urgency</h4>
          </div>

          <div className='view1'>
            <u>
              <h4>View Details</h4>
            </u>
          </div>
          
          
          
          </div>
          </div>

          <div className="flexbox2">
      <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        width:1100,
        height:13, 
        backgroundColor: 'white',
        borderRadius:"11px"
      }}>
          
          <div className='Services2'>
            <h3>Services</h3>
            <p>- CPT 92227 x 2 visits Annualy</p>
            <p>- CPT 99211 x 1 visit Annualy</p>
          </div>

          <div className='Requested2'>
            <h3>Requested by</h3>
            <h4>Dr. Roger Lenon,MD</h4>
          </div>

        <div className='icon2'>
        <h4>Pending</h4>
        <PendingActionsIcon />
         </div>

         <div className='button2'>
          <Button variant="contained">Approve</Button>  
          </div>

          <div className='view2'>
            <u>
              <h4>View Details</h4>
            </u>
          </div>

         <div className='text2'>
            <h3>Request ID:200004</h3>
            <h4>Date :1/19/2023</h4>
            <h4>Medium Urgency</h4>

          </div>
        
        
          
        </div>
        
      </div>
      <div className="flexbox3">
      <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        width:1100,
        height:13, 
        backgroundColor: 'white',
        borderRadius:"11px"
      }}>
          <div className='Services3'>
            <h3>Services</h3>
            <p>- CPT 92227 x 2 visits Annualy</p>
           
          </div>

          <div className='Requested3'>
            <h3>Requested by</h3>
            <h4>Dr. Roger Lenon,MD</h4>
          </div>

        <div className='icon3'>
        <h4>Accepted</h4>
        <AssignmentTurnedInIcon />
         </div>

         <div className='view3'>
            <u>
              <h4>View Details</h4>
            </u>
          </div>

         <div className='text3'>
            <h3>Request ID:200003</h3>
            <h4>Date :1/15/2023</h4>
            <h4>Medium Urgency</h4>
          </div>

         

        </div>
        </div>

        <div className="flexbox4">
      <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        width:1100,
        height:13, 
        backgroundColor: 'white',
        borderRadius:"11px"
      }}>
        <div className='Services4'>
            <h3>Services</h3>
            <p>- CPT 99091 x 2 visits One time</p>
            <p>- CPT 99091 x 1 visit One time</p>
          </div>

          <div className='Requested4'>
            <h3>Requested by</h3>
            <h4>Dr. Roger Lenon,MD</h4>
          </div>

        <div className='icon4'>
        <h4>Accepted</h4>
        <AssignmentTurnedInIcon />
         </div>

         <div className='view4'>
            <u>
              <h4>View Details</h4>
            </u>
          </div>

         <div className='text4'>
            <h3>Request ID:200002</h3>
            <h4>Date :1/14/2023</h4>
            <h4>Medium Urgency</h4>
          </div>

        </div>
        </div>
       
        
       
     
    </div>
  );
}

export default App;
