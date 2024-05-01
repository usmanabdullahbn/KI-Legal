import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox separately since its value is boolean
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background color
        margin: "30px",
        paddingTop: "30px", // Added padding
        paddingBottom: "30px", // Added padding
        width: "40vw",
        borderRadius: "10%"
      }}
    >
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="8">
            <h2
              style={{
                fontFamily: "Amiri, serif",
                fontSize: "24px",
                fontWeight: 600,
                color: "#FFFFFF",
                textAlign: "center", // Center the text
              }}
            >
              Book an appointment
            </h2>
          </MDBCol>
        </MDBRow>
        <form onSubmit={handleSubmit}>
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <MDBInput
                label="Full Name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                style={{
                  margin: "10px 0", // Added margin top and bottom
                  border: "2px solid #FFFFFF", // White border
                }}
                labelClass="text-white" // Label text color
                inputClass="text-white" // Input text color
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <MDBInput
                label="Phone No."
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  margin: "10px 0", // Added margin top and bottom
                  border: "2px solid #FFFFFF", // White border
                }}
                labelClass="text-white" // Label text color
                inputClass="text-white" // Input text color
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <MDBInput
                label="E-mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  margin: "10px 0", // Added margin top and bottom
                  border: "2px solid #FFFFFF", // White border
                }}
                labelClass="text-white" // Label text color
                inputClass="text-white" // Input text color
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <MDBInput
                label="Age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                style={{
                  margin: "10px 0", // Added margin top and bottom
                  border: "2px solid #FFFFFF", // White border
                }}
                labelClass="text-white" // Label text color
                inputClass="text-white" // Input text color
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <div className="form-check align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  id="termsCheckbox"
                  required
                  style={{ transform: "scale(0.8)" }} // Smaller checkbox
                />
                <label className="form-check-label text-white" htmlFor="termsCheckbox">
                  I accept the Terms of Use
                </label>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <MDBBtn
                color="transparent" // Transparent background color
                type="submit"
                style={{
                  color: "#FFFFFF", // Text color
                  border: "2px solid #FFFFFF", // White border
                  width: "310px",
                   marginTop: "5px"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#CBA557";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
              >
                Book an Appointment <MDBIcon far icon="paper-plane" className="ms-1" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </div>
  );
};

export default AppointmentForm;
