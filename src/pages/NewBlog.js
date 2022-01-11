import React, { useState } from "react";
import Button from '@mui/material/Button';
import img from "../assets/newblog.png";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const NewBlog = () => {
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
      < div style={{backgroundImage:`url(${img})`,
      backgroundRepeat:" no-repeat",
      backgroundSize: "100% 170%",
      height:"74vh", marginTop:0}}>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank">
          <h1 className="pt-3">Create New Blog</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Title"
          name="name"
          className="px-4 py-3 relative bg-white border-0 shadow"
          required
          style={{height:50, width:500}}
        />
      </div>
      <div className="mt-4">
        <input
          type="alt"
          placeholder="Image URL"
          name="image"
          className="px-4 py-3 relative border-0 shadow"
          required
          style={{height:50, width:500}}
        />
      </div>
      <div className="mt-4">
        <textarea
          placeholder="Content"
          name="message"
          className="px-4 py-3 relative border-0 shadow "
          required
          style={{height:150, width:500}}
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
  );
};

export default NewBlog;

