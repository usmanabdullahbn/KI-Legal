import React from 'react'
import img from "../asserts/bgimg.jpg"
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import lineHori from "../asserts/Horizontal line.png";
import AppointmentForm from './form';
import ContactInfo from './ContactInfo';

const ContactUs = () => {
  return (
    <div>
        <img
      src={img}
      alt="Background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover", // Adjust as needed
        zIndex: -5, // Place the image behind other content
        filter: "brightness(50%)", // Adjust the brightness value as needed
      }}
    />
    <div style={{
        backgroundColor: "transparent",
        width: "100vw",
        height: "100vh",
        paddingTop: "30px",
    }}>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center">
            <h2
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "44px",
                color: "#FFFFFF",
              }}
            >
              Contact Us
            </h2>
            <img src={lineHori} />
          </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol><ContactInfo /></MDBCol>
            <MDBCol><AppointmentForm /></MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
    </div>
  )
}

export default ContactUs