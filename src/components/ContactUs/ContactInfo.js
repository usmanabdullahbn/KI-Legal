import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import phone from "../asserts/phone.png";
import email from "../asserts/Email.png";
import website from "../asserts/Website.png";
import location from "../asserts/Location.png";

const ContactInfo = () => {
  const iconStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const textStyle = {
    fontFamily: "Amiri, serif",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "12px",
    color: "rgb(255, 255, 255)",
    textAlign: "center", // Center text horizontally
  };

  const linkStyle = {
    fontFamily: "Amiri, serif",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "12px",
    color: "rgb(255, 255, 255)",
    cursor: "pointer", // Change cursor on hover
    display: "block", // Make links block-level elements
    textDecoration: "none", // Remove underlines initially
    textAlign: "center", // Center text horizontally
    margin: "5px 0", // Add margin to separate links
  };

  return (
    <MDBContainer style={{marginTop: "75px" }}>
      <MDBRow>
        <MDBCol>
          <div style={{ textAlign: "center" }}>
            <img src={phone} style={iconStyle} />
            <p style={textStyle}>PHONE NUMBER</p>
            <a
              href="tel:021-35178228"
              target="_blank"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              021 - 35178228
            </a>
          </div>
        </MDBCol>
        <MDBCol>
          <div style={{ textAlign: "center" }}>
            <img src={email} style={iconStyle} />
            <p style={textStyle}>EMAIL</p>
            <a
              href="mailto:info@khosaiqballaw.com"
              target="_blank"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              info@khosaiqballaw.com
            </a>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{marginTop: "100px" }}>
        <MDBCol>
          <div style={{ textAlign: "center" }}>
            <img src={website} style={iconStyle} />
            <p style={textStyle}>WEBSITE</p>
            <a
              href="https://khosaiqballaw.com/"
              target="_blank"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              https://khosaiqballaw.com
            </a>
          </div>
        </MDBCol>
        <MDBCol>
          <div style={{ textAlign: "center", marginTop: "-12.5px"}}>
            <img src={location} style={iconStyle} />
            <p style={textStyle}>ADDRESS</p>
            <a
              href=" https://www.google.com/maps/dir/24.8693697,67.0822045/Khosa+%26+Iqbal+Law,+Clifton+Center,+Suite+419,+4th+Floor,+Block+5+Clifton,+Karachi,+Karachi+City,+Sindh+75600/@24.8482644,67.0239989,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33dc6a870b291:0x45e572dd43a3d954!2m2!1d67.0338927!2d24.8271845?entry=ttu"
              target="_blank"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              Suite #419, 4th Floor, Clifton Center, Karachi
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
