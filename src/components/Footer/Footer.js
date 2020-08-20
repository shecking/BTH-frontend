import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import '../../index.scss'

// <Nav.Item>
//   <Nav.Link className='footer-link' href="#">Link</Nav.Link>
// </Nav.Item>

const footerItems = (
  <div className='container'>
    <div className='footer-items'>
      <p className='footer-copyright'>© Copyright Steven Hecking 2020</p>
      <a className='footer-link' href='https://github.com/shecking'>My GitHub</a>
      <a className='footer-link' href='https://www.linkedin.com/in/stevenhecking/'>My LinkedIn</a>
    </div>
  </div>
)

const Footer = ({ user }) => (
  <Navbar fixed='bottom' bg="dark" variant="dark" expand="md">
    <Nav className='footer'>
      { footerItems }
    </Nav>
  </Navbar>
)

export default Footer
