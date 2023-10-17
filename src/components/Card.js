import * as React from "react";
import "./Card.css";
// import CardActions from "@mui/material/CardActions";

export default function BasicCard(props) {
  const { id, title } = props;
  return (
    <div className="card" sx={{ maxWidth: 275 }}>
      <div>
        <h3 style={{ fontWeight: 300 }}>{id}</h3>
        <h2>{title}</h2>
      </div>
      {/* <CardActions></CardActions> */}
    </div>
  );
}
