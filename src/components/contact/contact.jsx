import React from "react";
import locationIcon from "../../assets/location-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import messageIcon from "../../assets/msg-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import arrowIcon from "../../assets/white-arrow.png";
import "./contact.css";

// Anahtar koda gomulmez: `src/Constant.jsx` .gitignore'daydi, bu yuzden repoyu
// klonlayan hic kimse derleyemiyordu (Vite "Could not resolve ../../Constant").
// Artik derleme zamaninda ortam degiskeninden geliyor.
const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "").trim();

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!accessKey) {
      setResult(
        "Form is not configured: set VITE_WEB3FORMS_ACCESS_KEY in your .env file."
      );
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={messageIcon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your feedback, questions,
          and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li>
            <img src={mailIcon} alt="" /> Contact@Example.dev
          </li>
          <li>
            <img src={phoneIcon} alt="" /> +1 123-456-7890
          </li>
          <li>
            <img src={locationIcon} alt="" /> 77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" id="Enter your mobile number" required />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={arrowIcon} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
