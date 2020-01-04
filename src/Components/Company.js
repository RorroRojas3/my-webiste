import React from "react";

function Company(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 align-self-end">
          <img
            className="image-fluid"
            width="50%"
            height="50%"
            src={props.logo}
            alt="Company Logo"
          ></img>
        </div>
        <div className="col-md-4 align-self-center">
          <h4 style={nameStyle}>{props.name}</h4>
        </div>
        <div className="col-md-4 align-self-center">
          <p>{props.date}</p>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-md">
          <h5 style={titleStyle}>{props.title}</h5>
        </div>
        <div className="col-md">
          <h5>{props.location}</h5>
        </div>
      </div>
      <div className="row ml-5">
        <ul>
          {props.descriptions.map((description, key) => {
            return <li>{description}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

const titleStyle = {
  fontStyle: "italic"
};

const nameStyle = {
  fontWeight: "bold"
};

// const logoStyle = {
//   width: "100px",
//   height: "100px"
// };

export default Company;
