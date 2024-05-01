import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import lineHori from "../asserts/Horizontal line.png";
import imgExpertise from "../asserts/expertise img.png"
import img from "../asserts/exper.png";

const Expertise = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5F7F8",
      }}
    >
      <MDBContainer style={{ width: "100vww", margin: 0, padding: 0 }}>
        <MDBRow>
          <MDBCol style={{ width: "60vw" }}>
            <div
              style={{
                // height: "100vh",
                fontFamily: "Poppins",
                width: "auto",
                marginLeft: "100px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Our Expertise</h2>
              <img style={{ margin: "0 2px" }} src={lineHori} />
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  color: "rgb(36, 36, 36)",
                  textAlign: "justify", // Add this line to justify the text
                  marginTop: "30px",
                }}
              >
                We have a proven record of handling both advisory and dispute
                resolution matters both at the High Courts and District Courts
                of Pakistan. The Firm is regularly engaged by foreign companies,
                multinationals, large local companies and high-profile
                individuals to advise them and/or to represent them in cases
                which, fall in the following areas:
              </p>
              <img style={{ width: "40vw", height: "60vh", marginLeft: "-30px"}} src={imgExpertise} />
            </div>
          </MDBCol>
          <MDBCol  style={{ width: "40vw", marginRight:"-300px", marginTop:"100px" }} >
            {" "}
            <img src={img} style={{height: "75vh"}}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Expertise;
