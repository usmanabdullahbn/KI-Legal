import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import lineHori from "../asserts/Horizontal line.png";
import lineVer from "../asserts/vertical line.png";
import img from "../asserts/about.png"

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5F7F8",
      }}
    >
      <MDBContainer style={{ width: "100vww", margin: 0, padding: 0 }}>
        <MDBRow>
          <MDBCol> <img src={img} style={{width: "40vw"}}/></MDBCol>
          <MDBCol style={{width: "60vw" }}>
            <div
              style={{
                height: "100vh",
                fontFamily: "Poppins",
                width: "auto",
                // marginLeft: "30px",
                marginTop: "30%",
                marginRight: "-70px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>About Us</h2>
              <img style={{margin: "0 2px"}} src={lineHori} />
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
                We are a diverse team of Partners and Associates comprising of
                Barristers, Advocates, and Mediators and pride ourselves on our
                results-based approach, passion for legal excellence, and the
                highest standards of professional ethics. The breadth of
                knowledge and resources the firm has developed places us in a
                unique position to minimize risk by diligently studying the
                unique pattern of every case over the long term and thus
                offering practical and prompt solutions. Our litigation services
                cover various areas of practice including, but not limited to,
                commercial law, corporate law, constitutional law, property, and
                construction law, white-collar crime, antitrust and trade
                practices, business disputes, environmental issues, government
                advocacy and public policy, government contracts, trusts and
                estates, taxation and customs, regulatory issues including
                telecommunications, energy along with family law. Our focus is
                on building long-term, sustainable relationships by
                understanding our clients and their markets and giving them
                personalized attention.
              </p>
              <img style={{margin: "2px",marginTop: "-2px"}} src={lineVer} />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AboutUs;
