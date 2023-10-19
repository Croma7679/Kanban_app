import React from "react";
import "./Card.css";
import "../Utils/utils.css"

const Card = ({ id, title, tag, status, user }) => {
  return (
    <div className="cardContainer">
      <div className="cardHeading disp-f">
        <span style={{ textTransform: "uppercase" }}>
          {id}
        </span>
        {user ? (
          <div></div>
          // <div className="showStatus"></div>
        ) : (
          <div className="imageCont">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="UserImage"
            />
            <div className="showStatus"></div>
          </div>
        )}
      </div>
      <div className="cardTitle" style={{ fontWeight: 400 }}>
        <p className="titles">{title}</p>
      </div>
      <div className="cardTags disp-f">
        <div className="tags "> ... </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags">
              {" "}
              <span>•</span> {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
