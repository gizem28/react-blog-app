import React, { useState } from "react";
import Button from '@mui/material/Button';
import img from "../assets/contact.png";
import SearchBar from "../components/SearchBar";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
    <SearchBar/>
      < div style={{backgroundImage:`url(${img})`,
      backgroundRepeat:" no-repeat",
      backgroundSize: "100% 100%",
      height:"74vh", marginTop:0}}>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank">
          <h1 className="pt-5">Contact Us</h1>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className="px-5 py-3 relative bg-white border-0 shadow"
          required
        />
      </div>
      <div className="mt-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-5 py-3 relative border-0 shadow"
          required
        />
      </div>
      <div className="mt-4">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-5 py-3 relative border-0 shadow "
          required
        />
      </div>
      <div>
      <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px:5, bgcolor: 'secondary.main' }}>
              Send Message
            </Button>
      </div>
    </form>
    </div>
    </>
  );
};

export default ContactForm;
