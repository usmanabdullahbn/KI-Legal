import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#555555",
        height: "76px",
      }}
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <p
              style={{
                display: "flex",
                // justifyContent:"center",
                // textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "25.6001px",
                color: "rgb(153, 153, 153)",
                marginTop: "30px",
                marginLeft: "50px",
              }}
            >
              © 2023 All rights reserved.
            </p>
          </MDBCol>

          <MDBCol>
         
            <div
              style={{
                display: "flex",
                marginTop: "30px",
                marginLeft: "300px",
              }}
            >
                 <a
                href="https://www.facebook.com/wakeelsahab8" 
                target="_blank" 
 
              >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%", // Makes it circular
                  border: "1px solid rgb(153, 153, 153)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  margin: "0 5px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#CBA557";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <i
                  className="fab fa-facebook"
                  style={{
                    color: "rgb(153, 153, 153)",
                    padding: "5px",
                    fontSize: "12.5px", // Adjust the icon size as needed
                  }}
                ></i>
              </div>
              </a>
              <a
                href="https://www.instagram.com/wakeelsahabpodcast" 
                target="_blank" 
 
              >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "1px solid rgb(153, 153, 153)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  margin: "0 5px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#CBA557";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <i
                  className="fab fa-instagram"
                  style={{
                    color: "rgb(153, 153, 153)",
                    padding: "5px",
                    fontSize: "12.5px",
                  }}
                ></i>
              </div>
              </a>
              
              <a
                href="https://www.youtube.com/@WakeelSahab" 
                target="_blank" 
 
              >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "1px solid rgb(153, 153, 153)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  margin: "0 5px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#CBA557";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <i
                  className="fab fa-youtube"
                  style={{
                    color: "rgb(153, 153, 153)",
                    padding: "5px",
                    fontSize: "12.5px",
                  }}
                ></i>
              </div>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Footer;
