import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import lineHori from "../asserts/Horizontal line.png";

const ChooseUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5F7F8",
        paddingTop: "50px",
      }}
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center">
            <h2
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "44px",
                color: "rgb(58, 58, 58)",
              }}
            >
              Why Choose Us?
            </h2>
            <img src={lineHori} />
          </MDBCol>
        </MDBRow>
        <MDBRow style={{marginLeft: "30px"}}>
          <MDBCol className="text-center">
            <div style={{width: "300px", height: "auto", padding: "25px", border: "1px solid white"}}>
            <p
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "20px",
                fontWeight: "bolder",
                lineHeight: "28px",
                color: "rgb(203, 165, 87)",
              }}
            >
              Pragmatic Approach
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25.6001px",
                color: "#101010",
                textAlign: "justify"
              }}
            >
              We approach disputes by carefully analyzing problems and
              suggesting practical solutions to minimize risk over the long
              term. Our focus is to diligently study the unique pattern of every
              case and present the best possible solution.
            </p>
            </div>
          </MDBCol>
          <MDBCol className="text-center">
            <div style={{width: "300px", height: "auto", padding: "25px", border: "1px solid white"}}>
            <p
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "20px",
                fontWeight: "bolder",
                lineHeight: "28px",
                color: "rgb(203, 165, 87)",
              }}
            >
             Tailored Made Strategies
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25.6001px",
                color: "#101010",
                textAlign: "justify"
              }}
            >
             We pride ourselves in developing bespoke strategies for our client's issues in a practical and legal sense. There is no one size fits all solution – each issue presented to us is analyzed in detail and we apply our expertise to cut through the complexity and arrive at the right solution for clients.
            </p>
            </div>
          </MDBCol>
          <MDBCol className="text-center">
            <div style={{width: "300px", height: "auto", padding: "25px", border: "1px solid white"}}>
            <p
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "20px",
                fontWeight: "bolder",
                lineHeight: "28px",
                color: "rgb(203, 165, 87)",
              }}
            >
             Efficiency In Time Critical Cases
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25.6001px",
                color: "#101010",
                textAlign: "justify"
              }}
            >
             We specialize in acting for our clients in highly challenging and complex cases that involve extraordinary legal issues which are highly time-sensitive and require a quick turnaround. We have been highly successful in critical cases where rapid execution was critical to safeguard our clients’ interests.
            </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{marginLeft: "30px"}}>
          <MDBCol className="text-center">
            <div style={{width: "300px", height: "auto", padding: "25px", border: "1px solid white"}}>
            <p
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "20px",
                fontWeight: "bolder",
                lineHeight: "28px",
                color: "rgb(203, 165, 87)",
              }}
            >
             Subject Matter Expertise
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25.6001px",
                color: "#101010",
                textAlign: "justify"
              }}
            >
           Our capable advocates are highly experienced in all aspects of Pakistani law. We have strong experience in multiple areas where our team members are recognized for their subject matter expertise.
            </p>
            </div>
          </MDBCol>
          <MDBCol className="text-center">
            <div style={{width: "300px", height: "auto", padding: "25px", border: "1px solid white"}}>
            <p
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "20px",
                fontWeight: "bolder",
                lineHeight: "28px",
                color: "rgb(203, 165, 87)",
              }}
            >
              Confidentiality And Discretion
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25.6001px",
                color: "#101010",
                textAlign: "justify"
              }}
            >
            We exercise utmost discretion when managing client issues, which often entail delicate and confidential matters.
            </p>
            </div>
          </MDBCol>
          <MDBCol className="text-center">
            <div style={{width: "300px", height: "auto", padding: "25px", border: "1px solid white"}}>
            <p
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "20px",
                fontWeight: "bolder",
                lineHeight: "28px",
                color: "rgb(203, 165, 87)",
              }}
            >
              Personalized Relationships
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25.6001px",
                color: "#101010",
                textAlign: "justify"
              }}
            >
             At the heart of our work is the philosophy of nurturing authentic professional relationships that enable us to better understand our clients’ needs to help them achieve their ambitions.
            </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ChooseUs;
