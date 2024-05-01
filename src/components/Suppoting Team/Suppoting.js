import React, { useState, useEffect } from "react";
import Carousel from "better-react-carousel";
import lineHori from "../asserts/Horizontal line.png";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import C1 from "../asserts/c1.png"
import C2 from "../asserts/c2.png"
import C3 from "../asserts/c3.png"


const Slider = () => {
  const [centredModal, setCentredModal] = useState(false);

  return (
    <div
      style={{ width: "100vw", backgroundColor: "#FFFFFF", padding: "50px 10px" }}

    >
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
            Supporting Team
            </h2>
            <img src={lineHori} />
          </MDBCol>
        </MDBRow>
        <div style={{marginRight: "5px"}}>
      <Carousel
        id="carosel_div"
        cols={1}
        rows={1}
        gap={30}
        loop={true}
        autoplay={2000}
      >
        <Carousel.Item>
          <div style={{marginTop:"30px",width: "100vw"}}>
            <img src={C1} style={{width: "90%",marginLeft: "2.5%"}}/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{marginTop:"30px",width: "100vw"}}>
            <img src={C2} style={{width: "90%", marginLeft: "2.5%"}}/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{marginTop:"30px",width: "100vw"}}>
            <img src={C3} style={{width: "90%", marginLeft: "2.5%"}}/>
          </div>
        </Carousel.Item>
       
        
        
      </Carousel>
      </div>
    </div>
  );
};

export default Slider;
