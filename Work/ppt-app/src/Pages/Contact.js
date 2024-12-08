import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out! You can contact me at:
      </p>
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Contact;
