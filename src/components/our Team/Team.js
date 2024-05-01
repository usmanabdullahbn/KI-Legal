import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import lineHori from "../asserts/Horizontal line.png";
import muneer from "../asserts/Munir.png";
import Khosa from "../asserts/Khosa.png";

const Team = () => {
  const mdbcol = {
    width: "50vw",
  };
  return (
    <div style={{ backgroundColor: "#FFFFFF",paddingTop:"30px"}}>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center">
            {" "}
            <h2
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "44px",
                color: "rgb(58, 58, 58)",
              }}
            >
              Leadership Team
            </h2>
            <img src={lineHori} />
          </MDBCol>
        </MDBRow>
        <MDBRow style={{ marginTop: "50px" }}>
          <MDBCol style={mdbcol}>
            <div style={{ marginTop: "30px" }}>
              <img src={muneer} style={{ height: "75vh" }} />
            </div>
          </MDBCol>
          <MDBCol style={mdbcol}>
            <div
              style={{
                // height: "100vh",
                fontFamily: "Poppins",
                width: "auto",
                marginLeft: "50px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Muneer Iqbal</h2>
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
                Mr. Iqbal is a Managing Partner at Khosa & Iqbal Law and is
                responsible for litigation and corporate matters. He is renowned
                for his commitment to excellence and for his ability to find
                innovative solutions to complex legal problems. He has a
                formidable reputation in the Courts and is known for advocacy
                and in-depth legal knowledge. He has experience in working on
                civil as well as criminal litigation dealing with contentious
                matters of Property, Banking, NAB, Intellectual Property,
                Service, Rent, Labor, and Family Disputes. He is also the host
                of a podcast series, Wakeel Sahab Podcast, where leading lawyers
                are invited to discuss different spectrums of law with the aim
                of making it easier for laymen to understand the law and use it
                to their advantage. Other experts in different fields are also
                invited to provide the general public an opportunity to increase
                their knowledge in various domains. The Podcast series is
                available on Youtube (www.youtube.com/ wakeelsahab) and all
                audio streaming platforms.
              </p>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow style={{ marginTop: "50px" }}>
          <MDBCol style={mdbcol}>
            <div
              style={{
                // height: "100vh",
                fontFamily: "Poppins",
                width: "auto",
                marginRight: "50px",
                marginLeft: "30px",
                marginTop: "50px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Aamir Khosa</h2>
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
                Mr. Khosa is a Managing Partner at Khosa & Iqbal Law and has
                experience in a diverse range of legal practice areas. He is
                responsible for our litigation matters where he has experience
                in working on civil as well as criminal matters of Property,
                NAB, Intellectual Property, Service, Rent and Family Disputes.
                He has a reputation for providing exceptional legal advice and
                is known for his experience and expeditious disposal in criminal
                litigation.
              </p>
            </div>
          </MDBCol>
          <MDBCol style={mdbcol}>
            <div style={{ marginTop: "30px" , marginLeft: "50px",}}>
              <img src={Khosa} style={{ height: "75vh" }} />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Team;
