import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.imageUrl} className="image-scaling" />
      <h3 style={{ fontSize: "20px", textAlign: "center" }}>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;
