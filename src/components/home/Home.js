import React, { useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import img1 from "../asserts/img 1.jpg";
import img2 from "../asserts/img 2.jpg";
import img3 from "../asserts/img 3.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imgArr = [img1, img2, img3, img2];

  const slides = [
    {
      title: "Family Solicitors And Divorce Lawyers",
      content: "Barristers | Advocates | Mediators",
    },
    {
      title: "Diverse Team Of Partners And Associates",
      content: "Barristers | Advocates | Mediators",
    },
    {
      title: "Highest Standards Of Professional Ethics",
      content: "Barristers | Advocates | Mediators",
    },
    {
      title: "Efficient In Critical Time-Sensitive Cases",
      content: "Barristers | Advocates | Mediators",
    },
  ];

  const pStyle = {
    color: "#FFFFFF",
    fontSize: "24px",
  };

  const h2Style = {
    color: "#FFFFFF",
    fontSize: "36px",
    fontWeight: "bold",
  };

  const sliderContainerStyle = {
    display: "flex",
    width: `${slides.length * 100}vw`,
    transform: `translateX(-${currentSlide * 100}vw)`,
    transition: "transform 0.3s ease-in-out",
  };

  const sliderItemStyle = {
    flex: "1",
    minWidth: "100vw",

    padding: "20px",
  };

  const btnStyle = {
    border: "1px solid #CBA557",
    color: "#CBA557",
    backgroundColor: "transparent",
    fontSize: "18px",
    padding: "10px 20px",
    marginTop: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  const btnHoverStyle = {
    backgroundColor: "#CBA557",
    color: "#FFFFFF",
  };
  const arrDivStyle = {
    width: "40px",
    height: "40px",
    border: "1px solid #CBA557",
    color: "#CBA557",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  const arrowContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100px", // Adjust the width as needed
    margin: "0 auto",
  };
 
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentSlide]);

//   console.log(imgArr[currentSlide]);
  return (
    <div
    style={{
      position: "relative",
      height: "100vh",
      fontFamily: "Poppins",
      fontWeight: 'bold'
    }}
  >
    <img
      src={imgArr[currentSlide]}
      alt="Background"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover", // Adjust as needed
        zIndex: -1, // Place the image behind other content
        filter: "brightness(50%)", // Adjust the brightness value as needed
      }}
    />
      <div style={sliderContainerStyle}>
        {slides.map((slide, index) => (
          <div key={index} style={sliderItemStyle}>
            <div
              style={{
                width: "500px",
                marginTop: "100px",
                marginLeft: "200px",
              }}
            >
              <p style={{color: "#CBA557", fontSize: "24px"}}>Khosa & Iqbal Law</p>
              <h2 style={h2Style}>{slide.title}</h2>
              <p style={pStyle}>{slide.content}</p>

              <button
                style={{
                  ...btnStyle,
                  ...(isHovered ? btnHoverStyle : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => goToSlide(index)}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={arrowContainerStyle}>
        <div
          onClick={prevSlide}
          style={arrDivStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#CBA557";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <HiArrowLeft
            style={{ color: "#CBA557" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#CBA557";
            }}
          />
        </div>
        <div
          onClick={nextSlide}
          style={arrDivStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#CBA557";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <HiArrowRight
            style={{ color: "#CBA557" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#CBA557";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
